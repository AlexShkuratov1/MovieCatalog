using Newtonsoft.Json.Linq;
using System.Net;

namespace server.Data
{
    public class MovieDownload
    {
        HttpWebRequest _request;
        private string urlForId = "https://imdb-api.com/en/API/Top250Movies/k_ugndeuwi";
        public string Response { get; set; }
        Movie[] movies = new Movie[250];
        public async Task<bool> FillMovieDataBaseAsync()
        {
            GetMovieFromApi();
            using (var db = new AppDBContext())
            {
                try
                {
                    for (int i = 0; i < 250; i++)
                    {
                        if((db.Movies.FirstOrDefault(movie => movie.Id == (i+1))==null))
                        {
                            await MovieRepository.CreateMovieAsync(movies[i]);
                        }
                        else
                        {
                            await MovieRepository.DeleteMovieAsync(i+1);
                            await MovieRepository.CreateMovieAsync(movies[i]);
                        }
                    }
                    return true;
                }
                catch
                {
                    return false;
                }
            }
            
        }
        public void GetMovieFromApi()
        {
            GetMovieImdbId();
            _request.Method = "GET";
            try
            {
                for (int i = 0; i < movies.Length; i++)
                {
                    string id = movies[i].ImdbId;
                    string urlForMovie = $"https://www.omdbapi.com/?i={id}&apikey=147da4ea";
                    _request = (HttpWebRequest)WebRequest.Create(urlForMovie);
                    HttpWebResponse response = (HttpWebResponse)_request.GetResponse();
                    var stream = response.GetResponseStream();
                    if (stream != null)
                    {
                        Response = new StreamReader(stream).ReadToEnd();
                        var json = JObject.Parse(Response);
                        movies[i].Title = Convert.ToString(json["Title"]);
                        movies[i].Year = Convert.ToInt16(json["Year"]);
                        movies[i].Description = Convert.ToString(json["Plot"]);
                        movies[i].Rating = Convert.ToDouble(json["imdbRating"]);
                        movies[i].Png = Convert.ToString(json["Poster"]);
                    }
                }
            }
            
            catch
            {

            }
        }

        public void GetMovieImdbId()
        {
            _request = (HttpWebRequest)WebRequest.Create(urlForId);
            _request.Method = "GET";
            try
            {
                HttpWebResponse response = (HttpWebResponse)_request.GetResponse();
                var stream = response.GetResponseStream();
                if (stream != null)
                {
                    Response = new StreamReader(stream).ReadToEnd();
                    var json = JObject.Parse(Response);
                    var moviesId = json["items"];
                    int i = 0;
                    foreach (var movieForFill in moviesId)
                    {
                        Movie movie = new Movie();
                        movie.Id = i + 1;
                        movie.ImdbId = Convert.ToString(movieForFill["id"]);
                        movies[i] = movie;
                        Console.WriteLine(movies[i].ImdbId);
                        i++;
                    }
                }
            }
            catch (Exception)
            {

            }
        }
    }
}

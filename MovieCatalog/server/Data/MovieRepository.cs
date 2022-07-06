using Microsoft.EntityFrameworkCore;

namespace server.Data
{
    internal static class MovieRepository
    {
        internal async static Task<List<Movie>> GetMoviesAsync()
        {
            using (var db = new AppDBContext())
            {
                return await db.Movies.ToListAsync();
            }
        }
        internal async static Task<Movie> GetMovieByIdAsync(int movieId)
        {
            using (var db = new AppDBContext())
            {
                return await db.Movies.FirstOrDefaultAsync(movie => movie.Id == movieId);
            }
        }
        internal async static Task<bool> CreateMovieAsync(Movie movieToCreate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    await db.Movies.AddAsync(movieToCreate);
                    return await db.SaveChangesAsync() >= 1;
                }
                catch
                {
                    return false;
                }
            }
        }
        internal async static Task<bool> UpdateMovieAsync(Movie movieToUpdate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    db.Movies.Update(movieToUpdate);
                    return await db.SaveChangesAsync() >= 1;
                }
                catch
                {
                    return false;
                }
            }
        }
        internal async static Task<bool> DeleteMovieAsync(int movieId)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    Movie movieToDelete = await GetMovieByIdAsync(movieId);
                    db.Remove(movieToDelete);
                    return await db.SaveChangesAsync() >= 1;
                }
                catch
                {
                    return false;
                }
            }
        }
    }
}

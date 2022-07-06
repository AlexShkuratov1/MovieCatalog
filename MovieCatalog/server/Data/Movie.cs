using System.ComponentModel.DataAnnotations;

namespace server.Data
{
    internal sealed class Movie
    {
        [Key]
        public int Id { get; set; }
        public string ImdbId { get; set; } = "";
        public string Title { get; set; } = "";
        public int Year { get; set; }
        public double Rating { get; set; }
        public string Description { get; set; } = "";
        public string Png { get; set; } = "";
    }
}

using Microsoft.EntityFrameworkCore;

namespace server.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Movie[] movies = new Movie[5];
            for (int i = 1; i <= 5; i++)
            {
                movies[i - 1] = new Movie
                {
                    Id = i,
                    ImdbId = "",
                    Title = $"Movie {i}",
                    Year = i,
                    Rating = 8,
                    Description = $"Film numbered{i}",
                    Png = "nope"
                };

            }
            modelBuilder.Entity<Movie>().HasData(movies);
        }
    }
}

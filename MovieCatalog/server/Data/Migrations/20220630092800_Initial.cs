using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ImdbId = table.Column<string>(type: "TEXT", nullable: false),
                    Title = table.Column<string>(type: "TEXT", nullable: false),
                    Year = table.Column<int>(type: "INTEGER", nullable: false),
                    Rating = table.Column<double>(type: "REAL", nullable: false),
                    Description = table.Column<string>(type: "TEXT", nullable: false),
                    Png = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Description", "ImdbId", "Png", "Rating", "Title", "Year" },
                values: new object[] { 1, "Film numbered1", "", "nope", 8.0, "Movie 1", 1 });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Description", "ImdbId", "Png", "Rating", "Title", "Year" },
                values: new object[] { 2, "Film numbered2", "", "nope", 8.0, "Movie 2", 2 });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Description", "ImdbId", "Png", "Rating", "Title", "Year" },
                values: new object[] { 3, "Film numbered3", "", "nope", 8.0, "Movie 3", 3 });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Description", "ImdbId", "Png", "Rating", "Title", "Year" },
                values: new object[] { 4, "Film numbered4", "", "nope", 8.0, "Movie 4", 4 });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Description", "ImdbId", "Png", "Rating", "Title", "Year" },
                values: new object[] { 5, "Film numbered5", "", "nope", 8.0, "Movie 5", 5 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}

using Microsoft.OpenApi.Models;
using Newtonsoft.Json.Linq;
using server.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder.AllowAnyMethod()
            .AllowAnyHeader()
            .WithOrigins("http://localhost:3000", "https://appname.azurestaticapps.net");
        });
});
var request = new MovieDownload();
await request.FillMovieDataBaseAsync();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGetOptions =>
{
    swaggerGetOptions.SwaggerDoc("v1", new OpenApiInfo { Title = "Movie Catalog", Version = "v1" });
});

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI(swaggerUIOptions =>
{
    swaggerUIOptions.DocumentTitle = "Movie Catalog";
    swaggerUIOptions.SwaggerEndpoint("/swagger/v1/swagger.json", "Movie Catalog");
    swaggerUIOptions.RoutePrefix = string.Empty;
});

app.UseHttpsRedirection();
app.UseCors("CORSPolicy");

app.MapGet("get-all-movies", async () => await MovieRepository.GetMoviesAsync())
    .WithTags("Movies Endpoints");
app.MapGet("get-movie-by-id/{id}", async (int id) =>
{
    Movie movieToReturn = await MovieRepository.GetMovieByIdAsync(id);
    if (movieToReturn != null)
    {
        return Results.Ok(movieToReturn);
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Movies Endpoints");

app.MapPost("create-movie", async (Movie movieToCreate) =>
{
    bool createSuccessful = await MovieRepository.CreateMovieAsync(movieToCreate);
    if (createSuccessful)
    {
        return Results.Ok("Create successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Movies Endpoints");

app.MapPut("update-movie", async (Movie movieToUpdate) =>
{
    bool updateSuccessful = await MovieRepository.UpdateMovieAsync(movieToUpdate);
    if (updateSuccessful)
    {
        return Results.Ok("Update successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Movies Endpoints");

app.MapDelete("delete-movie-by-id/{movieId}", async (int movieId) =>
{
    bool deleteSuccessful = await MovieRepository.DeleteMovieAsync(movieId);
    if (deleteSuccessful)
    {
        return Results.Ok("Delete successful");
    }
    else
    {
        return Results.BadRequest();
    }
}).WithTags("Movies Endpoints");


app.Run();

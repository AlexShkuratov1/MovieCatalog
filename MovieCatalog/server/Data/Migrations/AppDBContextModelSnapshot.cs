﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using server.Data;

#nullable disable

namespace server.Data.Migrations
{
    [DbContext(typeof(AppDBContext))]
    partial class AppDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.6");

            modelBuilder.Entity("server.Data.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ImdbId")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Png")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("Rating")
                        .HasColumnType("REAL");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Year")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Film numbered1",
                            ImdbId = "",
                            Png = "nope",
                            Rating = 8.0,
                            Title = "Movie 1",
                            Year = 1
                        },
                        new
                        {
                            Id = 2,
                            Description = "Film numbered2",
                            ImdbId = "",
                            Png = "nope",
                            Rating = 8.0,
                            Title = "Movie 2",
                            Year = 2
                        },
                        new
                        {
                            Id = 3,
                            Description = "Film numbered3",
                            ImdbId = "",
                            Png = "nope",
                            Rating = 8.0,
                            Title = "Movie 3",
                            Year = 3
                        },
                        new
                        {
                            Id = 4,
                            Description = "Film numbered4",
                            ImdbId = "",
                            Png = "nope",
                            Rating = 8.0,
                            Title = "Movie 4",
                            Year = 4
                        },
                        new
                        {
                            Id = 5,
                            Description = "Film numbered5",
                            ImdbId = "",
                            Png = "nope",
                            Rating = 8.0,
                            Title = "Movie 5",
                            Year = 5
                        });
                });
#pragma warning restore 612, 618
        }
    }
}

import React from "react";
import './Movies.css'
import { Link } from "react-router-dom";
const Movies = ({ movies}) => {
  if (movies.length == 0) {
    <h1>loading</h1>
  }
  else {
    return (
      <><div className="container ">
        <div className="row">
          <div class="col">
            <div class="card">
              <img src={movies[0].png} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">{movies[0].title}</h6>
                <p class="card-text">Year: {movies[0].year}</p>
                <p class="card-text">Rating: {movies[0].rating}</p>
                <Link class="btn btn-primary" to={`/detail/${movies[0].id}`} role="button"> Подробнее</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={movies[1].png} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">{movies[1].title}</h6>
                <p class="card-text">Year: {movies[1].year}</p>
                <p class="card-text">Rating: {movies[1].rating}</p>
                <Link class="btn btn-primary" to={`/detail/${movies[1].id}`} role="button"> Подробнее</Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={movies[2].png} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title">{movies[2].title}</h6>
                <p class="card-text">Year: {movies[2].year}</p>
                <p class="card-text">Rating: {movies[2].rating}</p>
                <Link class="btn btn-primary" to={`/detail/${movies[2].id}`} role="button"> Подробнее</Link>
              </div>
            </div>
          </div>
        </div>
      </div><div className="container ">
          <div className="row">
            <div class="col">
              <div class="card">
                <img src={movies[3].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[3].title}</h6>
                  <p class="card-text">Year: {movies[3].year}</p>
                  <p class="card-text">Rating: {movies[3].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[3].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={movies[4].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[4].title}</h6>
                  <p class="card-text">Year: {movies[4].year}</p>
                  <p class="card-text">Rating: {movies[4].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[4].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={movies[5].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[5].title}</h6>
                  <p class="card-text">Year: {movies[5].year}</p>
                  <p class="card-text">Rating: {movies[5].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[5].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        </div><div className="container ">
          <div className="row">
            <div class="col">
              <div class="card">
                <img src={movies[6].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[6].title}</h6>
                  <p class="card-text">Year: {movies[6].year}</p>
                  <p class="card-text">Rating: {movies[6].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[6].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={movies[7].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[7].title}</h6>
                  <p class="card-text">Year: {movies[7].year}</p>
                  <p class="card-text">Rating: {movies[7].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[7].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={movies[8].png} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h6 class="card-title">{movies[8].title}</h6>
                  <p class="card-text">Year: {movies[8].year}</p>
                  <p class="card-text">Rating: {movies[8].rating}</p>
                  <Link class="btn btn-primary" to={`/detail/${movies[8].id}`} role="button"> Подробнее</Link>
                </div>
              </div>
            </div>
          </div>
        </div></>
    )
  }
};
export default Movies;


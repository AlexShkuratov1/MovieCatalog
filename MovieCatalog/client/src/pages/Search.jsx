import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
const Search = () => {
    const [movies, setMovies] = useState(null);
    const [filteredMovies, setFilteredMovies] = useState(null);
    useEffect(() => {
        axios.get('https://localhost:7123/get-all-movies').then(({ data }) => setMovies(data));
    }, []);
    const [value, setValue] = useState('');
    useEffect(() => {
        if (movies != null) {
            setFilteredMovies(movies.filter(movie => {
                return movie.title.toLowerCase().includes(value.toLowerCase());
            }))
        }
    }, [movies, value])
    console.log(filteredMovies)
    return (
        <><form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Поиск" onChange={(event) => setValue(event.target.value)} />
        </form>
            <div className="container ">
                {filteredMovies instanceof Array && filteredMovies.map((movie) => (
                    <><div class="row" key={movie.id}>
                        <div class="card" className="card-detail">
                            <div className='container text-white '>
                                <div class="row">
                                    <div class="col">
                                        <img src={movie.png} class="img-detail" alt="..." />
                                    </div>
                                    <div class="col">
                                        <h5 class="mt-5">{movie.title}</h5>
                                        <h5>Year: {movie.year}</h5>
                                        <h5>Rating: {movie.rating}</h5>
                                        <Link class="btn btn-primary mt-5" to={`/detail/${movie.id}`} role="button"> Подробнее</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></>
                ))}
            </div></>
    )
}


export default Search

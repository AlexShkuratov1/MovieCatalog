import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Detail.css';
const Detail = () => {

    const { id } = useParams()
    const [movie, setMovie] = useState(null);
    console.log(id)
    useEffect(() => {
        fetch(`https://localhost:7123/get-movie-by-id/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data))

    }, [id]);
    console.log(movie)
    if(movie==null)
    {
        <h1>Loading</h1>
    }
    else{
        return (
            <div class="card" className="card-detail">
            <div className='container text-white '>
                <div class="row" >
                    <div class="col">
                        <img src={movie.png} class="img-detail"  alt="..." />
                    </div>
                    <div class="col">
                        <h5>{movie.title}</h5>
                        <h5>Year: {movie.year}</h5>
                        <h5>Description: {movie.description}</h5>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export { Detail }

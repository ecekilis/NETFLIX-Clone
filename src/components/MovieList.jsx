import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useEffect, useState } from 'react'
import api from "../utils/api"
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../constants';



function MovieList({ genre }) {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);


    const params = {
        with_genres: genre.id,

    }

    useEffect(() => {
        api.get("/discover/movie").
            then((res) => setMovies(res.data.results))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold mb-3'>{genre.name}</h1>
            <Splide options={{
                pagination: false,//alttaki 3 nokta gitti
                autoWidth: true,
                lazyLoad: true, //yanyana getirir, arka arkaya degil
                gap: "10px"
            }} >

                {
                    movies.map((movie) => (
                        <SplideSlide key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img className='max-w-[300px] h-full' src={baseImgUrl + movie.poster_path} alt="" />
                            </Link>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div >
    )
}

export default MovieList

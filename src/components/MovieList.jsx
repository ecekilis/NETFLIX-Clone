import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useEffect } from 'react'
import api from "../utils/api"



function MovieList({ genre }) {
    console.log(genre);


    const params = {
        with_genres: genre.id,

    }

    useEffect(() => {
        api.get("/discover/movie", { params })
            .then((res) => console.log(res));
    }, []);

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold mb-3'>{genre.name}</h1>

            <Splide>

            </Splide>
        </div>
    )
}

export default MovieList

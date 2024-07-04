import React from 'react'

function Hero() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10'>
            <div className='flex flex-col gap-6 justify-center items-center'>
                <h1 className='text-3xl font-bold'>Hayali Arkadaslar</h1>
                <p>llklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djlklj fiej ifjiojiarajfoai djklj fiej ifjiojiarajfoai dj</p>

                <p><span>IMDB</span>
                    <span className='text-yellow-400 ms-2 font-semibold'>7.4</span>
                </p>

                <div className='flex gap-5'>
                    <button className='bg-red-600 p-2 rounded hover:bg-red-700'>Filmi Izle</button>
                    <button className='bg-blue-600 p-2 rounded hover:bg-blue-700'>Listeye Ekle</button>
                </div>


            </div>
            <div>
                <img className='max-h-[300px] hero-img my-4 object-contain' src="./hayali.jpg" alt="" />
            </div>


        </div>
    )
}

export default Hero

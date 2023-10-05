import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import CardsHome from '../components/CardsHome';
import SliderHome from '../components/SliderHome';
import './style.scss';

const Home = () => {


    const { data } = useContext(DataContext);
    console.log(data);

    return (
        <div>
            <SliderHome/>
            <div className='home'>
                {data.map((ele) => {
                    return (
                        <CardsHome key={ele.id} data={ele} />
                    )
                })}
            </div>
        </div>
    )
}

export default Home


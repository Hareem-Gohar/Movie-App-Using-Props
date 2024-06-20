import React from 'react'
import data from '../JSON/CardsData'
const Card = (props) => {
    console.log(props);
    return (
        <>  
        <div className="card cursor-pointer border-2 border-slate-800 w-4/5 hover:scale-105 transition duration-150 ease-in-out sm:w-[300px] bg-slate-100 p-2 text-white shadow-xl">
            <figure className=' rounded-lg border-2 border-slate-800'><img src={props.img} alt="Shoes" className=' h-[300px] w-full' /></figure>
            <div className="card-body px-2 pt-4 pb-2 text-slate-800">
                <h2 className="card-title text-3xl">{props.title}</h2>
                <p className='text-md'>{props.description}</p>
                <div className="card-actions justify-start">
                    <button className="btn border-2 border-slate-800  w-full text-xl uppercase text-slate-800">Watch Now</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card
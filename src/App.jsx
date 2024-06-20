import './index.css';
import { useState } from 'react';
import Card from './Components/Card';
import data from './JSON/CardsData'
function App() {
  return (
    <>
      <div className="bg-slate-300">
        <div className='fixed left-0 right-0 z-10'>
          <h1 className='text-4xl text-slate-700 text-center shadow-md uppercase font-bold py-5  bg-white'>List of Movies</h1>
        </div>


        {/* for rendering data */}
        {/* Using Props */}
        {/* <Card 
        img = {data[0].image}
        title = {data[0].title}
        description ={data[0].description}/> */}


        {/* using map method */}
        <div className="w-full max-w-7xl py-3 px-3 h-full mx-auto relative">
          <div className=" flex flex-wrap gap-x-3 gap-y-10 mt-32 justify-center">
            {data.map((val, ind) => {
              return (
                <Card
                  img={val.image}
                  title={val.title}
                  description={val.description} />
              );
            })}
          </div>
        </div>

      </div >

    </>
  )
}

export default App


// images

// https://img.freepik.com/free-vector/cinema-set-posters_225004-1159.jpg?t=st=1717066522~exp=1717070122~hmac=b15b4e11e458dfbfa4937d5923486fcd5bf7ac478c347a691be69d31d10c4406&w=740

// https://img.freepik.com/free-vector/red-dragon-text-effect_17005-900.jpg?t=st=1717066801~exp=1717070401~hmac=2357df6e5c5a9100e2267393c6998ca50d8e87e1d74d84fd15621bcfe18dd13d&w=740

// https://img.freepik.com/free-psd/space-text-effect_17005-1423.jpg?t=st=1717068470~exp=1717072070~hmac=a89076e9ae148c4e4b22053f16a0f935ed4738b34d03e4aa13e673dd7ff84132&w=740

// https://img.freepik.com/free-vector/retro-cyber-monday-diamond-shape_52683-47195.jpg?t=st=1717068504~exp=1717072104~hmac=7de8cbed3617d753ac710780973d2c1d678068d96bc392dbbe807a4f67fa0704&w=740


// https://img.freepik.com/free-vector/real-kingdom-text-effect_17005-875.jpg?t=st=1717068533~exp=1717072133~hmac=cff61a9f6a3a39c9a06665fb2f3c976a781444b8592e2c038f67f3719b2752a3&w=740

// https://img.freepik.com/free-vector/movie-night-cartoon-landing-page_107791-6072.jpg?t=st=1717069297~exp=1717072897~hmac=0823bf4cb1ef6722183beee085df5102311eb2f000ffa86cf3305aaa5133af61&w=740

// https://img.freepik.com/free-psd/horror-video-game-3d-text-style-effect_1389-1574.jpg?w=740&t=st=1717069900~exp=1717070500~hmac=667014a7f422a5371f8df6be299526342e0ca29c501274ddde64081ae6481c97


// https://img.freepik.com/free-psd/viking-video-game-3d-text-style-effect_1389-1570.jpg?w=740&t=st=1717069961~exp=1717070561~hmac=4bbf27b9e2f43e738d7aa967f76ec42307ed38b77835e7f5d82cc8deba4df502


// https://img.freepik.com/free-vector/zombie-style-text-effect_75503-128.jpg?t=st=1717066932~exp=1717067532~hmac=2df475757af90d856a78299ca400af85435cd3ed38a3d8d0b2f12af3e49cf910

// https://img.freepik.com/free-psd/rusty-3d-editable-text-effect-grunge-background_125540-5535.jpg?w=740&t=st=1717070036~exp=1717070636~hmac=7cee71e8a0dccb4b7fa92bfb797e67eaef7041f534fe9f17cd669a59bf7dd71a

// https://img.freepik.com/free-psd/broken-letters-text-effect_125540-1785.jpg?w=740&t=st=1717070038~exp=1717070638~hmac=f38c4991eb096c395eafb1076c1833067266fad49cb10e5c80c1fbf5800e9e95


// https://img.freepik.com/free-psd/demon-horror-text-effect_47987-18065.jpg?w=740&t=st=1717071966~exp=1717072566~hmac=711ca737dd44824fd554d7a23ceeff9c31dbdff839c07e1aa42ce42a07778ee8










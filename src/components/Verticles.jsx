import React from 'react'
import Masonry from './Masonry'

import "./Verticles.css";

const Verticles = () => {
  const data = [
    { id: 1, image: 'src/assets/verticles/blockchain.jpeg', height: 200, name: 'Blockchain' },
    { id: 2, image: 'src/assets/verticles/cp.jpg', height: 300, name: 'Computative Programming' },
    { id: 3, image: 'src/assets/verticles/cloud.jpeg', height: 400, name: 'Cloud Computing' },
    { id: 4, image: 'src/assets/verticles/cybersec.jpeg', height: 300, name: 'Cyber Security' },
    { id: 5, image: 'src/assets/verticles/dsa.jpeg', height: 400, name: 'DSA' },
    { id: 6, image: 'src/assets/verticles/da.png', height: 300, name: 'Data Analytics' },
    { id: 7, image: 'src/assets/verticles/network.webp', height: 300, name: 'Networking' },
    { id: 8, image: 'src/assets/verticles/web.jpeg', height: 200, name: 'Web Development' }
  ];

  return (
    <div>
      <div className="verticles">
        <h1 className='verticles-title'>OUR VERTICLES</h1>
        <Masonry data={data} />
      </div>
    </div>
  )
}

export default Verticles

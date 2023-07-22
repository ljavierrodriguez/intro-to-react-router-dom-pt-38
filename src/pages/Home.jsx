import React, { useState } from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
    const [name, setName] = useState("");


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <Carousel />
            </div>

            <div className="col-md-12">
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
        </div>
    </div>
  )
}

export default Home
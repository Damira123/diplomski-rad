import React from 'react'
import {Carousel} from "react-bootstrap"
import sinj31 from "../assents/sinj31.jpg"
import sinj34 from "../assents/sinj34.jpg"
import sinj1 from "../assents/sinj1.jpg"
import alka from "../assents/alka.jfif"
function RE() {
  return (
    <div>
        <>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sinj31}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sinj34}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sinj1}
          alt="Third slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={alka}
          alt="Four slide"
        />
      </Carousel.Item>
    </Carousel>
        </>
    </div>
  )
}
export default RE
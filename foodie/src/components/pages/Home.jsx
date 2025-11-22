import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/logo.jpg';


export default function Home() {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <div>
       <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src={img1} alt="" text="Hello 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={img2} alt="" text="Hello 2" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
         <img src={img1} alt="" text="Hello 3" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    
    </div>
  )
}

import {Container, Carousel, Image}  from 'react-bootstrap'
import React from 'react'

const Home = () => {
  return (
    <Container fluid  className='w-100 '>
       <Carousel >
      <Carousel.Item>
      <Image src="https://i.postimg.cc/ydgfhtb1/1.png" fluid  />;
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.postimg.cc/gJYyM5jF/2.png" fluid />;
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.postimg.cc/Y0067WQd/3.png" fluid />;
        
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Home
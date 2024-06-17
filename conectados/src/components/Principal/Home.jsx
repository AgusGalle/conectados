import {Container, Carousel, Image}  from 'react-bootstrap'
import React from 'react'

const Home = () => {
  return (
    <Container fluid className='p-0' >
       <Carousel >
      <Carousel.Item>
      <Image src="https://i.postimg.cc/hPMSf4XR/1.png" fluid  className="d-block w-100" />;
        
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.postimg.cc/JznRJwXD/2.png" fluid className="d-block w-100" />;
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://i.postimg.cc/V6yw3dVn/3.png" fluid className="d-block w-100" />;
        
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default Home
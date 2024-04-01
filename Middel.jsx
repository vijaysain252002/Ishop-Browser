import React from 'react'
import Container from './Container'

function Middel() {
  return (
    <div>
    
      <Container fluid={true}>
        <div className="w-[100%] h-[500px] color flex justify-end">
          <img
            src="images/Home/iphone.png"
            className=" md:w-[50%] h-[100%] "
            alt=""
          />
        </div>
      </Container>
    
    </div>
  )
}

export default Middel

import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'

export default function Herotop() {
  return (
    <div className='bg-primary w-full h-screen'>
        <div clasName='bg-repeat w-full h-full' style={{ backgroundImage: `url(${Illustration})` }}></div>
    
        <Container >
          <Header />
        </Container>
    </div>
  )
}

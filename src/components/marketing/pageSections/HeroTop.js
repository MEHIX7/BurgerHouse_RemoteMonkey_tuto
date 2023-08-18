import React from 'react'
import Illustration from '../../../medias/images/background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Products from '../../../medias/images/HeroTop/burger-hero-top.png'
import Button from '../../elements/Button'


export default function Herotop() {
  return (
      <div className=" bg-primary w-full">
          <div className="bg-repeat pb-28 w-full h-full" style={{ backgroundImage: `url(${Illustration})` }}>
          <Container>
            <Header />
            <div className=' relative w-full mt-28'>
              <img className='absolute z-0 -top-64 right-0 w-6/12' src={Products} alt='Un hamburger avec un verre avec du coca.' /> 

              <div className="absolute right-80 top-40 bg-red-primary w-40 h-40 rounded-full p-3">
                <div className="w-full h-full rounded-full text-white border-white border-2 border-dashed flex items-center justify-center">
                  <div className='text-center'>
                    <span className='block font-extrabold'>
                      <span className='text-5xl'>6</span>.49€
                    </span>
                    <span className='tracking-widest uppercase text-sm'>seulement</span>
                  </div>
                </div>
              </div>

              <div className='relative z-20 text-secondary uppercase '>
                <h1 className='mb-4 font-semibold'>C'est le moment de goûter au bon goût des hamburgers</h1>
                <h2 className='font-secondary shadowTitleSecondary'>
                  <span className='text-8xl block'>Burger</span> 
                  <span className='text-6xl'>House</span> <span className='text-4xl ml-3'>Click<span className='text-red-primary'>&</span>collect</span>
                </h2>
              </div>
            </div>
            <Button className="mt-5 rounded-sm" color="secondary" theme="big">
              Créer mon compte
            </Button>
            {/* bouton mehdi juste pour test 
            <Button className="mt-5 rounded-sm" className="bg-gradient-to-r from-cyan-500 to-blue-500 mt-2" theme="big">
              Produit par Mehdi Ahian
            </Button>
            */}
          </Container>
      </div>
    </div>
  )
}

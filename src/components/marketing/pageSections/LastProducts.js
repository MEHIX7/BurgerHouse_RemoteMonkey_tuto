import React from 'react'
import Container from '../../elements/Container'

export default function LastProducts() {
  return (
    
    <Container>
        <div className=' grid grid-row-2 grid-cols-2 gap-x-9 gap-y-9  w-full h-96 px-11 my-20'>
            <div className='bg-yellow-400 row-span-2 h-full rounded-md'>
                <span className='block'>Killer Burger</span>
                <span className=''>Burger le plus</span>
            </div>
            <div className='bg-yellow-500 h-full rounded-md'>
                <div className=''>
                    <span className='block'>Island Burger</span>
                    <span className=''>Plus de plais</span>
                    <span className=''>Plus de goût</span>
                </div>
            </div>

            <div className=" bg-yellow-600 h-full rounded-md">
                <div className=''>
                    <span className='block'>Orlando's Burger</span>
                    <span className=''>frais & pimenté</span>
                </div>
            </div>
        </div>
    </Container>
    
  )
}

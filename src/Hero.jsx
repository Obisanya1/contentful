import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
   <section className='hero'>
<div className='hero-center'>
    <div className='hero-title'>
<h1>Contentful CMS</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium in corporis, rerum modi consequatur, numquam quasi doloremque, voluptatem quidem nobis quo quas optio nisi! Voluptatem itaque iste quam dolore.
Minima, ea? Provident a ipsam, perferendis veritatis quibusdam hic cumque et explicabo expedita nisi inventore debitis nobis iure. Distinctio odio id recusandae et laudantium vitae esse sed, tempore doloribus aspernatur?</p>
    </div>
    <div className='img-container'>
<img src={heroImg} alt='woman and the browser'/>
    </div>
</div>
   </section>
  )
}

export default Hero

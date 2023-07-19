import React from 'react'
import './home.css'
import Inputbox from '../../Inputbox'
import Button from '../../Button'
const Home = () => {
  return (
    <>
    <section className='headersection'>
        <div className='headertext'>
            <h1>Your short-term rental.<br/>
            Our data.<br/>
            More revenue.</h1>
            <p>Accureate insights on any Airbnb or Vrbo property in the world.</p>
            <div>
              <Inputbox type={'text'} placeholder={'Enter any city or postal code to get started'}/>
              <Button name={'Search'}/>
            </div>
        </div>
<div className='headerimage'>
<img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={500} height={450}/>
</div>

    </section>
    
    
    </>
  )
}

export default Home
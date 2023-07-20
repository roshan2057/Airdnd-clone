import React from 'react'
import './home.css'
import Inputbox from '../../Inputbox'
import Button from '../../Button'
const Home = () => {
  return (
    <>
      <section className='headersection'>
        <div className='headertext'>
          <h1>Your short-term rental.<br />
            Our data.<br />
            More revenue.</h1>
          <p>Accureate insights on any Airbnb or Vrbo property in the world.</p>
          <div>
            <Inputbox type={'text'} placeholder={'Enter any city or postal code to get started'} />
            <Button name={'Search'} />
          </div>
        </div>
        <div className='headerimage'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={500} height={450} />
        </div>

      </section>

      <section className='section2'>

        <div className='section2_text'>
          <h4 id='header'>MARKETMINDER</h4>
          <h3>Smart decisions start with better intelligence.</h3><br />
          <p>Powered by Vrbo and airbnb adata from over 10 million global properties in 12000 global markets, MarketMInder is the #1 leading platform ofr short-term rental intelligence.<br /><br />
            Use market Minder to discover the <a href='/'>best places to invest in a vacation rental</a>, set the perfect price everydat and stay two steps ahead of the cometiton.
          </p>
          <Button name={'Learn More'} />
        </div>
        <div className='section2_img'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' width={669} height={590} alt='/' />
        </div>
      </section>
      <section className='section3'>
        <div className='items'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' width={200} height={150} alt='/' />
          <h4>Airbnb Calculator</h4>
          <p>Decide if a property is a smart linvestment by seeing the potential revenue, occupancy rate, and more for any address. See your revenue potential!</p>
        </div>

        <div className='items'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' width={200} height={150} alt='/' />
          <h4>Airbnb Calculator</h4>
          <p>Decide if a property is a smart linvestment by seeing the potential revenue, occupancy rate, and more for any address. See your revenue potential!</p>
        </div>

        <div className='items'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' width={200} height={150} alt='/' />
          <h4>Airbnb Calculator</h4>
          <p>Decide if a property is a smart linvestment by seeing the potential revenue, occupancy rate, and more for any address. See your revenue potential!</p>
        </div>
      </section>
      <section className='section4'>
        <div className='sec4_text'>
          <h4 id='header'>ENTERPRISE DATA SOLUTIONS</h4>
          <span>Custom data for next-level business insights</span>
          <p>Businesses opreating in the short-term arental sphere need industy-leding data to set them apart. weoffer the industry's most accureate, in-depth solutions for unique insights and analysis, Think property-level data, market trends, future-looking forecasts, lead generation tools, and more.<br />
            Enterprise data is downloadable, delivered as requested, and somes with expert account management.</p>
          <Button name={'Descover Enterprise Solutions'} />
        </div>
        <div className='sec4_img'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={500} height={450} />

        </div>
      </section>
      <section className='section5'>
        <div className='sec5_text'>
          <h4 id='header'>CASE STUDIES</h4>
          <span>Stories of STR Success</span>
          <p>Find out how hosts, propperty managers, real estate professionals, and many more have used our solutions to optimize performance and maxmize growth.</p>
        </div>
        <div className='sec5_right'>
          <h3>Why Property Management Inc. "CAncelled All Other Tools" After Using AirDNA.</h3>
          <p>"About a year ago, i saw that Aiordna was doing to really setp outside of the morm and beef up the data and solutions we aere providing, and o wa so simpressed that i decided to jsut shut everything else down." <br /><br /> -Marian header, corpoerter directore of Vactoin REntals, PMI<br /> <a href="/">Learm More-</a></p>
        </div>
      </section>
      <section className='section6'>
        <div className='sec6_text'>
          <h4 id='header'>RESOURCES</h4>
          <span>Ready to build your short-term rental business?</span>
          <br />
          <p>AirDNA is the worls's most trusted resource for caction rental research. Check out our full library of eductionsl videos, industry reports, blogs and case studies to karle the next step on your short-term rental jouney.</p>
          <Button name={'View all resources'} />
        </div>
        <div className='blog_items'>
        <div className='blog'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={350} height={200} />
          <span id='header'>Blog</span>
          <h3>Luxury Airbnbs:HOw Do They Perform & Are They Smart INvestments? |AirDNA</h3>
          <span>July 18,2023</span>
        </div>
        <div className='blog'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={350} height={200} />
          <span id='header'>Blog</span>
          <h3>Luxury Airbnbs:HOw Do They Perform & Are They Smart INvestments? |AirDNA</h3>
          <span>July 18,2023</span>
        </div>
        <div className='blog'>
          <img src='https://logopond.com/logos/5d50b7e780862243f64312c7c282e654.png' alt='/' width={350} height={200} />
          <span id='header'>Blog</span>
          <h3>Luxury Airbnbs:HOw Do They Perform & Are They Smart INvestments? |AirDNA</h3>
          <span>July 18,2023</span>
        </div>
        </div>
      </section>

    </>
  )
}

export default Home
import React from 'react'
import './footer.css'
import Inputbox from './Inputbox'
import Button from './Button'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='foot1'>
                    <h1>Get Started with <br />

                        MarketMinder today</h1>
                    <div id='info'>
                        whith powerful easy to use tools, it's never been easier to dig deper ito waction rental data to keep you above the competition in a saturted market.

                    </div>
                    <div><Button name={'Try it for Free'} /></div>
                </div>
                <div className='foot2'>
                    <div className='newsletter'>
                        <div>
                            <h2>Sign up for our newsletter</h2>
                            <p>Be the first to know about the latest shor-term rental trends</p>

                        </div>
                        <div>
                            <form>
                                <Inputbox type={'text'} placeholder="Enter your email" />
                                <Button type={'submit'} name={'Susbscribe'} />
                            </form>
                        </div>
                    </div>
                    <div className='list'>
                        <div className='col'>
                            <span>Solutions</span>

                            <a href='/'>MarketMInder</a>
                            <a href='/'>Enterprise Solutions</a>
                            <a href='/'>Rentalizer</a>
                            <a href='/'>API</a>
                            <a href='/'>Airbnb Calculator</a>
                            <a href='/'>Airbnb 101</a>

                        </div>
                        <div className='col'>
                            <span>Industries</span>

                            <a href='/'>DOMs and Tourism Boards</a>
                            <a href='/'>Real Estate</a>
                            <a href='/'>Property Managers</a>
                            <a href='/'>PMS and Channel Managers</a>
                            <a href='/'>Hedge Funds</a>
                            <a href='/'>Academic</a>

                        </div>
                        <div className='col'>
                            <span>Resources</span>

                            <a href='/'>Blog</a>
                            <a href='/'>Press and News</a>
                            <a href='/'>AirDNA Research</a>
                            <a href='/'>Case Stdies</a>
                            <a href='/'>Guides </a>
                            <a href='/'>Podcasts </a>
                            <a href='/'>STR Glossary</a>
                            <a href='/'>FAQs </a>
                            <a href='/'>Help Center </a>

                        </div>
                        <div className='col'>
                            <span>Company</span>

                            <a href='/'>About</a>
                            <a href='/'>Carrers Events</a>
                            <a href='/'>AirDNA Data: How it Works</a>
                            <a href='/'>Our Data Accuracy</a>
                            <a href='/'>Affilates</a>

                        </div>
                        <div className='col'>
                            <span>Contact Us</span>

                            <a href='/'>Sales and Suport</a>
                            <a href='/'>Press</a>

                        </div>
                    </div>
                    <div className='foot_address'>
                        <span>United States</span>
                        <a href='/'>+1(720)372-4343</a>
                        <a href='/'>12423 24 skfsk co 843948</a>
                        <br />
                        <span>Spain</span>
                        <a href='/'>+1(720)372-4343</a>
                        <a href='/'>12423 24 skfsk co 843948</a>
                    </div>
                    <div className='foot_bottom'>
                        <div className='social_media'>

                        </div>
                        <div className='terms'>
                            <a href='/'>Terms of Service</a>|
                            <a href='/'>Privacy Policy</a>|
                            <a href='/'>Content Usage</a>
                        </div>
                        <span>2022 AirDNA, LLC, All rights reserve. AirDNA is a trademark of AirDNA, LLC.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
import React from 'react'
import './navbar.css'
import { Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-bar">
                    <i className='bx bx-menu sidebarOpen' ></i>
                    <span className="logo navLogo">
                        <Link to="/">IRON-RIM</Link>
                    </span>
                    <div className="menu">
                        <div className="logo-toggle">
                            <i className='bx bx-x siderbarClose'></i>
                        </div>
                        <ul className="nav-links">
                            <li className='dropdown'>
                                <span className='dropdown-content'>
                                    Solutions
                                </span>
                                <div className='content'>

                                    <div className='subdropdown'>
                                        <p className='sub-dropdown-content'>
                                            MarketMinder
                                        </p>
                                        <div className='sub-content'>
                                            <Link to="/vacation-rental-data">Market Research</Link>
                                            <Link to="/ironrim-pricing-tool">Dynamic Pricing</Link>
                                            <Link to="/best-place-to-invest">Real Estate Investing</Link>
                                            <Link to="/my-properties">Performance Benchmarking</Link>
                                        </div>
                                    </div>

                                    <div className='subdropdown'>
                                        <p className='sub-dropdown-content'>
                                            Enterprise Solutions
                                        </p>
                                        <div className='sub-content'>
                                            <Link to="/">Property Managers</Link>
                                            <Link to="/">Real Estate Investores</Link>
                                            <Link to="/">DMOs and Tourism Organizations</Link>
                                            <Link to="/">Agents and Brokerages</Link>
                                            <Link to="/">Hedge Funds and Financial Services</Link>

                                        </div>
                                    </div>

                                    <div className='subdropdown'>
                                        <p className='sub-dropdown-content'>
                                            <Link to="/">Pricing</Link>

                                        </p>
                                    </div>


                                </div>
                            </li>
                            <li className='dropdown'>
                                <span className='dropdown-content'>
                                    Resources
                                </span>
                                <div className='content'>
                                    <Link to="/">Blog</Link>
                                    <Link to="/">Press/News</Link>
                                    <Link to="/">AirDNA Research</Link>
                                    <Link to="/">Videos/Webinars</Link>
                                    <Link to="/">Case Studies</Link>
                                    <Link to="/">Guides</Link>
                                    <Link to="/">Podcasts</Link>

                                </div>
                            </li>
                            <li className='dropdown'>
                                <span className='dropdown-content'>
                                    Contact Us
                                </span>
                                <div className='content'>
                                    <Link to="/">Sales & Support</Link>
                                    <Link to="/">Press</Link>

                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="LgnRgrBtn">
                        <Stack direction='row' spacing={15} align='center'>
                            <Link to='/login' className='navLogin' variant='outline'>Login</Link>

                            <Link to='/signup' className='navbutton' variant='solid'>Sign up</Link>

                        </Stack>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

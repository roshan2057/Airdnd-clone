import React from 'react'
import './navbar.css'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'


const Navigation = () => {
    return (
        <div>
            <nav>
                <div className="nav-bar">
                    <i className='bx bx-menu sidebarOpen' ></i>
                    <span className="logo navLogo"><a href="#">AIRDNA</a></span>
                    <div className="menu">
                        <div className="logo-toggle">
                            <i className='bx bx-x siderbarClose'></i>
                        </div>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="LgnRgrBtn">
                        <Stack direction='row' spacing={4} align='center'>
                            <Button className='navLogin' colorScheme='teal' variant='outline'>
                                Login
                            </Button>
                            <Button className='navbutton' colorScheme='orange' variant='solid'>
                                Sign UP
                            </Button>
                        </Stack>
                    </div>
                </div>
                <hr />
            </nav>
        </div>
    )
}

export default Navigation
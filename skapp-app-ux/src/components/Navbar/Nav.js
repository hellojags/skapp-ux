import React from 'react'
import { useLocation } from 'react-router-dom'
import LandingPageNavbar from './LandingPageNavbar'
import Navbar from './Navbar'

const Nav = () => {
    let location = useLocation()
    const navbar = (location.pathname === '/' || location.pathname === '/login') ? <LandingPageNavbar /> : <Navbar />
    return (
        <div>
            {navbar}
        </div>
    )
}

export default Nav

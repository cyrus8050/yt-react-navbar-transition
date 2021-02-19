import React, { useEffect, useState } from 'react'
import './Navbar.css'
const Navbar = () => {
    const [show, setShow] = useState(true)
    const controlNavbar = () => {
        if (window.scrollY > 100) {
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
    return (
        <div className={`nav ${show && 'nav__blue'}`}>

        </div>
    )
}

export default Navbar

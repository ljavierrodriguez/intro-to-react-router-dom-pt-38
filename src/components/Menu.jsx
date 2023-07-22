import React from 'react'
import { FaHome, FaQuestion, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link" to="/"><FaHome /> Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about"><FaQuestion /> About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact"><FaEnvelope /> Contact</Link>
            </li>
            <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
                <a href="https://google.com" className="nav-link">Google</a>
            </li>
        </ul>
    )
}

export default Menu
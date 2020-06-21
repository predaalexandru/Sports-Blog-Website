import React from 'react'
import '../assets/scss/base.scss'
import {Link} from 'react-router-dom'

const navLinks =[
    {
    title: 'Home',
    path: '/'
},
{
    title: 'Blog',
    path: '/blog'
},
{
    title: 'Contact Us',
    path: '/contact'
},
{
    title: 'Login',
    path: '/login'
}
]

export default function Navigation() {
    return (
        <nav className="site-navigation">
            <span>Sports Blog</span>
            <ul>
                { navLinks.map((link, index) => (

                    <li key={index}>
                        <Link to={link.path}>
                        {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

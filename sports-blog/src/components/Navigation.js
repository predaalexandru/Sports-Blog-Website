import React, {useState} from 'react'
import '../assets/scss/base.scss'
import {Link} from 'react-router-dom'
import {Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';

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

export default function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)


    return (
        <nav className="site-navigation" role="navigation">
            <span className="menu-title">Sports Blog</span>
            <div className={`menu-content ${menuActive && 'active'}`}>
            <ul>
                { navLinks.map((link, index) => (

                    <li key={index}>
                        <Link to={link.path}>
                        {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <span className="menu-avatar-container">
            <Avatar icon={<UserOutlined />} size={38} />
                <span className="menu-avatar">{`${user.firstName} ${user.lastName}`}</span>
            </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() =>setMenuActive(!menuActive)} />
        </nav>
    )
}

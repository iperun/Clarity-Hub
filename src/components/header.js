import React from 'react'
import {Link} from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title+' '+headerStyles.test} to='/'>Clarity
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.nav_list}>
                    <li>
                        <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.nav_item} activeClassName={headerStyles.active_nav_item} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
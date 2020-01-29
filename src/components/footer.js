import React from 'react'
import {Link} from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p> <a className={footerStyles.social} href="https://www.behance.net/peruni101cbb7">Behance</a>
                <a className={footerStyles.social} href="https://dribbble.com/peruni">Dribbble</a>
                 <a className={footerStyles.social} href="https://github.com/iperun">Github</a>
                <a className={footerStyles.social} href="https://www.instagram.com/perundesign/">Instagram</a>
            </p>
            <p className={footerStyles.copyright}>Created by <a className={footerStyles.pdesign}href="htts://perundesign.com"> Ivan Perun</a>, Clarity © 2020</p>

        </footer>
    )
}

export default Footer
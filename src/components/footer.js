import React from 'react'

import footerStyles from './footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <p> <a className={footerStyles.social} href="https://www.behance.net/peruni101cbb7" target="_blank">Behance</a>
                <a className={footerStyles.social} href="https://dribbble.com/peruni" target="_blank">Dribbble</a>
                 <a className={footerStyles.social} href="https://github.com/iperun" target="_blank">Github</a>
                <a className={footerStyles.social} href="https://www.instagram.com/perundesign/" target="_blank">Instagram</a>
            </p>
            <p className={footerStyles.copyright}>Created by <a className={footerStyles.pdesign} href="https://perundesign.com" target="_blank"> Ivan Perun</a>, Clarity © 2020</p>

        </footer>
    )
}

export default Footer
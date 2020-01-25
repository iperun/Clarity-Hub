import React from "react"
import {Link} from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => {
    return (
        <div>
            <Header/>
            <h1>Clarity Hub</h1>
            <h2>A collection of online tools for creative developers.</h2>
            <h3>
                <Link to="/contact">Contact</Link>
            </h3>
            <Footer/>
        </div>
    )
}

export default IndexPage
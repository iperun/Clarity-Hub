import React from "react"
import {Link} from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Clarity Hub</h1>
            <h2>A collection of online tools for creative developers.</h2>
            <h3>
                <Link to="/contact">Contact</Link>
            </h3>
        </div>
    )
}

export default IndexPage
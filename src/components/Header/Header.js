import React from 'react'
import '../../styles/Header.css'

const Header = (props) => {
    
    this.props = {
        title: 'Hackernews Blog',
        description: 'And here is a cool description'
    }

    return( 
            <header>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
            </header>)

}

export default Header;
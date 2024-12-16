import React from 'react'
import React_Svg from '../../assets/React.svg'

const Header = () => {
    return (
        <header className='header'>
            <img className='react-logo' src={React_Svg} width="100" />
            <h1 className='react-heading'>ReactFacts</h1>
        </header>
    )
}

export default Header
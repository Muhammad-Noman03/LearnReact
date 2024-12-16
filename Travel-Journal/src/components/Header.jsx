import React from 'react'
import Global from "../Images/Global.svg"

const Header = () => {
    return (
        <header className='bg-[#F55A5A] flex items-center justify-center gap-3 h-[10vh] text-white'>
            <img src={Global} alt="" className='w-8' />
            <h1 className='font-bold text-2xl'>My Travel Journal.</h1>
        </header>
    )
}

export default Header
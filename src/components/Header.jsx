import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header className=''>
                <Link to="/">
                    <img className='max-w-[150px]' src="./image.png" alt="" />
                </Link>
            </header>
        </div>
    )
}

export default Header

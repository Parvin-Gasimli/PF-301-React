import React from 'react'
import s from "./header.module.scss"

const Header = () => {
    return (
        <div className='container'>
            <h1>Header</h1>
            <ul className={s.headerlist}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>

            </ul>
        </div>
    )
}

export default Header
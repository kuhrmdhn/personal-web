import React from 'react'
import Logo from '../../element/Logo'
import ContactList from '../Contact/ContactList'

export default function Footer() {
    return (
        <footer className='w-full h-20 flex flex-col items-center my-3'>
            <div className="flex gap-x-3 justify-center items-center">
                <h4>Created by</h4>
                <Logo/>
            </div>
            <ContactList />
        </footer>
    )
}

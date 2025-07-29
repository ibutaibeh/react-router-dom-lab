import React from 'react'
import { Link } from 'react-router'
const NavBar = () => {
  return (
    <>
    <div className='navbar'>
    <Link to={'/'}>Home</Link>
    <Link to={'/mailboxes'}>Mailboxes</Link>
    <Link to={'/new-mailbox'}>New Mailbox</Link>
    </div>
    </>
  )
}

export default NavBar
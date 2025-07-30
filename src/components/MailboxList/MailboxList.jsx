import React from 'react'
import { Link } from 'react-router'

const MailboxList = (props) => {

  return (
    <>
    <h1>Mailbox List</h1>
    <ul className='mailbox-list'>
      {props.mailboxes.map((box)=>(<Link key={box.id}  to={`/mailboxes/${box.id}`}><li className='mail-box' >Mailbox {box.id}</li></Link>))}
    </ul>
   
    </>
  )
}

export default MailboxList
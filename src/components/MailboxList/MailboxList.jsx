import React from 'react'

const MailboxList = (props) => {
  return (
    <>
    <h2>Mail list here</h2>
    <ul className='mailbox-list'>
      {props.mailboxes.map((box)=>(<li key={box.id} >BOX Owner: {box.boxOwner} | Size: {box.boxSize}</li>))}
    </ul>
    {console.log(props.mailboxes)}
    </>
  )
}

export default MailboxList
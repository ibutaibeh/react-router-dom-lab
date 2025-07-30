import React from 'react'
import { useParams } from 'react-router'

const MailboxDetails = (props) => {

  const {mailboxId}= useParams()
  const selectedBox = props.mailboxes.find((mailbox)=>mailbox.id===Number(mailboxId))
  if(!selectedBox){
    return <h2>Mailbox not found</h2>
  }

  return (
<>
<h1>Mailbox {selectedBox.id}</h1>
<h2>Details</h2>
<p>Boxholder : {selectedBox.boxOwner}</p>
<p>Box size: {selectedBox.boxSize}</p>

</>
)
}

export default MailboxDetails
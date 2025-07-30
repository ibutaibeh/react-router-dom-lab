import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router'

const MailboxForm = (props) => {

  const [formData,setFormData]= useState({
    boxOwner:'',
    boxSize:''
  })
const navigate= useNavigate();

  const handleChange=(event)=>{
    setFormData({...formData,[event.target.name]:event.target.value});
  }

const handleSubmit = (event)=>{
event.preventDefault()
props.handleMailboxes(formData)
setFormData({
    boxOwner:'',
    boxSize:''
})
navigate('/mailboxes')
  }
  return (
<>
<h2>New Mailbox</h2>
<form onSubmit={handleSubmit} >
<label htmlFor="boxOwner">Enter a Boxholder</label>
<input type="text" name='boxOwner' id='boxOwner' value={formData.boxOwner} onChange={handleChange} />

<label htmlFor="boxSize">Select a Box Size</label>
<select name="boxSize" id='boxSize' value={formData.boxSize}  onChange={handleChange}>
  <option value="">---Select one---</option>
    <option value="large">Large</option>
    <option value="medium">Meduim</option>
    <option value="small">Small</option>
</select>
<button>Add Mailbox</button>
</form>
</>
  )
}

export default MailboxForm
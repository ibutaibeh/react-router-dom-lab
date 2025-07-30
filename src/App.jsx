import { useState } from "react";
import { Route,Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import './App.css'
const App = () => {

  const [mailboxes,setMailboxes]=useState([])
const handleMailboxes =(formData)=>{

  const newMailbox = {
    id: mailboxes.length+1,
    boxOwner: formData.boxOwner,
    boxSize: formData.boxSize

  }
  setMailboxes([...mailboxes,newMailbox])
}

  return(
    <>
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<h2>Post Office</h2>}/>
      <Route path="/new-mailbox" element={<MailboxForm mailboxes={mailboxes} handleMailboxes={handleMailboxes}/>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/>  
      <Route path="*" element={<h1>Post Office</h1>}/>
    </Routes>
  
    
    
    </>

  ) 
};

export default App;

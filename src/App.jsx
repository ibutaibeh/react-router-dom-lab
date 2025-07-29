import { useState } from "react";
import { Route,Routes } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxFrom from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";
import './App.css'
const App = () => {

  const [mailboxes,setMailboxes]=useState([])

  return(
    <>
    
    <NavBar/>
    <Routes>
      <Route path="/" element={<h2>Post Office</h2>}/>
      <Route path="/new-mailbox" element={<MailboxFrom/>} />
      <Route path="/mailboxes" element={<MailboxList/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />}/>  
      <Route path="*" element={<h1>Post Office</h1>}/>
    </Routes>
  
    
    
    </>

  ) 
};

export default App;

import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import Navbar from './components/Navbar';

import ContactList from './components/ContactList';
import {Routes,Route, Navigate} from 'react-router-dom'
import ViewContact from './components/ViewContact';
import EditContact from './components/EditContact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <br />
      <Routes >
        <Route path='/' element={<Navigate to='/contact/list'/>}></Route>
        <Route path='/contact/list' element={<ContactList/>}></Route>
        <Route path='/contact/add' element=<AddContact/>></Route>
        <Route path='/contact/view/:contactId' element={<ViewContact/>}></Route>
        <Route path='/contact/edit/:contactId' element={<EditContact/>}></Route>

      </Routes> 
    </div>
  );
}

export default App;

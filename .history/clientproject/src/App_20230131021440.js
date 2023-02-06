import React, {useState, useEffect} from 'react';
import './App.css';
import CompleteProfile from './screens/CompleteProfile';
import { getMultipleFiles} from './data/api';
import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import ApproveAccommodation from './pages/ApproveAccommodation.js';
import RequestAccommodation from './pages/RequestAccommodation.js';
import ViewDocuments from './pages/ViewDocuments.js';



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Sidebar>
           <Routes>
            <Route path="/approveAccommodation"element={<ApproveAccommodation/>}/>
            <Route path="/requestAccommodation"element={<RequestAccommodation/>}/>
            <Route path="/viewDocuments"element={<ViewDocuments/>}/>
            <Route path="/completeProfile"element={<CompleteProfile/>}/>
          </Routes>
           </Sidebar>
        
           
           </BrowserRouter>
    </>
  );
}

export default App;
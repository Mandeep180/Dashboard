import React, {useState, useEffect} from 'react';
import './App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import { getMultipleFiles} from './data/api';
import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import ApproveAccommodation from './pages/ApproveAccommodation.js';
import RequestAccommodation from './pages/RequestAccommodation.js';
import ViewDocuments from './pages/ViewDocuments.js';



function App() {

  const [multipleFiles, setMultipleFiles] = useState([]);
  
  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    getMultipleFilesList();
  }, []);
  return (
    <>
    <BrowserRouter>
    <Sidebar>
           <Routes>
            <Route path="/approveAccommodation"element={<ApproveAccommodation/>}/>
            <Route path="/requestAccommodation"element={<RequestAccommodation/>}/>
            <Route path="/viewDocuments"element={<ViewDocuments/>}/>
            <Route path="/fileUploadScreen"element={<FileUploadScreen/>}/>
          </Routes>
           </Sidebar>
        
           
           </BrowserRouter>
    </>
  );
}

export default App;
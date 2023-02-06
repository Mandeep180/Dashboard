import React, {useState, useEffect} from 'react';
import './App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import { getMultipleFiles} from './data/api';
import{BrowserRouter, Route, Routes} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import ApproveAccommodation from './pages/ApproveAccommodation.js';
import RequestAccommodation from './pages/RequestAccommodation.js';
import ViewDocuments from './pages/ViewDocuments.jsx';
import CompleteProfile from './screens/CompleteProfile.js';


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
            <Route path="/completeProfile"element={<CompleteProfile/>}/>
            
           
          </Routes>
          </Sidebar>
          
          </BrowserRouter>
        <div className="container">
          <h3 className="text-danger font-weight-bolder border-bottom text-center">Complete Profile </h3>
          <FileUploadScreen getMultiple={() => getMultipleFilesList()}/>
       </div> 
       
           <div className="col-6">
             <h4 className="text-success font-weight-bold">Multiple Files List</h4>
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h6 className="text-danger font-weight-bold">{element.title}</h6>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <p src={`http://localhost:8080/${file.filePath}`} />
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
          
         
       
    </>
  );
}

export default App;

//height="200" className="card-img-top img-responsive" alt="img"
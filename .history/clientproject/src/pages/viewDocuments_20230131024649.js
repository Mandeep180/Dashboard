
import React, { useState, useEffect } from 'react';
import '../App.css';
import CompleteProfile from '../screens/CompleteProfile';
import { getMultipleFiles} from '../data/api';


function ViewDocuments() {

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
  return(
  <div>
     <h1>View The List Of all Documents you uploaded</h1><br></br>
             {multipleFiles.map((element, index) =>
                <div key={element._id}>
                    <h2>{element.title}</h2>
                    <div className="row">
                      {element.files.map((file, index) =>
                        <div className="col-6">
                            <div className="card mb-2 border-0 p-0">
                              <p src={`http://localhost:8080/${file.filePath}`}/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
       
        
        

    
            
  );


  
}

  

  


export default ViewDocuments;


  // import React from 'react';

// function ViewDocuments(){

//     <div>
//       <a href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:5c62cd02-32cf-3bf2-a10d-8b9937573c70'><button className="button">Student Accessibility service medical form</button></a>
//     </div>
// }

// // const ViewDocuments = () =>{
// //     return(
// //         <div>
// //             <h1>ViewDocuments page</h1>
// //         </div>
// //     );
// // };
// export default ViewDocuments;
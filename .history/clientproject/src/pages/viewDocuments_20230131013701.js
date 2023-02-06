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
import React, { useState } from 'react';
import '../App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import { getMultipleFiles} from './data/api';
function ViewDocuments() {
  return(

    <div>
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
                              <img src={`http://localhost:8080/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img"/>
                              </div>
                          </div>
                       )}
                      </div>
                </div>
              )}
           </div>
        <h1>Here are the Documents Available</h1><br></br>
        
        
    </div>
  );


  
}

  

  


export default ViewDocuments;

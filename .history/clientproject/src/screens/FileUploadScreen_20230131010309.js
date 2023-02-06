import React, {useState, useEffect} from 'react';
import { multipleFilesUpload} from '../data/api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const FileUploadScreen = (props) => {
    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] =  useState('');
    const [multipleProgress, setMultipleProgress] = useState(0);

    
    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        setMultipleProgress(0);
    }
    
    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }
    
    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        for (let i = 0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);                      
        }
        await multipleFilesUpload(formData, mulitpleFileOptions);
        props.getMultiple();
    }
    return (
        
            
                   
                       <div>
                         <label >Title</label>
                            <input type="text" onChange={(e) => setTitle(e.target.value) } placeholder="enter title for your gallery" className="form-control"/>
                            <label>Select Multiple Files</label>
                            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
                            <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Upload</button> <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Upload</button>
                            <div>
                            
                        
                            </div>
                       </div>
                           
                       
                            
                                    
                    
                           
                       
                        
                        
                   
        
    );
}

export default FileUploadScreen;
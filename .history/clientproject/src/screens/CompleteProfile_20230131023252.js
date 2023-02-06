import React, {useState, useEffect} from 'react';
import { multipleFilesUpload} from '../data/api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CompleteProfile = (props) => {
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
        <h1>Complete Profile</h1>
        <br></br>
        <form className="content-container">
        <label >Title</label><br></br>
        <input type="text" onChange={(e) => setTitle(e.target.value) } placeholder="enter title for your documents" className="form-control"/>
        <br /><br></br>
        <label>Select Multiple Files</label><br></br>
                            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />    
        <br /><br>
        </br>
        <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Upload</button>
      </form>
      </div>
    );
        
            
    
}

export default CompleteProfile;
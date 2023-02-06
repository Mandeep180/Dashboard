import React, {useState, useEffect} from 'react';
import { multipleFilesUpload} from '../data/api';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../App.css';


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
      <a href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:5c62cd02-32cf-3bf2-a10d-8b9937573c70'><button className="button">Student Accessibility service medical form</button></a><br></br>
        <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:3230cb4a-67eb-3f97-b6f2-10645ff7f670'><button className="button">Letter of Authorization</button></a><br></br>
        <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:6737199c-86cf-3866-99b1-b4462aa20ff0'><button className="button">Accessibility Services</button></a><br></br>
        <a href='https://forms.gle/gcpZdZnSKVDg49qk7'><button className="button">School Disability Form</button></a><br></br>
      </div>
    );
        
            
    
}

export default CompleteProfile;
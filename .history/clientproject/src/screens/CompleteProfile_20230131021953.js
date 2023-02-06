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
        
            <div className="col-6">
                   <div className="row">
                       <div className="col-6">
                            <label >Title</label>
                            <input type="text" onChange={(e) => setTitle(e.target.value) } placeholder="enter title for your gallery" className="form-control"/>
                       </div>
                       <div className="col-6">
                        <div className="form-group">
                            <label>Select Multiple Files</label>
                            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control" multiple />
                        </div>
                       </div>
                   </div>                   
                    <div className="row">
                        <div className="col-10">
                            <button type="button" onClick={() => UploadMultipleFiles()}  className="btn btn-danger">Upload</button>
                        </div>
                        <div className="col-2">
                        <CircularProgressbar
                            value={multipleProgress}
                            text={`${multipleProgress}%`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                textSize: '16px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                            })}
                        />
                        <div class="d-flex flex-row">
         
      
        <a href='https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:5c62cd02-32cf-3bf2-a10d-8b9937573c70'><button className="button">Student Accessibility service medical form</button></a><br></br>
        <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:3230cb4a-67eb-3f97-b6f2-10645ff7f670'><button className="button">Letter of Authorization</button></a><br></br>
        <a href='https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:6737199c-86cf-3866-99b1-b4462aa20ff0'><button className="button">Accessibility Services</button></a><br></br>
        <a href='https://forms.gle/gcpZdZnSKVDg49qk7'><button className="button">School Disability Form</button></a><br></br>
      
         </div>
                    </div>
                    </div>
                </div>
        
    );
}

export default CompleteProfile;
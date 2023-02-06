import React , {useState, useEffect}from 'react';
import {singleFileUpload} from '../data/api';
import { ScrollRestoration } from 'react-router-dom'

const FileUploadScreen = ()=>{
    const[singleFile, setSingleFile] = useState('');
    const[multipleFiles, setMultipleFiles] = useState('');
    const[title, setTitle] = useState('');

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
    }
    const MultipleFileChange=(e)=>{
        setMultipleFiles(e.target.files);
    }
    const uploadSingleFile = async()=>{
        const formData = new FormData();
        formData.append('file',singleFile);
        await singleFileUpload(formData);
    }
    const UploadMultipleFiles = async()=>{
        console.log(multipleFiles);

    }
    return(
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label> Select Single FIle</label>
                    <input type="file" className="form-control" onChange={(e)=> SingleFileChange(e)}/>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <button type="button" className="btn btn-danger" onClick={()=> uploadSingleFile()}>Upload</button>
                        </div>

                    </div>
                    
            </div>
            <div className="col-6">
                <div className="row">
                <div className="col-6">
                    <label>Title</label>
                    <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="Enter title for your documents"className="form-control"/>
                </div>
                <div className="col-6">
                <div className="form-group">
                    <label> Select Multiple FIles</label>
                    <input type="file" onChange={(e)=> MultipleFileChange(e)} className="form-control" multiple/>
                    </div>
                </div>
                </div>
            
                    <div className="row">
                        <div className="col-10">
                            <button type="button" onClick={()=> UploadMultipleFiles()} className="btn btn-danger">Upload</button>
                        </div>

                    </div>
                    
            </div>
            <div className="col-6">
            </div>

        </div>
        

    );
}
export default FileUploadScreen;
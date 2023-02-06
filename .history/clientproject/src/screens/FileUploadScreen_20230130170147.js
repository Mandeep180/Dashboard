import React from 'react'
import { ScrollRestoration } from 'react-router-dom'

const FileUploadScreen = ()=>{
    return(
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label> Select Single FIle</label>
                    <input type="file" className="form-control"/>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <button type="button" className="btn btn-danger">Upload</button>
                        </div>

                    </div>
                    
            </div>
            <div className="col-6">
                <div className="row">
                <div className="col-6">
                    <label>Title</label>
                    <input type="text" placeholder="Enter title for your documents"className="form-control"/>
                </div>
                <div className="col-6">
                <div className="form-group">
                    <label> Select Multiple FIles</label>
                    <input type="file" className="form-control" multiple/>
                    </div>
                </div>
                </div>
            
                    <div className="row">
                        <div className="col-10">
                            <button type="button" className="btn btn-danger">Upload</button>
                        </div>

                    </div>
                    
            </div>
            <div className="col-6">
            </div>

        </div>
        

    );
}
export default FileUploadScreen;
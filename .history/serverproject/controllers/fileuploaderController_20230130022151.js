'use strict';
const SingleFile = require('../models/singlefile');

const singleFileUpload = async (req, res, next) =>{
    try{
        const file = new singleFile( {
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) //0.00
        });
        await file.save();
        res.status(201).send('file Uploaded Successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) =>{
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index];
}

module.exports = {
    singleFileUpload
}
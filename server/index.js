/**
 * Created by akif.malhi on 3/26/2018.
 */
import express from 'express';
import path from 'path';

let app = express();

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../index.html'));
})

app.listen(3000)


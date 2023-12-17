var express = require('express');
var multer = require('multer');
var cors = require('cors');
const fs = require('fs');
const axios = require('axios');


const filesFolderPath = __dirname + "/documents/";

var app = express();

app.use(cors());
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, filesFolderPath);
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});
const upload = multer({ storage });


app.get('/', function (req, res) {
    res.send('Hello');
});


// Endpoint per obtenir una resposta a una pregunta per al chat general
// Cal afegir un query parameter al endpoint per a que funcioni: http://localhost:3001/general_chat?question=Test
app.get('/general_chat', async (req, res) => {
  let question = req.query.question;
  if(question === undefined) return res.status(400).send('The question parameter is missing. Example of the use of the endpoint: http://localhost:3001/general_chat?question=Test');
  if(question === '') return res.status(400).send('The question parameter is empty.');
  const flaskApiUrl = 'http://localhost:5000/api/ask';

  try {
    const response = await axios.post(flaskApiUrl, { question });
    
    const { source_file_path, answer } = response.data;
    console.log(source_file_path)
    console.log(answer)
    console.log(question)
    let source = [source_file_path]
    return res.status(200).json({'question': question, 'answer': answer, 'sources': source});
  } catch (error) {
    console.error('Error making POST request:', error);
    return res.status(500).send('Error making POST request to Flask API');
  }
  
});

app.listen(3001, function () {
    console.log('Listening on the port 3001!');
});
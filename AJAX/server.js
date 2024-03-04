// This is a simple server that listens on port 3000 and responds to POST requests to the /user path.

// Import the body-parser middleware and use it to parse incoming request bodies, the data is available to use in the req.body object.
const bodyParser = require('body-parser');

// Create an express for the server and initialize the express app in a variable called app
const express = require('express');
const app = express();

// Serve static files from the current directory
app.use(express.static('.'));

//read the formulaty data and transform in object
app.use(bodyParser.urlencoded({ extended: true }));

//transfor json in object
app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.send('GET request to the /user path');
});

//UPLOAD
// Import the multer middleware and use it to parse incoming requests with file data
const multer = require('multer');

// Create a storage object with a destination and filename
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`); // The file will be stored in the current directory with a unique name and date
    },
});

// Create an upload object that uses the storage object to handle file uploads
const upload = multer({ storage: storage }).single('fileName');

// Create a POST route for the /uploads path that uses the upload middleware to handle file uploads
app.post('/uploads', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Error uploading file.');
        }
        res.end('File is uploaded');
    });
});



//For recive data from formulary to backend, need build a post route configurated to interpret the data
app.post('/formulary', (req, res) => {

    //send the object data to frontend with a id
    res.send({
        ...req.body,
        id:1
    });
})


app.listen(3000, () => console.log('Server is running on port 3000'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const {PORT, mongoDBURL } = require('./config');
const booksRoute = require('./routes/booksRoute');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

//Middleware to handle CORS POLICY
//Option1: Allow all origin with default of cors(*)
app.use(cors());

//Option2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DEETE']
//     })
// )

app.get('/', (req, res)=>{
    console.log(req);
    res.status(234).send("Welcome to MERN Stack Tutorial");
})

app.use('/books', booksRoute);

// Connect to MongoDB
mongoose.connect(mongoDBURL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

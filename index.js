require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger.js');
const commentsRouter = require('./routes/comments');
const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // for form data

// logger middleware
app.use(logger);

// static middleware
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/comments', commentsRouter);

// port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

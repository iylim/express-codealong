require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('./middleware/logger.js');
const commentsRouter = require('./routes/comments');

const app = express();

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

/* Set up middleware */

// body parser middleware
app.use(express.json());
// form data
app.use(express.urlencoded({ extended: false }));

// cors
app.use(cors());

// logger middleware
// app.use(logger);

// static middleware
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.use('/api/comments', commentsRouter);

// port 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const express = require('express');
const connectDB = require('./config/db');

// initialise app varibale with express
const app = express();

// connect db
connectDB();

// init middleware for body parser; allows to get data in req.body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/favorites', require('./routes/api/favorites'));

// looks for an env variable called PORT;
const PORT = process.env.PORT || 5000;

// listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

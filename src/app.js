const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./Router/authRoutes');
const userRoutes = require('./Router/userRoutes');
Router
const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/users', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api', jokeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

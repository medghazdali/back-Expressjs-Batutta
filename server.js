// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const planRoutes = require('./routes/planRoutes');
const cityRoutes = require('./routes/cityRoutes');
const chatRoutes = require('./routes/chatRoutes');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // our swagger.js file
mongoose.set('bufferCommands', false); // optional, to fail fast if DB is not connected

const app = express();
app.use(express.json());

// Debug logs
mongoose.connection.on('connected', () => {
    console.log('Mongoose event: connected');
});
mongoose.connection.on('error', (err) => {
    console.error('Mongoose event: error ->', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose event: disconnected');
});


console.log('xxxx process.env.MONGO_URI', process.env.MONGO_URI)
// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/travel-app', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Mount routes
app.use('/api', userRoutes);
app.use('/api', planRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/cities', cityRoutes);

// Serve Swagger docs on /api-docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


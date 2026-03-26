'use strict';

const mongoose = require('mongoose');
//QVJ9ndrLRQgGZiK1
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB conectado');
        } catch (error) {
        console.error('Error en conexion a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
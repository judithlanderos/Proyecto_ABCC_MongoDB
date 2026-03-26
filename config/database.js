'use strict';

const mongoose = require('mongoose');
//QVJ9ndrLRQgGZiK1
const connectDB = async () => {
    try {
         await mongoose.connect('mongodb://judithlt_db_user:QVJ9ndrLRQgGZiK1@ac-8lm7cp5-shard-00-00.7m1ecp7.mongodb.net:27017,ac-8lm7cp5-shard-00-01.7m1ecp7.mongodb.net:27017,ac-8lm7cp5-shard-00-02.7m1ecp7.mongodb.net:27017/?ssl=true&replicaSet=atlas-as1c73-shard-0&authSource=admin&appName=Cluster0');
        console.log('Conexion EXITOSA a MongoDB');
    } catch (error) {
        console.error('Error en conexion a MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
'use strict';

const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
    numControl: String,
    nombre: String,
    primerAp: String,
    segundoAp: String,
    fechaNac: String,
    semestre: { type: Number, min: 1, max: 12 },
    carrera: String
});

const Alumno = mongoose.model('Alumno', alumnoSchema);

module.exports = Alumno;
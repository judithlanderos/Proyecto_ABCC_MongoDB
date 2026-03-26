const express = require('express');
const router = express.Router();
const {
    vistaAltas,
    vistaConsultas,
    vistaCambios,
    vistaBajas,
    crearAlumno,
    buscarEnConsultas,
    buscarParaEditar,
    mostrarFormEditar,
    actualizarAlumno,
    buscarParaBaja,
    eliminarAlumno,
    vistaDetalle
} = require('../controllers/alumno_controller');

router.get('/', vistaConsultas);

router.get('/altas', vistaAltas);
router.get('/consultas', vistaConsultas);
router.get('/cambios', vistaCambios);
router.get('/bajas', vistaBajas);

router.post('/alumnos', crearAlumno);

router.get('/alumnos/buscar', buscarEnConsultas);
router.get('/alumnos/buscar-editar', buscarParaEditar);
router.get('/alumnos/buscar-baja', buscarParaBaja);
router.get('/alumnos/detalle/:id', vistaDetalle);
router.get('/alumnos/editar/:id', mostrarFormEditar);
router.put('/alumnos/:id', actualizarAlumno);
router.delete('/alumnos/:id', eliminarAlumno);

module.exports = router;
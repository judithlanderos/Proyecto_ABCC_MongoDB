const Alumno = require('../models/alumno');

const vistaAltas = (req, res) => {
    res.render('altas');
};

const vistaConsultas = async (req, res) => {
    const alumnos = await Alumno.find();
    res.render('consultas', { alumnos });
};

const vistaCambios = (req, res) => {
    res.render('cambios', { alumnos: [], alumno: null, busqueda: null });
};

const vistaBajas = (req, res) => {
    res.render('bajas', { alumno: null, busqueda: null });
};

const crearAlumno = async (req, res) => {
    try {
        const alumno = new Alumno(req.body);
        await alumno.save();
        res.redirect('/consultas');
    } catch (error) {
        res.status(500).send('Error al crear alumno');
    }
};

const buscarEnConsultas = async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ numControl: req.query.numControl });
        const alumnos = await Alumno.find();
        res.render('consultas', { alumno, alumnos, busqueda: req.query.numControl });
    } catch (error) {
        res.status(500).send('Error al buscar alumno');
    }
};

const buscarParaEditar = async (req, res) => {
    try {
        const alumnos = await Alumno.find({ numControl: req.query.numControl });
        res.render('cambios', { alumnos, alumno: null, busqueda: req.query.numControl });
    } catch (error) {
        res.status(500).send('Error al buscar alumno');
    }
};

const mostrarFormEditar = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        res.render('cambios', { alumno, alumnos: [], busqueda: null });
    } catch (error) {
        res.status(500).send('Error al cargar alumno');
    }
};

const actualizarAlumno = async (req, res) => {
    try {
        await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/consultas');
    } catch (error) {
        res.status(500).send('Error al actualizar alumno');
    }
};

const buscarParaBaja = async (req, res) => {
    try {
        const alumno = await Alumno.findOne({ numControl: req.query.numControl });
        res.render('bajas', { alumno, busqueda: req.query.numControl });
    } catch (error) {
        res.status(500).send('Error al buscar alumno');
    }
};

const eliminarAlumno = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        await alumno.deleteOne();
        res.redirect('/consultas');
    } catch (error) {
        res.status(500).send('Error al eliminar alumno');
    }
};
const vistaDetalle = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id);
        res.render('detalle', { alumno });
    } catch (error) {
        res.status(500).send('Error al cargar detalle');
    }
};

module.exports = {
    vistaAltas,
    vistaConsultas,
    vistaCambios,
    vistaBajas,
    vistaDetalle,
    crearAlumno,
    buscarEnConsultas,
    buscarParaEditar,
    mostrarFormEditar,
    actualizarAlumno,
    buscarParaBaja,
    eliminarAlumno
};
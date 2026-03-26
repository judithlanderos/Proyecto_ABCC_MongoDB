const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const connectDB = require('./config/database');
const alumnosRoutes = require('./routes/alumnos_routes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

connectDB();

app.use('/', alumnosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el puerto: ${PORT}`);
});
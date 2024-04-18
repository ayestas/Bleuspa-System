const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");

//Import ROUTES
const clienteRoutes = require('./routes/clientes');
const citaRoutes = require('./routes/citas');
const productoRoutes = require('./routes/productos');
const ordenRoutes = require('./routes/ordenes');
const detalleOrdenRoutes = require('./routes/detallesOrden');
const formularioRoutes = require('./routes/formularios');
const tratamientoRoutes = require('./routes/tratamientos');

//Connect DB
mongoose.connect(process.env.DATABASE, {
    
})
.then(() => console.log('DB connected.'))
.catch((err) => console.log(err));

//Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use("/api", clienteRoutes);
app.use("/api", citaRoutes);
app.use("/api", productoRoutes);
app.use("/api", ordenRoutes);
app.use("/api", detalleOrdenRoutes);
app.use("/api", formularioRoutes);
app.use("/api", tratamientoRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
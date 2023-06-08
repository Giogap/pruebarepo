const { connect_db } = require('./database')

require('dotenv').config();
const express = require('express');
const morgan = require('morgan')

//iniciar
const app = express();


//configuracion
app.set('port', process.env.PORT || 3000);

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('links', require('./routes/links'));



//public


//correr servidor
app.listen(app.get('port'), async () => {
    await connect_db();
    console.log('server ok', app.get('port'));
});
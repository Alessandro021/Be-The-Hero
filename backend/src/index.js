const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333); 

/**
*rota / recurso
*/

/**
 * metodos HTTP
 * GET: buscar uma informação do back-end 
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

/**
 * tipos de parametros
 * 
 * query parms: sao parametros nomeados enviado na rota apos o "?" (filtros, paginações)
 * route parms: parametros utilizados para identificar recursos
 * request body: e o corpo da requisição. utilizado para criara ou alterar recurcos 
 */
/**
 * SQL: MySQl, SQLite, postgreSQl, Microsoft sql server
 * nisql: mongoDB, couchDB
 */
/**
 * buscar banco de dados 3 formas
 * 
 * Drive: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */ 
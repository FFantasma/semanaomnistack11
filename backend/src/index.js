/**
 * Métodos HTTP
 * 
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: deletar um informação no backend
 */

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 *  ex: const params = request.params;
 *  ex insominia: http://localhost:3333/users/1
 * 
 * Route Params: Parâmetros utilizados para identificar recursos
 *  ex: const params = request.query;
 *  ex insominia: http://localhost:3333/users?name=Gustavo&idade=45
 * 
 * Request Boady: Corpo da requisição, utilizado para criar ou alterar recursos
 *  ex:
 *  ex insominia:
 */

/**
 * SQL: MySql, SQLite, PostGgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users (Linguagem SQL tradicional)
 * Query Builder: table('users').select('*').where() (Quary usando o SQL)
 */


const express = require('express');
const cors = require('cors');
const routes = requirecors('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
const restify = require("restify");
const errors = require ("restify-errors");

const server = restify.createServer({
    name : 'loja_dsapi',
    version : '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8001, ()=>{
    console.log("Servidor executando em http://localhost:8001")
});

var knex = require("knex")({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'loja_dsapi'
    }
});

server.get('/', (req, res, next)=>{
    res.send('Bem vindo(a) á API Loja_DSAPI')
});

server.put('/cadCidade', (req,res,next)=>{

});


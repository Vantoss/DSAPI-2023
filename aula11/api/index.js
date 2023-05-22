const restify = require("restify");
const errors = require("restify-errors");

const server = restify.createServer({
    name : 'loja_dsapi',
    version : '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen(8001, ()=>{
    console.log("%Servidor executando em", server.url)
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

server.post('/cidades', (req,res,next)=>{
    knex('cidades').insert(req.body).then((dados) =>{
        res.send(dados)
    }, next);
});

server.get('/cidades', (req, res, next)=>{
    knex('cidades').then((dados)=>{
        res.send(dados)
    }, next);
});

server.post('/categorias', (req,res,next)=>{
    knex('categorias').insert(req.body).then((dados) =>{
        res.send(dados)
    }, next);
});

server.get('/categorias', (req, res, next)=>{
    knex('categorias').then((dados)=>{
        res.send(dados)
    }, next);
});

server.post('/clientes', (req, res, next)=>{
    knex('clientes').insert(req.body).then((dados) =>{
        res.send(dados)
    }, next);
})

server.get('/clientes', (req, res, next)=>{
    knex('clientes').then((dados) =>{
        res.send(dados)
    }, next);
})

server.post('/produtos', (req, res, next)=>{
    knex('produtos').insert(req.body).then((dados) =>{
        res.send(dados)
    }, next);
})

server.get('/produtos', (req, res, next)=>{
    knex('produtos').then((dados) =>{
        res.send(dados)
    }, next);
});

server.del('/produtos/:idProd', (req, res, next)=>{
    const idProduto = req.params.idProd;
    knex('produtos').where('id', idProduto).delete().then((dados) =>{
        if(!dados){
            return res.send( new errors.BadRequestError('Produto não encontrado'))
        };
        res.send('Produto Deletado')
    }, next);
});

server.put('/produtos/:idProd', (req, res, next)=>{
    const idProduto = req.params.idProd;
    knex('produtos').where('id', idProduto).update(req.body).then((dados) =>{
        if(!dados){
            return res.send( new errors.BadRequestError('Produto não encontrado'))
        };
        res.send('Produto Atualizado')
    }, next);
});

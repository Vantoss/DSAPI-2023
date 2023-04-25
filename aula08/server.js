//criando um servidor
const http = require("http");

const hostname = "127.0.0.1"; //ip
const port = 3000; //porta

const server = http.createServer((req, res) => { //() => = função anônima simplificada
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Oi Mundo!");
});

server.listen(port, hostname, ()=> {
    console.log("Servidor executando em http://" + hostname + ":" + port + "/");
});
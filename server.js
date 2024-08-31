const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;

    if( method === 'GET' && url === '/fundamentos') {
        return res.end('Hello world, fundamentos nodejs aplicado.');
    }

    return res.end('Página não encontrada!');

});

const port = 3000;
const hostname = "localhost";

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}`);
});
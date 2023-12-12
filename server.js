import http from "http";

const PORT = 3000;

const routes = {
	"/home": "Pagina inicial",
	"/clientes": "Esta e a lista de clientes",
	"/clientes/id": "Rota de clientes por ID"
};
const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	res.end(routes[req.url]);
});

server.listen(PORT, () => {
	console.log("servidor escutando na porta 3000");
});

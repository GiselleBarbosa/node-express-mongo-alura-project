import http from "http";

const PORT = 3000;

const routes = {
	"/": "Curso de Node.JS",
};
const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/plain" });
	res.end(routes[req.url]);
});

server.listen(PORT, () => {
	console.log("servidor escutando na porta 3000");
});

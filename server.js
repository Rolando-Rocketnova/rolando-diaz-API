// Servidor HTTP mínimo con el módulo nativo de Node.js (sin dependencias).
// Endpoint GET / -> devuelve un saludo del desarrollador.

const http = require("http");

// Render (y la mayoría de plataformas) inyectan el puerto en process.env.PORT.
// En local, si no existe, usamos el 3000.
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Solo respondemos al método GET en la ruta raíz "/".
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("HOLA SOY ROLANDO DIAZ");
    return;
  }

  // Cualquier otra ruta o método -> 404.
  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ error: "Ruta no encontrada" }));
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

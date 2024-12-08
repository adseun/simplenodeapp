const http = require('http');

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('<h1> Hi Fuad <h2>');
    }
});

const PORT = process.env.PORT || 5000

server.listen(PORT, ()=> console.log(`Fuad is running on port ${PORT}`));
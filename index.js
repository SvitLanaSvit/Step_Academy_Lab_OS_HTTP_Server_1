//const os = require('os');
const http = require('http');
const address = require('./app');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // const networkInterfaces = os.networkInterfaces();  ////or
    // console.log(networkInterfaces);
    // const IPv4intarfaces = networkInterfaces['WLAN'].filter((iface)=>iface.family === 'IPv4');
    // console.log(IPv4intarfaces);
    // res.end(`IPv4 adresses: \n${IPv4intarfaces.map((iface)=>iface.address).join('\n')}`);

    res.end(`IPv4 adresses:\n${address}`); //or
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
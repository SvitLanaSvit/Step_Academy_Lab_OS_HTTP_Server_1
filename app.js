const os = require('os');
const networkInterfaces = os.networkInterfaces();
const IPv4intarfaces = networkInterfaces['WLAN'].filter((iface)=>iface.family === 'IPv4');
const address = IPv4intarfaces.map(iface => iface.address).join('\n');
module.exports = address;
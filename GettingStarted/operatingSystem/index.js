const os = require('os');

console.log('arch',os.arch());
console.log("cpus", os.cpus());
console.log("freemem", os.freemem());
console.log("hostname", os.hostname());
console.log("getPriority", os.getPriority());
console.log("loadavg",os.loadavg())
console.log("networkInterfaces", os.networkInterfaces());
console.log("platform", os.platform());
console.log("release", os.release());
// console.log("setPriority", os.setPriority());
console.log("tmpdir", os.tmpdir());
console.log("totalmem", os.totalmem());
console.log("type", os.type());
console.log("userInfo", os.userInfo());
console.log("uptime", os.uptime());
console.log("version", os.version());
console.log("machine", os.machine());
const path = require("path");
console.log("filename:", path.basename(__filename))
console.log('fullPath', path.normalize(__filename))

console.log("All info:",path.parse(__dirname + "/index.js"));

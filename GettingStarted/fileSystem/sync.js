const fs = require("fs");

fs.mkdirSync("fileSystemSynchronous");
// will create a folder Synchronously

fs.writeFileSync(
	"fileSystemSynchronous/file.txt",
	"i am created through :writeFileSync ",
); // will override if present previously & create a file Synchronously

fs.appendFileSync(
	"fileSystemSynchronous/file.txt",
	"\nThis line is inserted with :appendFileSync",
); /* will append Synchronously 
//- only if folder is present previously
//- if file is not present it will works like :writeFileSync
*/

// const bufferData = fs.readFileSync("fileSystemSynchronous/file.txt");
//will return a Buffer Type data of our file
// console.log(bufferData);

/* if we don't mention the "Encode of file" it will return only Buffer Type data
	to read this BufferData there are two ways
		- simply convert in to string
		- mention the enconding of file
*/
/* 1. console.log(String(bufferData)); */
/* 2. */ const bufferData = fs.readFileSync(
	"fileSystemSynchronous/file.txt",
	"utf-8",
);
console.log(bufferData);

fs.unlinkSync("fileSystemSynchronous/file.txt"); // will delete the file synchronously
fs.rmdirSync("fileSystemSynchronous"); // will delete the folder synchronously

console.log("files & folders are created & deleted as well, -synchronosly");


/*  Since everthing is done through synchronous method everyline of code will be executed
one by one
untill the previous openration is not excuted -next line will waitFor()*/
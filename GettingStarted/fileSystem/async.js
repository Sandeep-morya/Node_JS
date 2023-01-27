const fs = require("fs");

fs.mkdir("fileSystemAsynchronous", (err) => {
	console.log(
		err ? "While folder Creation:" + err : "Folder Created Successfully",
	);
});

fs.writeFile(
	"fileSystemAsynchronous/test.txt",
	"i am created through :writeFile ",
	(err) => {
		console.log(
			err ? "while write File" + err : "File Override/Created Successfully",
		);
	},
);

fs.appendFile(
	"fileSystemAsynchronous/test.txt",
	"\nThis line is inserted with :appendFile",
	(err) => {
		console.log(err ? "while Append File" + err : "File Appended Successfully");
	},
);
/* since it is Asynchronous we May find  -write file was taking time 
  so, the append file has been called first
*/

fs.readFile("fileSystemAsynchronous/test.txt", "utf-8", (err, data) => {
	console.log(err ? "while Read File" + err : data);
});

fs.unlink("fileSystemAsynchronous/test.txt", (err) => {
	console.log(err ? "while unlink File" + err : "File Deleted Successfully");
});
/* since it is Asynchronous we may find  -file first deleted
  and because of other commands file is again created
*/

fs.rmdir("fileSystemAsynchronous", (err) => {
	console.log(err ? "while remove directory" + err : "Folder Deleted Successfully");
});
/* since it is Asynchronous we may find  -folder first deleted
  and because of other commands folder is again created
*/


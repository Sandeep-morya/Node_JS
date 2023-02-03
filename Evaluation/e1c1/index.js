const { writeToFile, readFromFile, cowSay, deleteFile } = require("./main");

const keyword = process.argv[2];
const args = process.argv[3];

switch (keyword) {
	case "write":
		writeToFile(args);
		break;
	case "read":
		readFromFile(args);
		break;
	case "delete":
		deleteFile(args);
		break;
	case "cowsay":
		cowSay(args);
		break;
	default:
		console.log("Invalid Input");
		break;
}

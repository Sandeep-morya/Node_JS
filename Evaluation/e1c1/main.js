const fs = require("fs");
const dns = require("dns");
const cow = require("cowsay");

const writeToFile = (website) => {
	if (!website) {
		console.log("You need to type url of website");
		return;
	}
	dns.lookup(website, (err, address, family) => {
		if (err) {
			console.log("Some Error Occured");
		} else {
			fs.appendFileSync(
				"data.txt",
				`URL: ${website} | Address: ${address} | IPv${family}\n`,
			);
		}
	});
};

const readFromFile = (file) => {
	fs.readFile(file, "utf-8", (err, data) => {
		console.log(err ? err : data);
	});
};

const cowSay = (file) => {
	const data = fs.readFileSync(file, "utf-8");
	console.log(
		cow.think({
			text: data.trim(),
		}),
	);
};

const deleteFile = (file) => {
	fs.unlink(file, (err) => console.log(err || "file deleted"));
};

module.exports = {
	writeToFile,
	readFromFile,
	cowSay,
	deleteFile,
};

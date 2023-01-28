import chalk from "chalk";
import path from "path";
import { fileURLToPath } from "url";

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

console.log(chalk.redBright.italic(_dirname));
console.log(chalk.bgBlue(_filename));
console.log(chalk.bgYellow(':)'));

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
 */
const list = async () => {
    const filesPath = path.join(__dirname, './files');
    const filesDirExists = fs.existsSync(filesPath);
    const errorMessage = 'FS operation failed';
    if (filesDirExists) {
        fs.readdir(filesPath, (err, files) => {
            if (err) throw new Error(err);
            const filesArr = ['Files in ./files dir: '];
            files.forEach(file => {
                filesArr.push(file);
            });
            console.table(filesArr);
        });
    } else {
        throw new Error(errorMessage);
    }
};

await list();
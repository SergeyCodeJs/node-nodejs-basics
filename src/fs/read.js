import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * function that prints content of the fileToRead.txt into console (if there's no file fileToRead.* txt Error with message FS operation failed must be thrown)
 */

const read = async () => {
    const fileName = 'fileToRead.txt';
    const filePath = path.join(__dirname, './files', fileName);
    const errorMessage = 'FS operation failed';
    const encoding = 'utf-8';
    fs.access(filePath, fs.F_OK, (err) => {
        if (err) throw new Error(errorMessage);
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) throw new Error(err);
            console.log(data.toString());
        });
    });
};

await read();
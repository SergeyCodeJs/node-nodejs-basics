import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * Function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
 */
const remove = async () => {
    const fileName = 'fileToRemove.txt';
    const filePath = path.join(__dirname, './files', fileName);
    const errorMessage = 'FS operation failed';
    fs.access(filePath, fs.F_OK, (err) => {
        if (err) throw new Error(errorMessage);
        fs.unlink(filePath, (err) => {
            if (err) throw new Error(err);
            console.log('File successfully deleted');
        })
    });
};

await remove();
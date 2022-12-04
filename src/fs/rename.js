import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
 */
const rename = async () => {
    const wrongFileName = 'wrongFilename.txt';
    const properFileName = 'properFilename.md';
    const oldPath = path.join(__dirname, './files', wrongFileName);
    const newPath = path.join(__dirname, './files', properFileName);
    const errorMessage = 'FS operation failed';
    fs.access(oldPath, fs.F_OK, (err) => {
        if (err) throw new Error(errorMessage);
        fs.access(newPath, fs.F_OK, (err) => {
            if (err) {
                fs.rename(oldPath, newPath, (err) => {
                    if (err) throw new Error(err);
                    console.log('File successfully renamed');
                });
            } else {
                throw new Error(errorMessage);
            }
        });
    })
    
};

await rename();
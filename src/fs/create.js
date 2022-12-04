import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 
 * @param {string} fileName Name of the file to create
 * @param {string} content Content of the new file
 * Implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
 */
const create = async (fileName, content) => {
    const pathToFile = path.join(__dirname, './files', `${fileName}.txt`);
    const errorMessage = 'FS operation failed';
    
    fs.open(pathToFile, undefined, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.appendFile(pathToFile, content, (err) => {
                    if (err) throw new Error(err);
                    console.log(`File with name "${fileName}" and content "${content}" has been successfully created in "${pathToFile}"`);
                });
            } else {
                throw new Error(err);
            }
        } else {
            throw new Error(errorMessage);
        }
    });
};

await create('fresh', 'I am fresh and young');
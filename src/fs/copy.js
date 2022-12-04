import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
 */
const copy = async () => {
    const filesPath = path.join(__dirname, './files');
    const filesCopyPath = path.join(__dirname, './files_copy');
    const filesDirExists = fs.existsSync(filesPath);
    const filesCopyDirExists = fs.existsSync(filesCopyPath);
    const errorMessage = 'FS operation failed';
    if (filesDirExists && !filesCopyDirExists) {
        fs.cp(filesPath, filesCopyPath, { recursive: true, errorOnExist: true }, (err) => {
            if (err) console.error(err);
            console.log('Successfully created copy of directory');
        });
    } else if ((filesDirExists && filesCopyDirExists) || !filesDirExists) {
        throw new Error(errorMessage)
    }
};

copy();
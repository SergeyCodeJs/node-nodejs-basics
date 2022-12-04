import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
 */
const compress = async () => {
    const filePath = path.join(__dirname, './files', 'fileToCompress.txt');
    const outputPath = path.join(__dirname, './files', 'archive.gz');
    const isFileToCompress = fs.existsSync(filePath);
    if (isFileToCompress) {
        const zip = zlib.createGzip();
        const read = fs.createReadStream(filePath);
        const write = fs.createWriteStream(outputPath);
        read.pipe(zip).pipe(write);
        console.log("Zipped Successfully");
    }
};

await compress();
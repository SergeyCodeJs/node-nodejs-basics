import * as zlib from 'zlib';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * function that decompresses archive.gz back to the fileToCompress.txt with same content as
 * before compression using zlib and Streams API
 */

const decompress = async () => {
    const filePath = path.join(__dirname, './files', 'archive.gz');
    const outputPath = path.join(__dirname, './files', 'fileToCompress.txt');
    const isFileToDecompress = fs.existsSync(filePath);
    if (isFileToDecompress) {
        const unzip = zlib.createGunzip();
        const read = fs.createReadStream(filePath);
        const write = fs.createWriteStream(outputPath);
        read.pipe(unzip).pipe(write);
        console.log("Unzipped Successfully");
    }
};

await decompress();
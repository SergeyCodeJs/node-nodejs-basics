import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 *  Function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
 */
const write = async () => {
    const filePath = path.join(__dirname, './files', 'fileToWrite.txt');
    const writableStream = fs.createWriteStream(filePath, 'utf-8');
    process.stdin.on('data', data => {
        writableStream.write(data, (err) => {
            if (err) throw new Error(err);
            console.log(`Data ${data} is written into file!`);
        });
    });
};

await write();
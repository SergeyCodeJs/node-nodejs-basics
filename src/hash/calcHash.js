import * as fs from 'fs';
import * as crypto from 'crypto';
import * as path from 'path';
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it
 * into console as hex
 */
const calculateHash = async () => {
    const filePath = path.join(__dirname, './files', 'fileToCalculateHashFor.txt');
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
};

await calculateHash();
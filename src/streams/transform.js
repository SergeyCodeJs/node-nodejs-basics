import { Transform } from 'stream';

/**
 * Function that reads data from process.stdin, reverses text using Transform Stream and then
 * writes it into process.stdout
 */
const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const string = chunk.toString().split('').reverse().join('');
            callback(null, string);
        }
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
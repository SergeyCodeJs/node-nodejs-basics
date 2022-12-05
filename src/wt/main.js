import { Worker } from 'worker_threads'
import * as path from 'path'
import * as fs from 'fs'
import { fileURLToPath } from 'url'
import * as os from 'os'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
/**
 * Extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
 */
export const performCalculations = async () => {
    const pathToJSFile = path.join(__dirname, './worker.js');
    const cpus = os.cpus();
    const workers = [];
    const results = [];
    let startingNumber = 10;
    cpus.forEach((cpu, idx) => {
        const worker = new Worker(pathToJSFile, {
            workerData: startingNumber
        });
        worker.on('message', (msg) => {
            results.push({
                status: 'resolved',
                data: msg
            });
            if (results.length === cpus.length) {
                console.log(results);
            }
        })
        worker.on('error', () => {
            results.push({
                status: 'error',
                data: null
            });
            if (results.length === cpus.length) {
                console.log(results);
            }
        })
        workers.push(worker);
        startingNumber++;
    });
};

await performCalculations();
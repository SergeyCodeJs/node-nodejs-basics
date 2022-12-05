import { fork } from 'child_process'
import * as path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Function that receives array of arguments args and creates child
 * process from file script.js, passing these args to it. This function should create IPC-channel
 * between stdin and stdout of master process and child process:
 * child process stdin should receive input from master process stdin
 * child process stdout should send data to master process stdout
 */
const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, './files', 'script.js');
    const forked = fork(scriptPath, args);
    forked.on('message', (msg) => {
        console.log(msg);
    });
};

spawnChildProcess(['argument1', 'argument2']);
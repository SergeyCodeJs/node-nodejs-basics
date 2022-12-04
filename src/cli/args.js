
/**
 * Function that parses command line arguments (given in format --propName value --prop2Name 
 * value2, you don't need to validate it) and prints them to the console in the format propName is
 * value, prop2Name is value2
 */
const parseArgs = () => {
    const argv = [...process.argv];
    argv.forEach((arg, idx) => {
        if (idx > 1) {
            console.log(`prop${idx - 1}Name is ${arg}`);
        }
    });
};

parseArgs();



/**
 * Function that parses environment variables with prefix RSS_ and prints them to the console in 
 * the format RSS_name1=value1; RSS_name2=value2
 */
const parseEnv = () => {
    const envs = Object.entries(process.env).map((env) => {
        return `RSS_${env[0]}=${env[1]}`;
    });
    console.log(envs);
};

parseEnv();
const fs = require('fs');
const FOLDER = './collections';
const files = fs.readdirSync(FOLDER); 
const executeAsync = require('./utils');

// call newman.run to pass `options` object and wait for callback

/**
 * Feature request pending. Allows to pass a list of files/collections 
 * https://github.com/postmanlabs/newman/issues/2117
 */

const run  = () => {
    try{
        files.forEach(async (file) => {       
            let result = await executeAsync(`${FOLDER}/${file}`); 
            console.log(`Successful executed collection ${FOLDER}/${file}`)
        });
    } catch (e) {
        console.log(`Error while executing collection ${FOLDER}/${file}`)
    }
}

run();

const fs = require('fs');
const FOLDER = './collections';
const files = fs.readdirSync(FOLDER); 
const executeAsync = require('./utils');

/**
 * Newman does not allow passing collection files Feature request pending. Allows to pass a list of files/collections 
 * https://github.com/postmanlabs/newman/issues/2117
 */

const run  = () => {
    try{
        files.forEach(async (file) => {       
            let result = await executeAsync({collection: `${FOLDER}/${file}`}); 
            console.log(`Successful executed collection ${FOLDER}/${file}`, result);
        });
    } catch (error) {
        console.log(`Error while executing collection ${FOLDER}/${file}`, error);
    }
}

run();

const fs = require('fs');
const runCollectionAsync = require('./runCollectionsAsync');

const FOLDER = process.argv[2];

console.log(FOLDER);

const collections = fs.readdirSync(FOLDER); 


/**
 * Newman does not allow passing collection files Feature request pending. Allows to pass a list of files/collections 
 * https://github.com/postmanlabs/newman/issues/2117
 */

 /**
  * Find all possible lifecylce events in README.md
  */
 const events = {
     'start': function() { console.log('start');},
     'done': function() { console.log('done');}
 }

const run  = () => {
    try{
        collections.forEach(async (cFile) => {       
            let result = await runCollectionAsync({
                collection: `${FOLDER}/${cFile}`,
                conifg: null,
                events
            }); 
            console.log(`Collection ${FOLDER}/${cFile} executed`);
        });
    } catch (error) {
        console.log(`Error while executing collection ${FOLDER}/${cFile}`, error);
    }
}

run();

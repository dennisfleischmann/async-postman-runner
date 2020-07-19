const newman = require('newman'); // require newman in your project
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
const { POINT_CONVERSION_COMPRESSED } = require('constants');

const FOLDER = './collections';
const files = fs.readdirSync(FOLDER); 

// call newman.run to pass `options` object and wait for callback

/**
 * Feature request pending. Allows to pass a list of files/collections 
 * https://github.com/postmanlabs/newman/issues/2117
 */

console.log('files',files);

// sync await
/*
const result = collections
        .setConfig({
            collection:files,
            reporters: ['cli', 'html'],
            folder: 'collections'
        })
        .setCollection(files)
        .run();
*/


const  execute = (collection)  => new Promise((resolve,reject) =>  {

    console.log('repare');
    newman.run({
        collection,
        reporters: ['cli', 'html'],
    }, function (err) {
        if (err) { reject(err) }
        resolve('collection run complete!');
    });
});


const run  = () => {

    try{
        files.forEach(async (file) => {
            
            let result = await execute(`${FOLDER}/${file}`);    
        });
    } catch (e) {

    }
}

run();

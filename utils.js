const newman = require('newman'); // require newman in your project

const  executeAsync = (collection)  => new Promise((resolve,reject) =>  {

    console.log('repare');
    newman.run({
        collection,
        reporters: ['cli', 'html'],
    }, function (err) {
        if (err) { reject(err) }
        resolve('collection run complete!');
    });
});

module.exports = executeAsync;
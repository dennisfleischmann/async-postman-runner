const newman = require('newman'); // require newman in your project

const  executeAsync = ({collection, customConfig})  => new Promise((resolve,reject) =>  {

    const defaultConfig = {
        collection,
        reporters: ['cli', 'html'],
    };

    let config = defaultConfig;

    if(customConfig) {
        config = customConfig;
    }
    console.log('repare');
    newman.run(config, function (err) {
        if (err) { reject(err) }
        resolve('collection run complete!');
    });
});

module.exports = executeAsync;
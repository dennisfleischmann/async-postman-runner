const newman = require('newman'); // require newman in your project

const  runCollectionAsync = ({
    collection,
    customConfig,
    events
})  => new Promise((resolve,reject) =>  {

    const defaultConfig = {
        collection,
        reporters: ['cli', 'html'],
    };

    let config = defaultConfig;

    if(customConfig) {
        config = customConfig;
    }
    let nm = newman.run(config, function (err) {
        if (err) { reject(err) }
        resolve('collection run complete!');
    });

    Object.keys(events).forEach( key => {
        nm.on(key, events[key]);
    });
});

module.exports = runCollectionAsync;
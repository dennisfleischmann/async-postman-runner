# Newman Async Execution Runner

This libary will run collections in the folder *Collections*.

# Usage

## Define Custom Events

```javascript
 const events = {
     'start': function() { console.log('start');},
     'done': function() { console.log('done');}
 }
```
## Add Collection in Folder

Export a Collection from Postman and add it to the folder *Collection*

## Add script 

Specify the folder in the script

```javascript
[...]
  "scripts": {
    "newman:version": "newman --version",
    "collections:sample": "node index.js  ./collections/sample-collection"
  }
[...]
```
   

## Execute the Collections

```javascript
npm run collections:sample
```


#  Newman *Collections* Lifecycle Events

Event | Description
------------ | -------------
start	| The start of a collection run
beforeIteration | Before an iteration commences
beforeItem	| Before an item execution begins (the set of prerequest->request->test)
beforePrerequest	| Before prerequest script is execution starts
prerequest	| After prerequest script execution completes
beforeRequest	| Before an HTTP request is sent
request	| After response of the request is received
beforeTest	| Before test script is execution starts
test	| After test script execution completes
beforeScript	| Before any script (of type test or prerequest) is executed
script	| After any script (of type test or prerequest) is executed
item	| When an item (the whole set of prerequest->request->test) completes
iteration	| After an iteration completes
assertion	| This event is triggered for every test assertion done within test scripts
console	| Every time a console function is called from within any script, this event is propagated
exception	| hen any asynchronous error happen in scripts this event is triggered
beforeDone	| An event that is triggered prior to the completion of the run
done	| This event is emitted when a collection run has completed, with or without errors


# Object runCollectionAsync

```javascript
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
```
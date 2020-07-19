#  Events

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
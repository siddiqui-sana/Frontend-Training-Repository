//Working with the Event API provided by NODE JS
const EventEmitter = require("node:events");
const myEmitter = new EventEmitter();
//add listeners
myEmitter.on("event", (...data)=>{  //rest parameters
    console.log("An Event Occurred",data);
});
// add lsitener and automatically remove the listener after the first emit
myEmitter.once("eventOnce",()=>{
    console.log("An event once occurred");
});
//to remove the listener: off
//Trigger Event
myEmitter.emit("event",1);
myEmitter.emit("event",1,2);
myEmitter.emit("event",1,2,3);
myEmitter.emit("eventOnce");
myEmitter.emit("eventOnce");
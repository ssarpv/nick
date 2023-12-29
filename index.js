const fs = require("fs");
const { Screenshots } = require("node-screenshots");
var robot = require("robotjs");

let capturer = Screenshots.fromPoint(0,0);

const x=380
const y=68
const w=500
const h=655
const zoom=[37,312]
const pg=[103,369]

setTimeout(() => {
 for (let i = 0; i <  10; i++) {
    
 
    robot.moveMouse(zoom[0],zoom[1])
    robot.mouseClick()
    setTimeout(() => {
        capturer.captureArea(380, 68, 500, 655).then((data) => {
            console.log(data);
            fs.writeFileSync(`${capturer.id}.png`, data);
        robot.moveMouse(pg[0],pg[1])
        robot.mouseClick()
    });
    
    },300);
 }
}, 1500)
// Asynchronous capture

// Get all screen captures
let all = Screenshots.all() ?? [];

all.forEach((capturer) => {
    console.log({
        id: capturer.id,
        x: capturer.x,
        y: capturer.y,
        width: capturer.width,
        height: capturer.height,
        rotation: capturer.rotation,
        scaleFactor: capturer.scaleFactor,
        isPrimary: capturer.isPrimary,
    });
    capturer.captureSync(true);
});
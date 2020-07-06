# p5-web-editor-dynamiclearning-connect

Class for connecting dynamic learning with p5 web editor sketch

Add [this js](https://github.com/dynamic-learning/p5-web-editor-dynamiclearning-connect/blob/master/dl.js) file for connecting a sketch to dynamic learning to save the state of a simulation.

[Example in p5 web editor](https://editor.p5js.org/jithunni.ks/sketches/ILVUh3j4p)

Example code
```
let dl
function setup() {
  dl = new DL()
  dl.load((data) => {
    // Use the data in the sketch
    circle.x = data.x,
    circle.y = data.y
  })
}

function mouseReleased() {
  dl.save({
    x: mouseX,
    y: mouseY,
  })
}

```

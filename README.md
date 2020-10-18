# p5-web-editor-dynamiclearning-connect

Class for connecting dynamic learning with p5 web editor sketch

Add [this js](https://github.com/dynamic-learning/p5-web-editor-dynamiclearning-connect/blob/master/dl.js) file for connecting a sketch to dynamic learning to save the state of a simulation.

### Code sample
```
let dl;
function setup() {
  dl = new DL();
  dl.load(initialize)
  // More code
}
const initialize = (data) => {
  if(!data) {
    // Initialize the sketch by default values
  } else {
    // Initialize the sketch by using data object
  }
}
const onSomeEvent = () => {
  dl.save(dataToSaveForTheSketch)
  // More code
}
```

[Refer the example in p5 web editor](https://editor.p5js.org/jithunni.ks/sketches/ILVUh3j4p)


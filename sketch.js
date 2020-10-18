let rndCircle, saveButton, loadButton, dl;

function setup() {
  createCanvas(640, 400);
  dl = new DL();
  
  rndCircle = new RndBox({
    x: width / 2,
    y: height / 2,
    s: 100,
    drawInside
  })
 
  dl.load((data)=>{ 
    initialize(data);
  })
}

const initialize = (data) => {
  if(!data) {
    rndCircle.setSize(100)
    rndCircle.setPos({x: width/2, y: height/2})
  } else {
    rndCircle.setSize(data.size)
    rndCircle.setPos({x: data.pos[0], y: data.pos[1]})
  }
}

function mouseReleased() {
  dl.save({
    pos: rndCircle.getPos(),
    size: rndCircle.getSize()
  })
}

function draw() {
  background(0);
  rndCircle.display()
  rndCircle.drag()
}

function drawInside({
  s
}) {
  fill(200, 10, 50)
  stroke(0)
  circle(0, 0, s)
}

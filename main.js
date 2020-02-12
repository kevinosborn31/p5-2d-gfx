let particles = [];
// let img;
// function preload() {
//   img = loadImage('/el.png');
// }
// Runs once when your sketch loads
function setup(){
  createCanvas( windowWidth, windowHeight ); // maximise canvas space!
  background( 0 );  // black background (greyscale)
  colorMode( HSB, 255 ); // Use Hue, Saturation, Brightness, range of 0..255
  // imageMode(CENTER);
  // stroke( 255, 0, 0 );  // outline colour R,G,B
  //
  // line(
  //   10, 10,  // from x,y
  //   500, 500   // to x,y
  // );
  const greenish = [0, 200, 0];
  fill( ...greenish );  // what colour to fill in solid shapes with
  // stroke( 0, 0, 255 );
  // noStroke();
  // rect(
  //   300, 100,  // top left corner x,y
  //   300, 300   // width, height
  // );
  // fill( 0, 0, 255 );
  // triangle(
  //   400, 200,  // top point
  //   100, 500,  // bottom left point
  //   700, 500   // bottom right
  // );
} // setup()
// Runs once every screen refresh, ideally 60 times per second
function draw(){
  // stroke(
  //   random(255),
  //   random(255),
  //   random(255)
  // );
  //
  // strokeWeight(8);
  // line(
  //   // random(windowWidth), random(windowHeight), // start x,y
  //   mouseX, mouseY,
  //   mouseX + 300, mouseY + 300,
  //   // random(windowWidth), random(windowHeight)  // end   x,y
  // );
//   const hue = map(
//     mouseX,          // input value
//     0, windowWidth,  // input range
//     0, 255           // output range
//   );
//   fill(
//     hue, // frameCount % 255,  // Hue, need to wrap it ourselves using modulus
//     255, // Saturation
//     255  // Brightness
//   );
  noStroke();
  // const size = random(100);

  const vx = mouseX - pwinMouseX;
  const vy = mouseY - pwinMouseY;


  const size = map( mouseY,  0, windowHeight,  50, 200 );
  if( mouseIsPressed || keyIsDown(SHIFT) ){
    // ellipse( mouseX, mouseY,  size, size );
    particles.push({
      x: mouseX,
      y: mouseY,
      vx: vx,
      vy: vy,
      size: vx + 20,
      hue: frameCount % 255
    });
    updateParticles();
} // draw()
function updateParticles() {
    for( let i = 0; i < partricles[i]; i++ ) {
        const p = particles[i];
        fill(p.hue, 255, 255, 200);
        ellipse(p.x, p.y, p.size, p.size)
    }
} // updateParticles()
}
function keyPressed(){
  e.preventDefault();
  if( keyCode === 32 ){
    particles = [];
  }
}

var Two = require('two.js')

//import './index.css';

//import * as sharkFrag from './shark.frag';
//import * as sharkVert from './shark.vert';

//
// start here
//
const main = () => {
  var elem = document.getElementById('container');
  var params = { fullscreen: true };
  var two = new Two(params).appendTo(elem);

  // two has convenience methods to create shapes.
  var circle = two.makeCircle(72, 100, 50);
  var rect = two.makeRectangle(213, 100, 100, 100);

  // The object returned has many stylable properties:
  circle.fill = '#FF8000';
  circle.stroke = 'orangered'; // Accepts all valid css color
  circle.linewidth = 5;

  rect.fill = 'rgb(0, 200, 255)';
  rect.opacity = 0.75;
  rect.noStroke();

  const group = two.makeGroup(circle, rect);

  document.onclick = () => {
    const r = two.makeRectangle(Math.random()*100, Math.random()*100, 50, 50);
    r.fill = '#FF8000';
    r.stroke = 'orangered'; // Accepts all valid css color
    r.linewidth = 5; 
  }

  // Don't forget to tell two to render everything
  // to the screen
  //
  two.bind('update', (frameCount) => {
    group.scale += 0.01;
  }).play();
}

main();

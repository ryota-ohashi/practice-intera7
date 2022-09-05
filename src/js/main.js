import '../scss/style.scss'
import p5 from "p5";

const sketch = (p5) => {

  const iterations = 60;
  const n = 100;
  let points;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);

    points = [];
    for (let i = 0; i < n; i++) {
      const x = p5.random(p5.width);
      const y = p5.random(p5.height);
      const c = p5.color(p5.random(256), p5.random(256), p5.random(256));

      points.push({ x, y, color: c });
    }
  };

  p5.draw = () => {
    for (let i = 0; i < iterations; i++) {
      for (const p of points) {
        walk(p);
      }
    }
  };

  function walk(p) {
    p.x += p5.random([-1, 1]);
    p.y += p5.random([-1, 1]);

    p5.stroke(p.color);
    p5.point(p.x, p.y);
  }
};


window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
});


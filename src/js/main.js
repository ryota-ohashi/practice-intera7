import '../scss/style.scss'
import p5 from "p5";

const sketch = (p5) => {

  let imgArray = [];


  p5.preload = async() => {
    await getImage();
  }

  p5.setup = () => {
    p5.createCanvas(p5.min(p5.windowHeight - 200, p5.windowHeight - 200), p5.min(p5.windowHeight - 100, p5.windowHeight - 100));
    console.log(imgArray);
  };

  p5.draw = () => {
    p5.background(220);
  };

  const getImage = async() => {
    await fetch('https://source.unsplash.com/random')
      .then((result) => {
        imgArray.push(result.url);
      });
    await fetch('https://source.unsplash.com/random')
      .then((result) => {
        imgArray.push(result.url);
      });
    await fetch('https://source.unsplash.com/random')
      .then((result) => {
        imgArray.push(result.url);
      });
    await fetch('https://source.unsplash.com/random')
      .then((result) => {
        imgArray.push(result.url);
      });
    await fetch('https://source.unsplash.com/random')
      .then((result) => {
        imgArray.push(result.url);
      });
  }
};


window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
});


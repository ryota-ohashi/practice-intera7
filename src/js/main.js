import '../scss/style.scss'
import p5 from "p5";

const sketch = (p5) => {


  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    let img = draw_image();

    img = draw_noise(img);
    img = draw_color_glitch(img, 5);
    img = draw_shift_glitch(img, 10);

    // p5.background(0);
    p5.image(img, 0, 0);

    // draw_scanline();
    // draw_exclusion();
  };

  function draw_image(){
    p5.background(0);

    for(let i=0;i<50;i++){
      let size = 150;
      p5.push();
      p5.strokeWeight(0);
      p5.fill(p5.random(50, 230), p5.random(128));
      p5.ellipse(p5.random(p5.width), p5.random(p5.height), p5.random(p5.size), p5.random(p5.size));
      p5.pop();
    }

    // let moji = ["画像を","壊す","壊れる","乱す","乱れる","壊されていく","コワい","コワれる",
    //             "コワレテイク","グリッチ","ミダレ","破壊","やめられない","とまらない"];
    // for(let i=0;i<100;i++){
    //   let txt = p5.random(moji);

    //   if(p5.random()<0.8){
    //     let txt0="";
    //     for(let j=0;j<txt.length;j++){
    //       txt0 += txt.slice(j,j+1) + '\n';
    //     }
    //     txt = txt0.slice(0,txt0.length-1);
    //   }

    //   p5.push();
    //   p5.strokeWeight(p5.random(p5.width/80));
    //   p5.stroke(0, p5.random(255));
    //   p5.fill(p5.random(80,230), p5.random(80,200));
    //   p5.textSize(p5.random(p5.height/16));
    //   p5.textAlign(p5.CENTER, p5.CENTER);
    //   p5.textStyle(p5.random([p5.NORMAL, p5.ITALIC, p5.BOLD, p5.BOLDITALIC]));
    //   p5.translate(p5.random(p5.width), p5.random(p5.height));
    //   p5.rotate(p5.random([0, p5.PI/2, p5.PI, p5.PI/2*3]));
    //   p5.scale(p5.random([-1, 1]), p5.random([-1, 1]));
    //   p5.text(txt, 0, 0);
    //   p5.pop();
    // }

    p5.push();
    p5.strokeWeight(0);
    p5.fill(255,100);
    p5.rectMode(p5.CENTER);
    p5.rect(p5.width*0.5, p5.height*0.5, p5.width, p5.height/7);

    p5.strokeWeight(p5.width/100);
    p5.stroke(0);
    p5.fill(255);
    p5.textSize(p5.height/8);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textStyle(p5.BOLDITALIC);
    p5.text("- INTERA -", p5.width*0.5, p5.height*0.5);
    p5.pop();

    let img = p5.get();
    p5.clear();

    return img;
  }

  function draw_noise(img){
    p5.background(0);
    p5.image(img, 0, 0);

    let noise_size = 5;

    p5.push();
    p5.strokeWeight(0);
    for(let i=0;i<img.width;i+=noise_size){
      for(let j=0;j<img.height;j+=noise_size){
        if(p5.random()<0.4){
          p5.fill(p5.random([0, 255]), 60*p5.noise(i, j));
          p5.rect(i, j, noise_size);
        }
      }
    }
    p5.pop();

    let img_noise = p5.get();
    p5.clear();

    return img_noise;
  }

  function draw_color_glitch(img, shift_size){
    p5.background(0);

    let left_color = p5.color(255, 0, 0);
    let right_color = p5.color(0, 255, 255);

    p5.push();
    p5.blendMode(p5.ADD);

    p5.tint(left_color);
    p5.image(img, -shift_size, 0);

    p5.tint(right_color);
    p5.image(img, shift_size, 0);
    p5.pop();

    let img_glitch = p5.get();
    p5.clear();

    return img_glitch;
  }

  function draw_shift_glitch(img, shift_size){
    p5.background(0);
    p5.image(img, 0, 0);

    for(let i=0;i<300;i++){
      let sx = p5.random(img.width*0.1);
      let sy = p5.random(img.height*0.1);
      let x = p5.random(img.width - sx*0.5);
      let y = p5.random(img.height - sy*0.5);
      let ix = x + p5.random(-1, 1)*shift_size;
      let iy = y + p5.random(-1, 1)*shift_size;
      p5.image(img, ix, iy, sx, sy, x, y, sx, sy);
    }

    let img_glitch = p5.get();
    p5.clear();

    return img_glitch;
  }

  function draw_scanline(){
    p5.push();
    p5.stroke(0, 50);
    p5.strokeWeight(1);
    for(let i=0;i<p5.height;i+=p5.height/200){
      p5.line(0, i, p5.width, i);
    }
    p5.pop();
  }

  function draw_exclusion(){
    let size = 50;

    p5.push();
    p5.blendMode(p5.EXCLUSION);
    p5.strokeWeight(0);
    for(let i=0;i<5;i++){
      p5.fill(255);
      p5.rect(p5.random(p5.width), 0, p5.random(p5.size), p5.height);
    }
    p5.pop();
  }
};


window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
});


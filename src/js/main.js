import '../scss/style.scss'
import p5 from "p5";

const sketch = (p5) => {

  let img;
  let time = 0;

  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    img = draw_image();
    img = draw_color_glitch(img, 5);
  };

  p5.draw = () => {
    time++;
    if(time % 4 !== 0) return;

    let effected_img = draw_shift_glitch(img, 10);
    // effected_img = draw_color_glitch(effected_img, 5);
    p5.image(effected_img, 0, 0);

  };

  function draw_image(){
    p5.background(0);
    p5.strokeWeight(p5.width/100);
    p5.stroke(0);
    p5.fill(255);
    p5.textSize(p5.height/8);
    p5.textAlign(p5.CENTER, p5.CENTER);
    p5.textStyle(p5.BOLDITALIC);
    p5.text("- INTERA -", p5.width*0.5, p5.height*0.5);

    // 画像として切り出し
    let img = p5.get();
    p5.clear();

    return img;
  }

  function draw_color_glitch(img, shift_size){
    p5.background(0);

    let left_color = p5.color(255, 0, 0);
    let right_color = p5.color(0, 255, 255);

    p5.push();
    // ---変更---

    // ブランドADDはA,Bの合計
    p5.blendMode(p5.ADD);

    // 塗りつぶし
    p5.tint(left_color);
    // 少しずらしてセット
    p5.image(img, -shift_size, 0);

    p5.tint(right_color);
    p5.image(img, shift_size, 0);
    // ---変更完了---
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

    // memo
    // image(img, dx, dy, dw, dh, sx, sy, [sw], [sh])
    // dx > Number：コピー元画像を描画するコピー先長方形のx座標
    // dy > Number：コピー元画像を描画するコピー先長方形のy座標
    // dw > Number：コピー先長方形の幅
    // dh > Number：コピー先長方形の高さ
    // sx > Number：コピー先長方形に描画するコピー先画像のサブセクションのx座標
    // sy > Number：コピー先長方形に描画するコピー先画像のサブセクションのy座標
    // sw > Number：コピー先長方形に描画するコピー先画像のサブセクションの幅(オプション)
    // sh > Number：コピー先長方形に描画するコピー先画像のサブセクションの高さ(オプション)

    let img_glitch = p5.get();
    p5.clear();

    return img_glitch;
  }

};


window.addEventListener('DOMContentLoaded', () => {
  new p5(sketch);
});


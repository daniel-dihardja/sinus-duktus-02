/**
 * Created by danieldihardja on 13.08.19.
 */

import {dot} from "./draw-utils";
import {config} from "./config";

export const colorfulCtrl = {
  fadeInterval: 100,
  colorh: 0,
  colors: 50,
  colorl: 0,
  size: 5,
  sized: 25,
  bg: 'rgba(255, 255, 255, 1.0)'
};

class Colorful {
  constructor(ctrl) {
    this.ctrl = ctrl;
    this.t = 0;
    this._x;
    this._uy = 1;
    this.s = 0;
    this._size = 0;
    this.canvas;
    this.ctx;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.canvas.width = config.artWidth;
    this.canvas.height = config.artHeight;
    this.ctx = canvas.getContext('2d');
  }

  reset() {
    this.ctx.fillStyle = this.ctrl.bg;
    this.ctx.fillRect(0,0,config.artWidth, config.artHeight);
    this.ctx.strokeStyle = '#000';
  }

  setupGUI(gui) {
    const ddFolder = gui.addFolder('colorful');
    ddFolder.add(this.ctrl, 'fadeInterval', 1, 1000, 1);
    ddFolder.add(this.ctrl, 'size', 1, 10, .1);
    ddFolder.add(this.ctrl, 'sized', 1, 50, .1);
    ddFolder.add(this.ctrl, 'colorh', 0, 255, 1);
    ddFolder.add(this.ctrl, 'colors', 0, 100, 1);
    ddFolder.add(this.ctrl, 'colorl', 0, 100, 1);
    ddFolder.addColor(this.ctrl, 'bg');
  }

  render(ctx, x, y) {
    this._x = x % 900;
    this._uy = y < 0 ? y * -1 : y;
    this.s = this._uy / 400;

    ctx.fillStyle = `hsla(${this.ctrl.colorh}, ${this.ctrl.colors}%, ${this.ctrl.colorl}%, 1)`;

    this._size = this.ctrl.size - this.s * this.ctrl.sized;
    if(this._size < 0) this._size *= -1;
    dot(ctx, this._x * 2, y * 4 + 200, this._size);

    console.log(this.ctrl.bg);


    if (this.t % this.ctrl.fadeInterval === 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, .1)';
      ctx.fillRect(0,0, config.artWidth, config.artHeight);
    }

    this.t ++;
  }
}

export const colorful = new Colorful(colorfulCtrl);
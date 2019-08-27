/**
 * Created by danieldihardja on 13.08.19.
 */

import {dot} from "./draw-utils";
import {config} from "./config";


class Colorful {
  constructor() {

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

  reset(ctrl) {
    this.ctx.fillStyle = ctrl.bg;
    this.ctx.fillRect(0,0,config.artWidth, config.artHeight);
    this.ctx.strokeStyle = '#000';
  }

  render(ctx, x, y, ctrl) {
    this._x = x % 900;
    this._uy = y < 0 ? y * -1 : y;
    this.s = this._uy / 400;

    ctx.fillStyle = `hsla(${ctrl.ch}, ${ctrl.cs}%, ${ctrl.cl}%, 1)`;

    this._size = ctrl.s - this.s * ctrl.sd;
    if(this._size < 0) this._size *= -1;
    dot(ctx, this._x * 2, y * 4 + 200, this._size);

    if (this.t % ctrl.fadeInterval === 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, .1)';
      ctx.fillRect(0,0, config.artWidth, config.artHeight);
    }

    this.t ++;
  }
}

export const colorful = new Colorful();
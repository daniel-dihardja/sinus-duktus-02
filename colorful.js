/**
 * Created by danieldihardja on 13.08.19.
 */

import {dot} from "./draw-utils";
import {config} from "./config";

export class Colorful {
  constructor() {

    this.t = 0;
    this._x;
    this._uy = 1;
    this.s = 0;
    this._size = 0;
    this.canvas = document.getElementById('artwork');
    this.canvas.width = config.artWidth;
    this.canvas.height = config.artHeight;
    this.ctx = this.canvas.getContext('2d');
  }

  reset(ctrl) {
    this.ctx.fillStyle = ctrl.bg;
    this.ctx.fillRect(0,0,config.artWidth, config.artHeight);
    this.ctx.strokeStyle = '#000';
    this.t = 0;
  }

  render(ctrl) {
    this._x = ctrl.x % config.waveWidth;
    this._uy = ctrl.y < 0 ? ctrl.y * -1 : ctrl.y;
    this.s = this._uy / config.artHeight;

    this.ctx.fillStyle = `hsla(${ctrl.ch}, ${ctrl.cs}%, ${ctrl.cl}%, 1)`;

    this._size = ctrl.s - this.s * ctrl.sd;
    if(this._size < 0) this._size *= -1;
    dot(this.ctx, this._x * 2, ctrl.y * 4 + config.artHeight / 2, this._size);

    ctrl.clx =  this._x * 2;
    ctrl.cly = ctrl.y * 4 + config.artHeight / 2;
    ctrl.cls = this._size;

    if (Math.round(ctrl.x * 2) % ctrl.fi === 0) {
      this.ctx.fillStyle = 'rgba(255, 255, 255, .1)';
      this.ctx.fillRect(0,0, config.artWidth, config.artHeight);
    }

    this.t ++;
  }
}

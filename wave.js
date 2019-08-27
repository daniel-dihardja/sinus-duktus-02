/**
 * Created by danieldihardja on 12.08.19.
 */

import {config} from "./config";

class Wave {
  constructor() {
    this.t = 0;
    this.wx = 0;
    this.wy = 0;
  }

  render(ctx, ctrl) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, -config.waveHeight / 2, config.waveWidth, config.waveHeight);
    ctx.fillStyle = '#0F0';

    let _t = 0;
    let _y = 0;

    let _s1;
    let _s2;

    _s1 = Math.sin(this.t / ctrl.d1);
    _s2 = Math.sin(this.t / ctrl.d2);

    this.wy = _s1 * _s2 * ctrl.a;
    this.wx = this.t;

    while(_t < 900) {
      _s1 = Math.sin((_t + this.t) / ctrl.d1);
      _s2 = Math.sin((_t + this.t) / ctrl.d2);
      _y = _s1 * _s2 * ctrl.a;
      ctx.fillRect(_t, _y, 2, 2);
      _t ++;
    }
    this.t += ctrl.o;
  }
}

export const wave = new Wave();

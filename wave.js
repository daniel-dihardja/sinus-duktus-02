/**
 * Created by danieldihardja on 12.08.19.
 */
export const wavep = {
  f1: 2.8,
  f2: 1,
  a: 50,
  o: 0.1
};

class Wave {
  constructor() {
    this.params = wavep;
    this.t = 0;
    this.wx = 0;
    this.wy = 0;
  }

  render(ctx) {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, -100, 900, 200);
    ctx.fillStyle = '#0F0';

    let _t = 0;
    let _y = 0;

    let _s1;
    let _s2;

    _s1 = Math.sin(this.t / this.params.f1);
    _s2 = Math.sin(this.t / this.params.f2);

    this.wy = _s1 * _s2 * this.params.a;
    this.wx = this.t;

    while(_t < 900) {
      _s1 = Math.sin((_t + this.t) / this.params.f1);
      _s2 = Math.sin((_t + this.t) / this.params.f2);
      _y = _s1 * _s2 * this.params.a;
      ctx.fillRect(_t, _y, 2, 2);
      _t ++;
    }
    this.t += this.params.o;
  }
}

export const wave = new Wave();

/**
 * Created by danieldihardja on 12.08.19.
 */

export const defaultDrawerCtrl = {
  fadeInterval: 100
};

class DefaultDrawer {
  constructor(ctrl) {
    this.ctrl = ctrl;
    this.t = 0;
  }

  render(ctx, x, y) {
    x = x % 900;
    ctx.fillRect(x,y + 200,1,1);
    if (this.t % this.ctrl.fadeInterval === 0) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1';
      ctx.fillRect(0,0,900,400);
      ctx.fillStyle = '#000';
    }
    this.t ++;
  }
}

export const drawer = new DefaultDrawer(defaultDrawerCtrl);
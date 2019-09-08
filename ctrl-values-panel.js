/**
 * Created by danieldihardja on 27.08.19.
 */
class CtrlValuesPanel {

  constructor() {
    this.con = document.getElementById('ctrlValues');
  }

  render(ctrl) {
    let r = this.renderRow('d1', ctrl.d1, 0, 1);
    r += this.renderRow('d2', ctrl.d2, 0, 100);
    r += this.renderRow('o', ctrl.o, 0, 1);
    r += this.renderRow('a', ctrl.a, 0, 50);
    r += this.renderRow('s', ctrl.s, 0, 10);
    r += this.renderRow('sd', ctrl.sd, 0, 50);
    r += this.renderRow('ch', ctrl.ch, 0, 255);
    r += this.renderRow('cl', ctrl.cl, 0, 100);

    this.con.innerHTML = r;
  }

  renderRow(name, val, min, max) {
    const p = Math.round((val/max) * 100);
    return `<div class="rowcon"><span>${name}:</span><input class="slider" disabled type="range" min="0" max="100" step="1" value="${p}"> <span>${val.toFixed(2)}</span></div>`
  }
}

export const ctrlPanel = new CtrlValuesPanel();

/**
 * Created by danieldihardja on 27.08.19.
 */
class CtrlValuesPanel {
  constructor() {
    this.con = document.getElementById('ctrlValues');
  }
  render(ctrl) {
    let r = this.renderRow('d1', ctrl.d1, 1);
    r += this.renderRow('d2', ctrl.d2, 100);
    r += this.renderRow('o', ctrl.o, 1);
    r += this.renderRow('a', ctrl.a, 50);
    r += this.renderRow('s', ctrl.s, 10);
    r += this.renderRow('sd', ctrl.sd, 50);
    r += this.renderRow('ch', ctrl.ch, 255);
    r += this.renderRow('cl', ctrl.cl, 100);

    this.con.innerHTML = r;
  }


  renderRow(name, val, max) {
    const p = Math.round((val/max) * 100);
    return `<div>${name}: <input class="slider" disabled type="range" min="0" max="100" step="1" value="${p}"> ${val.toFixed(2)}</div>`
  }

}

export const ctrlPanel = new CtrlValuesPanel();
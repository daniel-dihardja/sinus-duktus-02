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
    r += this.renderRow('fi', ctrl.fi, 1000);
    r += this.renderRow('s', ctrl.s, 10);
    r += this.renderRow('sd', ctrl.sd, 50);
    r += this.renderRow('ch', ctrl.ch, 255);
    r += this.renderRow('cs', ctrl.cs, 100);
    r += this.renderRow('cl', ctrl.cl, 100);


    this.con.innerHTML = r;
  }


  renderRow(name, val, max) {
    return `<div>${name}: <input disabled type="range" min="0" max="1" step=".1" value="${parseFloat(val/max)}"> ${Math.round((val/max) * 100)}%</div>`
  }


}

export const ctrlPanel = new CtrlValuesPanel();
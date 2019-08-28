
/**
 * Created by danieldihardja on 18.08.19.
 */

export class Controller {
  constructor() {
    this.map = {};
    this.initMIDI();
    this.onmidimessage;
  }

  initMIDI() {
    navigator.requestMIDIAccess()
    .then(e => {
      for (let i of e.inputs.values()) {
        i.onmidimessage = msg => {
          console.log(msg.data);
          switch(msg.data[0]) {
            case 184: this.handleMIDIControl(msg.data); break;
          }
          if (this.onmidimessage) this.onmidimessage(msg.data);
        }
      }
    }, err => {
      console.log(err);
    });
  }

  mapControl(ctrlNum, dict, key, min, max) {
    this.map[ctrlNum] = {dict, key, min, max}
  }

  handleMIDIControl(data) {
    const c = this.map[data[1]];
    c.dict[c.key] = (data[2] / 127) * c.max;
  }
}

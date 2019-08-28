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
          switch(msg.data[0]) {
            case 184: this.handleMIDIControl(msg.data); break;
          }
          if (this.onmidimessage) this.onmidimessage.apply(msg.data);
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

  /*
  mapControllValues(data) {
    if(data[0] !== 184) return;
    switch(data[1]) {
      case 3: this.c1 = data[2] / 127; break;
      case 65: this.c2 = data[2] / 127; break;
      case 64: this.c3 = data[2] / 127; break;
      case 76: this.c4 = data[2] / 127; break;

      case 84: this.c5 = data[2] / 127; break;
      case 85: this.c6 = data[2] / 127; break;
      case 73: this.c7 = data[2] / 127; break;
      case 75: this.c8 = data[2] / 127; break;
    }
    console.log(data);
  }
  */
}

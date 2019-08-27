/**
 * Created by danieldihardja on 18.08.19.
 */
class Controller {
  constructor() {
    this.c1 = 1;
    this.c2 = 1;
    this.c3 = 1;
    this.c4 = 1;
    this.c5 = 1;
    this.c6 = 1;
    this.c7 = 1;
    this.c8 = 1;

    this.initMIDI();
    this.available = false;
  }

  initMIDI() {
    navigator.requestMIDIAccess()
    .then(e => {
      for (let i of e.inputs.values()) {
        i.onmidimessage = (msg) => {
          this.mapControllValues(msg.data);
        }
      }
    }, err => {
      console.log(err);
      this.available = false;
    });
  }

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
}

export const controller = new Controller();
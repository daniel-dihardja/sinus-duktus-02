/**
 * Created by danieldihardja on 28.08.19.
 */
export class Recorder {

  constructor() {
    this.records = [];
  }

  record(ctrl) {
    this.records.push({... ctrl});
  }

  reset() {
    this.records = [];
  }
}
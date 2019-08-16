/**
 * Created by danieldihardja on 13.08.19.
 */

import {drawer} from "./default-drawer";
import {colorful} from "./colorful";

class Painter {
  constructor() {
    this.drawers = {
      'default': drawer,
      'colorful': colorful
    };
    this.drawer = 'colorful';

    // ref to the instance to avoid reading it out
    // from the drawers object inside a render loop
    this.drawerInstance = this.drawers[this.drawer];
  }

  setupGUI(gui) {
    Object.keys(this.drawers).forEach(name => this.drawers[name].setupGUI(gui));
  }

  render(ctx, px, py) {
    this.drawerInstance.render(ctx, px, py);
  }
}

export const painter = new Painter();
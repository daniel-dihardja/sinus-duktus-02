/**
 * Created by danieldihardja on 12.08.19.
 */

import {wavep, wave} from "./wave";
import {drawer, defaultDrawerCtrl} from "./default-drawer";
import * as dat from 'dat.gui';

const WIDTH = 900;

const cw = document.getElementById('wave');
const ca = document.getElementById('artwork');
const resetBtn = document.getElementById('reset');

const ctxw = cw.getContext('2d');
const ctxa = ca.getContext('2d');

let tick = 0;

const initCanvas = () => {
  cw.width = WIDTH;
  cw.height = 100;
  ctxw.translate(0, 50);

  ca.width = WIDTH;
  ca.height = 400;
};

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  const waveFolder = gui.addFolder('Wave');
  waveFolder.add(wavep, 'f1', .1, 10);
  waveFolder.add(wavep, 'f2', .1, 10);
  waveFolder.add(wavep, 'o', 0.1, 1);
  waveFolder.add(wavep, 'a', 1, 50);

  const ddFolder = gui.addFolder('Default drawer');
  ddFolder.add(defaultDrawerCtrl, 'fadeInterval', 1, 1000, 1);

};

const render = () => {
  window.requestAnimationFrame(render);
  wave.render(ctxw);
  drawer.render(ctxa, wave.wx, wave.wy);
  tick ++;
};

const init = () => {
  console.log('init');
  initCanvas();
  initGUI();
  render();

  resetBtn.addEventListener('click', () => {
    ctxa.clearRect(0,0,900,400);
  })
};

init();


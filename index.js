/**
 * Created by danieldihardja on 12.08.19.
 */

import {wave} from "./wave";
import {drawer} from "./default-drawer";
import * as dat from 'dat.gui';

import  {config} from "./config";

const cw = document.getElementById('wave');
const ca = document.getElementById('artwork');
const resetBtn = document.getElementById('reset');

const ctxw = cw.getContext('2d');
const ctxa = ca.getContext('2d');

let tick = 0;

const initCanvas = () => {
  cw.width = config.waveWidth;
  cw.height = config.waveHeight;
  ctxw.translate(0, config.waveHeight/2);

  ca.width = config.artWidth;
  ca.height = config.artHeight;
};

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  wave.setupGUI(gui);
  drawer.setupGUI(gui);
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
    ctxa.clearRect(0,0,config.artWidth,config.artHeight);
  })
};

init();


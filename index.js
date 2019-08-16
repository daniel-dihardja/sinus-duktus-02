/**
 * Created by danieldihardja on 12.08.19.
 */

import  {config} from "./config";
import {wave} from "./wave";
import  {colorful} from "./colorful";

import {saveImage} from "./save-image";
import * as dat from 'dat.gui';


const cw = document.getElementById('wave');
const ca = document.getElementById('artwork');
const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const startStop = document.getElementById('startStop');


const ctxw = cw.getContext('2d');
const ctxa = ca.getContext('2d');

let play = true;
let tick = 0;

const initCanvas = () => {
  cw.width = config.waveWidth;
  cw.height = config.waveHeight;
  ctxw.translate(0, config.waveHeight/2);

  colorful.setCanvas(ca);
  colorful.reset();
};

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  wave.setupGUI(gui);
  colorful.setupGUI(gui);
};

const render = () => {
  window.requestAnimationFrame(render);
  if(! play) return;
  wave.render(ctxw);
  colorful.render(ctxa, wave.wx, wave.wy);
  tick ++;
};

const init = () => {
  initCanvas();
  initGUI();
  render();

  resetBtn.addEventListener('click', () => colorful.reset());
  saveBtn.addEventListener('click', () => saveImage(ca));
  startStop.addEventListener('click', () => play = ! play);
};

init();


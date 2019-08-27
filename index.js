/**
 * Created by danieldihardja on 12.08.19.
 */

import  {config} from "./config";
import {wave, wavep} from "./wave";
import  {colorful} from "./colorful";
import {controller} from "./controller";

import {saveImage} from "./save-image";
import * as dat from 'dat.gui';

import  {ctrlValues} from "./control-values";


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
  colorful.reset(ctrlValues);
  colorful.controller = controller;
};

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  const sd = gui.addFolder('sinus duktus');
  sd.add(ctrlValues, 'd1', .1, 1, .1);
  sd.add(ctrlValues, 'd2', .1, 100, .1);
  sd.add(ctrlValues, 'o', 0.1, 1);
  sd.add(ctrlValues, 'a', 1, 50);

  sd.add(ctrlValues, 'fi', 1, 1000, 1);
  sd.add(ctrlValues, 's', 1, 10, .1);
  sd.add(ctrlValues, 'sd', 1, 50, .1);
  sd.add(ctrlValues, 'ch', 0, 255, 1);
  sd.add(ctrlValues, 'cs', 0, 100, 1);
  sd.add(ctrlValues, 'cl', 0, 100, 1);

};

const render = () => {
  window.requestAnimationFrame(render);
  if(! play) return;
  wave.render(ctxw, ctrlValues);
  colorful.render(ctxa, wave.wx, wave.wy, ctrlValues);
  tick ++;
};

const init = () => {
  initCanvas();
  initGUI();
  render();

  resetBtn.addEventListener('click', () => colorful.reset(ctrlValues));
  saveBtn.addEventListener('click', () => saveImage(ca));
  startStop.addEventListener('click', () => play = ! play);
};

init();


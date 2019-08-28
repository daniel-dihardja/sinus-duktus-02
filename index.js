/**
 * Created by danieldihardja on 12.08.19.
 */

import  {config} from "./config";
import {Wave} from "./wave";
import  {Colorful} from "./colorful";

import {controller} from "./controller";
import {ctrlPanel} from "./ctrl-values-panel";

import {saveImage} from "./save-image";
import * as dat from 'dat.gui';

import  {ctrlValues} from "./control-values";

const wave = new Wave();
const colorful = new Colorful();

const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const startStop = document.getElementById('startStop');

let play = true;
let tick = 0;

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  const sd = gui.addFolder('sinus duktus');
  sd.add(ctrlValues, 'd1', .1, 1, .1);
  sd.add(ctrlValues, 'd2', .1, 1, .1);
  sd.add(ctrlValues, 'o', 0.1, 1);
  sd.add(ctrlValues, 'a', 1, 50);

  sd.add(ctrlValues, 'fi', 1, 1800, 1);
  sd.add(ctrlValues, 's', 1, 10, .1);
  sd.add(ctrlValues, 'sd', 1, 50, .1);
  sd.add(ctrlValues, 'ch', 0, 255, 1);
  sd.add(ctrlValues, 'cl', 50, 100, 1);
};

const initMIDI = () => {
  controller.mapControl(3, ctrlValues, 'd1', .1, 1);
  controller.mapControl(65, ctrlValues, 'd2', .1, 100);
  controller.mapControl(64, ctrlValues, 'o', .1, 1);
  controller.mapControl(76, ctrlValues, 'a', 1, 50);
};

const render = () => {
  window.requestAnimationFrame(render);
  if(! play) return;

  ctrlValues.x = wave.wx;
  ctrlValues.y = wave.wy;

  wave.render(ctrlValues);
  colorful.render(ctrlValues);
  ctrlPanel.render(ctrlValues);
  tick ++;
};

const init = () => {
  colorful.reset(ctrlValues);
  initGUI();
  render();

  resetBtn.addEventListener('click', () => colorful.reset(ctrlValues));
  saveBtn.addEventListener('click', () => saveImage(colorful.canvas));
  startStop.addEventListener('click', () => play = ! play);
};

init();


/**
 * Created by danieldihardja on 12.08.19.
 */

import  {config} from "./config";
import {Wave} from "./wave";
import  {Colorful} from "./colorful";

import {Controller} from "./controller";
import {ctrlPanel} from "./ctrl-values-panel";
import {Recorder} from "./recorder";

import {saveImage} from "./save-image";
import * as dat from 'dat.gui';

import  {ctrlValues} from "./control-values";
import {preset} from "./preset";


const wave = new Wave();
const colorful = new Colorful();
const controller = new Controller();
const rec = new Recorder();

const resetBtn = document.getElementById('reset');
const saveBtn = document.getElementById('save');
const startStop = document.getElementById('startStop');
const saveParams = document.getElementById('saveParams');

let play = true;
let tick = 0;

const initGUI = () => {
  const gui = new dat.GUI({name: 'sinus duktus'});
  const sd = gui.addFolder('sinus duktus');

  sd.add(ctrlValues, 'd1', .1, 1, .1);
  sd.add(ctrlValues, 'd2', .1, 1, .1);
  sd.add(ctrlValues, 'o', 0.1, 1);
  sd.add(ctrlValues, 'a', 1, 50);

  sd.add(ctrlValues, 's', 1, 10, .1);
  sd.add(ctrlValues, 'sd', 1, 50, .1);
  sd.add(ctrlValues, 'ch', 0, 255, 1);
  sd.add(ctrlValues, 'cl', 50, 100, 1);
};

const initKeys = () => {
  window.addEventListener('keydown', e => {
    switch(e.key) {
      case '1': preset(1, ctrlValues); break;
      case '2': preset(2, ctrlValues); break;
      case '3': preset(3, ctrlValues); break;
      case '4': preset(4, ctrlValues); break;
      case '5': preset(5, ctrlValues); break;
      case '0': console.log(ctrlValues); break
    }
  });
};

const initMIDI = () => {
  controller.mapControl(3, ctrlValues, 'd1', .1, 1);
  controller.mapControl(65, ctrlValues, 'd2', .1, 100);
  controller.mapControl(64, ctrlValues, 'o', .1, 1);
  controller.mapControl(76, ctrlValues, 'a', 1, 50);

  controller.mapControl(84, ctrlValues, 's', 1, 10);
  controller.mapControl(85, ctrlValues, 'sd', 1, 50);
  controller.mapControl(75, ctrlValues, 'cl', 50, 100);
  controller.mapControl(73, ctrlValues, 'ch', 0, 255);

  controller.onmidimessage = data => {
    switch(data[0]) {
      case 176: handlePlayer(data); break;
      case 152: midiButtonHandler(data); break;
      case 184: presetButtonHandler(data); break;
    }
    ctrlPanel.render(ctrlValues);
  }
};

const handlePlayer = (data) => {
  switch(data[1]) {
    case 54: play = data[2] === 127 ? true : play; break;
    case 51: play = data[2] === 127 ? false : play; break;
  }
};

const midiButtonHandler = (data) => {
  switch(data[1]) {
    case 51: saveImage(colorful.canvas); break;
    case 43: reset(); break;
  }
};

const presetButtonHandler = (data) => {
  switch(data[1]) {
    case 20: rec.record(ctrlValues); break;
  }
  console.log(rec.records);
};

const render = () => {
  window.requestAnimationFrame(render);
  if(! play) return;

  ctrlValues.x = wave.wx;
  ctrlValues.y = wave.wy;

  wave.render(ctrlValues);
  colorful.render(ctrlValues);

  tick ++;
};

const reset = () => {
  colorful.reset(ctrlValues);
  wave.reset();
  console.log(rec.records);
  rec.reset();
};

const init = () => {
  colorful.reset(ctrlValues);
  initGUI();
  initKeys();
  initMIDI();
  render();

  resetBtn.addEventListener('click', () => reset());
  saveBtn.addEventListener('click', () => saveImage(colorful.canvas));
  startStop.addEventListener('click', () => play = ! play);
  saveParams.addEventListener('click', () => {
    localStorage.setItem('')
  })
};

init();


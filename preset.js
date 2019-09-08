/**
 * Created by danieldihardja on 05.09.19.
 */

export const preset = (index, ctrl) => {
  switch(index) {
    case 1: preset01(ctrl); break;
    case 2: preset02(ctrl); break;
    case 3: preset03(ctrl); break;
    case 4: preset04(ctrl); break;
    case 5: preset05(ctrl); break;
    case 6: preset06(ctrl); break;
    case 7: preset07(ctrl); break;
    case 8: preset08(ctrl); break;
  }
};

const preset01 = ctrl => {
  ctrl.d1 = 0.69;
  ctrl.d2 = 0.1;
  ctrl.o = 0.1;
};

const preset02 = ctrl => {
  ctrl.d1 = 0.7;
  ctrl.d2 = 0.1;
  ctrl.o = 0.27;
};

const preset03 = ctrl => {
  ctrl.d1 = 0.1;
  ctrl.d2 = 0.1;
  ctrl.o = 0.1;
};

const preset04 = ctrl => {
  ctrl.d1 = 0.1;
  ctrl.d2 = 0.6;
  ctrl.o = 0.342;
};

const preset05 = ctrl => {
  ctrl.d1 = 0.1;
  ctrl.d2 = 0.7;
  ctrl.o = 0.1;
};

const preset06 = ctrl => {
  ctrl.d1 = 0.8;
  ctrl.d2 = 0.2;
  ctrl.o = 0.5308;
};

const preset07 = ctrl => {
  ctrl.d1 = 0.1;
  ctrl.d2 = 0.4;
  ctrl.o = 0.1;
};

const preset08 = ctrl => {
  ctrl.d1 = 0.4;
  ctrl.d2 = 0.6;
  ctrl.o = 0.223;
};

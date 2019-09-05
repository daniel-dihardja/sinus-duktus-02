/**
 * Created by danieldihardja on 14.08.19.
 */

import {config} from "./config";

let lastUpload = 0;

export const saveImage = (canvas) => {
  if(Date.now() - lastUpload < 60 * 1000) {
    return;
  }
  lastUpload = Date.now();
  canvas.toBlob(blob => {
    const formData = new FormData();
    formData.append('sd-image', blob, 'sdimage.png');
    fetch(`${config.apiUrl}/images`, {
      method: 'POST',
      body: formData
    });
  });
};
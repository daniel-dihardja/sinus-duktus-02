/**
 * Created by danieldihardja on 14.08.19.
 */

import {config} from "./config";

export const saveImage = (canvas) => {
  canvas.toBlob(blob => {
    const formData = new FormData();
    formData.append('sd-image', blob, 'sdimage.png');
    fetch(`${config.apiUrl}/images`, {
      method: 'POST',
      body: formData
    });
  });
};
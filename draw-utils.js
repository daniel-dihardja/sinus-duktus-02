/**
 * Created by danieldihardja on 13.08.19.
 */
export const dot = (ctx, x, y, r, stroke = true) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();

  if (! stroke) return;

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke();

};

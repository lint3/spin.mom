let element = document.getElementById('sprite');
let sprite = new AnimateSprite(element, {
  width: 960, /* required */
  height: 540, /* required */
  frames: 35, /* required */
  cols: 1,
  fps: 60,
  loop: true,
  draggable: true
});
sprite.play();

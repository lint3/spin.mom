let element = document.getElementById('sprite');
let sprite = new AnimateSprite(element, {
  width: 480, /* required */
  height: 540, /* required */
  frames: 35, /* required */
  cols: 35,
  fps: 12,
  loop: true,
  draggable: true
});
sprite.play();

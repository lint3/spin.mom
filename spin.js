let element = document.getElementById('sprite');
let sprite = new AnimateSprite(element, {
  width: 800, /* required */
  height: 450, /* required */
  frames: 90, /* required */
  cols: 10,
  fps: 60,
  loop: true,
  draggable: true
});
sprite.play();

function drag() {
  let dragging = false;
  let mouseX;
  let mouseY;
  let posX;
  let posY;

  function mouseUp() {
    dragging = false;
  }

  function mouseMove(e) {
    if (dragging) {
      const deltaMouseX = e.pageX - mouseX;
      const deltaMouseY = e.pageY - mouseY;

      dragging.style.left = `${deltaMouseX + posX}px`;
      dragging.style.top = `${deltaMouseY + posY}px`;
    }
  }

  function mouseDown(e) {
    e.preventDefault();

    dragging = this;

    mouseX = e.pageX;
    mouseY = e.pageY;

    posX = Number.parseInt(dragging.style.left, 10);
    posY = Number.parseInt(dragging.style.top, 10);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  }

  const boxes = document.querySelectorAll('[draggable]');
  boxes.forEach((box) => {
    box.addEventListener('mousedown', mouseDown);
    box.style.top = '0px';
    box.style.left = '0px';
  });
}

drag();

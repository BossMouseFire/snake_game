document.onkeydown = function (event) {
  if (event.key === "ArrowUp") snakeUp();
  if (event.key === "ArrowDown") snakeDown();
  if (event.key === "ArrowRight") snakeRight();
  if (event.key === "ArrowLeft") snakeLeft();
};
let mov_num = 0;
let moving_turn = "ArrowRight";
snakeDown = () => {
  let snake = document.getElementsByClassName("snake");
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeMoving = parseInt(
    window.getComputedStyle(snake[snake.length - 1]).left
  );
  for (let i = snake.length - 1; i >= 0; i--) {
    let right = parseInt(window.getComputedStyle(snake[i]).left);
    let down = parseInt(window.getComputedStyle(snake[i]).top);
    if (down + 20 > 625) return true;
    else {
      if (moving_turn === "ArrowLeft" || moving_turn === "ArrowRight") {
        if (i === snake.length - 1) {
          snake[i].style.top = String(sizeTop + 30) + "px";
        } else {
          snake[i].style.left = String(sizeMoving) + "px";
          snake[i].style.top = String(sizeTop) + "px";
        }
      } else {
        if (mov_num === 2) {
          if (i === snake.length - 1) {
            snake[i].style.top = String(sizeTop + 30) + "px";
          } else {
            snake[i].style.left = String(sizeMoving) + "px";
            snake[i].style.top = String(sizeTop) + "px";
          }
        } else {
          if (i === snake.length - 1) {
            snake[i].style.left = String(sizeMoving + 30) + "px";
          } else {
            snake[i].style.left = String(sizeMoving) + "px";
            snake[i].style.top = String(sizeTop) + "px";
          }
        }
      }
    }
    sizeMoving = right;
    sizeTop = down;
  }
  mov_num = 2;
  moving_turn = "ArrowDown";
  BonusGet();
};
snakeUp = () => {
  let snake = document.getElementsByClassName("snake");
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeMoving = parseInt(
    window.getComputedStyle(snake[snake.length - 1]).left
  );
  for (let i = snake.length - 1; i >= 0; i--) {
    let mov = parseInt(window.getComputedStyle(snake[i]).left);
    let top = parseInt(window.getComputedStyle(snake[i]).top);
    if (top - 30 < 80) return true;
    else {
      if (moving_turn === "ArrowLeft" || moving_turn === "ArrowRight") {
        if (i === snake.length - 1) {
          snake[i].style.top = String(sizeTop - 30) + "px";
        } else {
          snake[i].style.left = String(sizeMoving) + "px";
          snake[i].style.top = String(sizeTop) + "px";
        }
      } else {
        if (mov_num === 1) {
          if (i === snake.length - 1) {
            snake[i].style.top = String(sizeTop - 30) + "px";
          } else {
            snake[i].style.left = String(sizeMoving) + "px";
            snake[i].style.top = String(sizeTop) + "px";
          }
        } else {
          if (i === snake.length - 1) {
            snake[i].style.left = String(sizeMoving + 30) + "px";
          } else {
            snake[i].style.left = String(sizeMoving) + "px";
            snake[i].style.top = String(sizeTop) + "px";
          }
        }
      }
    }
    sizeTop = top;
    sizeMoving = mov;
  }
  mov_num = 1;
  moving_turn = "ArrowUp";
  BonusGet();
};
snakeRight = () => {
  let snake = document.getElementsByClassName("snake");
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeRight =
    parseInt(window.getComputedStyle(snake[snake.length - 1]).left) + 30;
  for (let i = snake.length - 1; i >= 0; i--) {
    let right = parseInt(window.getComputedStyle(snake[i]).left);
    let top = parseInt(window.getComputedStyle(snake[i]).top);
    if (right + 90 > 950) {
      return true;
    } else {
      if (i === snake.length - 1)
        snake[i].style.left = String(sizeRight) + "px";
      else {
        snake[i].style.left = String(sizeRight) + "px";
        snake[i].style.top = String(sizeTop) + "px";
      }
    }
    sizeTop = top;
    sizeRight = right;
  }
  moving_turn = "ArrowRight";
  BonusGet();
};
snakeLeft = () => {
  let snake = document.getElementsByClassName("snake");
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeLeft =
    parseInt(window.getComputedStyle(snake[snake.length - 1]).left) - 30;
  for (let i = snake.length - 1; i >= 0; i--) {
    let top = parseInt(window.getComputedStyle(snake[i]).top);
    let left = parseInt(window.getComputedStyle(snake[i]).left);
    if (left - 30 < 360) {
      return true;
    } else {
      if (i === length - 1) snake[i].style.left = String(sizeLeft) + "px";
      else {
        snake[i].style.left = String(sizeLeft) + "px";
        snake[i].style.top = String(sizeTop) + "px";
      }
    }
    sizeTop = top;
    sizeLeft = left;
  }
  moving_turn = "ArrowLeft";
  BonusGet();
};
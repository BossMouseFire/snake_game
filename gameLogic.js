document.onkeydown = function (event) {
  if(event.key === 'ArrowUp') snakeUp();
  if(event.key === 'ArrowDown') snakeDown();
  if(event.key === 'ArrowRight') snakeRight();
  if(event.key === 'ArrowLeft') snakeLeft();
};

snakeDown = () =>  {
  let snake = document.getElementsByClassName('snake');
  let sizeTop = parseInt(window.getComputedStyle(snake[3]).top) + 50;
  let sizeRight = parseInt(window.getComputedStyle(snake[3]).left);
  for(let i = snake.length - 1; i >= 0; i--){
    let right = parseInt(window.getComputedStyle(snake[i]).left);
    let down = parseInt(window.getComputedStyle(snake[i]).top);
    if(down + 20 > 625) return true;
    else
      {
      snake[i].style.top = String(sizeTop) + 'px';
      snake[i].style.left = String(sizeRight) + 'px';
    }
    sizeRight = right;
    sizeTop = down;
  }
};
snakeUp = () => {
  let snake = document.getElementsByClassName('snake');
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeLeft = parseInt(window.getComputedStyle(snake[snake.length - 1]).left) - 50;

};
snakeRight = () => {
  let snake = document.getElementsByClassName('snake');
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeRight = parseInt(window.getComputedStyle(snake[snake.length - 1]).left) + 50;
  for(let i = snake.length - 1; i >= 0; i--){
    let right = parseInt(window.getComputedStyle(snake[i]).left);
    let top = parseInt(window.getComputedStyle(snake[i]).top);
    if(right + 90 > 950) {
      return true;
    }
    else {
      if(i === length - 1) snake[i].style.left = String(sizeRight) + 'px';
      else{
        snake[i].style.left = String(sizeRight) + 'px';
        snake[i].style.top = String(sizeTop) + 'px';
      }
    }
    sizeTop = top;
    sizeRight = right;
  }
};
snakeLeft = () => {
  let snake = document.getElementsByClassName('snake');
  let sizeTop = parseInt(window.getComputedStyle(snake[snake.length - 1]).top);
  let sizeLeft = parseInt(window.getComputedStyle(snake[snake.length - 1]).left) - 50;
  for(let i = snake.length - 1; i >= 0; i--){
    let top = parseInt(window.getComputedStyle(snake[i]).top);
    let left = parseInt(window.getComputedStyle(snake[i]).left);
    if(left - 50 < 360){
      return true;
    }
    else{
      if(i === length - 1) snake[i].style.left = String(sizeLeft) + 'px';
      else{
        snake[i].style.left = String(sizeLeft) + 'px';
        snake[i].style.top = String(sizeTop) + 'px';
      }
    }
    sizeTop = top;
    sizeLeft = left;
  }
};
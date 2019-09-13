$(document).ready(function () {
  // define necessary variables
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // creating the paddle
  var Paddle = function () {
    this.x = 125;
    this.y = 300;
    
    this.draw = function(x, y) {
      ctx.strokeRect(x, y, 200, 20);
    }
  }
  
  // creating the ball
  var Ball = function () {
    this.x = 280;
    this.y = 100;
    
    this.draw = function (x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI, false);
      ctx.stroke();
    }
  }
  
  const PlayerPaddle = new Paddle();
  const TheBall = new Ball();
  
  PlayerPaddle.draw(150, 300);
  TheBall.draw(200, 100);
});

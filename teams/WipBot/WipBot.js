var five = require("johnny-five"),
  board = new five.Board();
var leftMotor;
var rightMotor;
var keypress = require("keypress");

board.on("ready", function() {


  leftMotor = new five.Motor({
    pins: {
      pwm: 5,
      dir: 12
    }
    
  });

  rightMotor = new five.Motor({
    pins: {
      pwm: 3,
      dir: 13
    }
    
  });

  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  process.stdin.on("keypress", function(ch, key) {

    if (!key) {
      return;
    }

    if (key.name === "q") {

      console.log("Quitting");
      process.exit();

    } else if (key.name === "up") {

      console.log("Up");
      leftMotor.forward(30);
      rightMotor.forward(30);

    } else if (key.name === "down") {

      console.log("Down");

      leftMotor.reverse(255);
      rightMotor.reverse(255);

    } else if (key.name === "left") {

      console.log("Left");
      leftMotor.stop();
      rightMotor.forward(30);

    } else if (key.name === "right") {

      console.log("Right");
      leftMotor.forward(30);
     rightMotor.stop();

    } else if (key.name === "space") {
      console.log("Stopping");
      leftMotor.stop();
     rightMotor.stop();
leftMotor.stop();
     rightMotor.stop();
   
    }
  });  
});


var five = require("johnny-five"), 
    board = new five.Board();

var keypress = require("keypress");
//var esc = new five.ESC(12);

board.on("ready", function() {

//  var motorL = new five.Motor(5);
//  var motorR = new five.Motor(6);

  var motorL = new five.Motor({
	pins: {
		pwm:10,
		dir:11
}
});

  var motorR = new five.Motor({
	pins: {
		pwm:5,
		dir:6
}
});

board.repl.inject({
	motorR: motorR
});

board.repl.inject({
	motorL: motorL
});

  // Start the motor at maximum speed, wait 2 seconds and stop.
  motorL.start(0);
  motorR.start(0);

var speed = 0;
var increment = 5;

function controller(ch, key) {
    var isThrottle = false;
    var isTurnLeft=false;
    var isTurnRight=false;	

     //speed = esc.last ? esc.speed : 50;
    console.log(key);
 	
    if (key) {
      if (key.name === "up") {
        speed += increment;
        isThrottle = true;
      }

      if (key.name === "down") {
        speed -= increment;
        isThrottle = true;
      }
 	
      if (key.name === "left") {
        speed =250;
        isTurnLeft = true;
      }

     if (key.name === "right") {
        speed =250;
        isTurnRight = true;
      }


      if (isThrottle) {
	console.log("Speed change, speed=" + speed);
         motorR.forward(speed);
        motorL.forward(speed);
      }

   if (isTurnLeft) {
	console.log("Turning R =" + speed);
         //motorR.forward(speed);
        motorL.forward(speed);
      }

   if (isTurnRight) {
	console.log("Turning L=" + speed);
        motorR.forward(speed);
       // motorL.forward(0);
      }

    }
  }

  keypress(process.stdin);
  process.stdin.on("keypress", controller);
  process.stdin.setRawMode(true);
  process.stdin.resume();

});

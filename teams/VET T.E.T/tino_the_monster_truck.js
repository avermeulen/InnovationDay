var five = require("johnny-five"), 
board = new five.Board();

board.on("ready", function() {  

  	// Start the motor at maximum speed, wait 2 seconds and stop.

	//var myMotor = new five.Motor([12, 12]);

	var myRightMotor = new five.Motor([5,6]);
	var myLeftMotor = new five.Motor([10,11]);

  	var smyRightMotor = new five.Motor({
    		pins: {
      		pwm: 5,
      		dir: 6
		}
  	});

  	var smyLeftMotor = new five.Motor({
    		pins: {
      		pwm: 10,
      		dir: 11
    		}
  	});
	
	board.repl.inject({
	    rMotor: myRightMotor,
	    lMotor: myLeftMotor
	});

	myRightMotor.forward(255);
	myLeftMotor.forward(255);

});

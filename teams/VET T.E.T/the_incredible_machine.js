var five = require("johnny-five"),
    board, myMotor, led;

var keypress = require('keypress');

var Wheel = function(pinForward, pinBack) {

	var forwardMotor = new five.Motor(pinForward);
	var backMotor = new five.Motor(pinBack);

	this.revrse = function() {
		forwardMotor.stop();
		backMotor.start(255);
	}

	this.forwrd = function() {
		backMotor.stop();
		forwardMotor.start(255);
	}

	this.stop = function() {
		backMotor.stop();
		forwardMotor.stop();
	}
}

var AwesomeBot = function() {
	var RightWheel = new Wheel(6, 5);
	var LeftWheel = new Wheel(10, 11);
	
	this.forwrd = function() {
		LeftWheel.forwrd();
		RightWheel.forwrd();
	}

	this.revrse = function() {
		LeftWheel.revrse();
		RightWheel.revrse();
	}

	this.stop = function() {
		LeftWheel.stop();
		RightWheel.stop();
	}

	this.turnRight = function() {
		LeftWheel.forwrd();
		RightWheel.stop();
	}

	this.turnLeft = function() {
		RightWheel.forwrd();
		LeftWheel.stop();
	}
}

keypress(process.stdin);

board = new five.Board();

board.on("ready", function() {
	var bot = new AwesomeBot();


	// listen for the "keypress" event
	process.stdin.on('keypress', function (ch, key) {
	console.log('got "keypress"', key);
	if (key && key.ctrl && key.name == 'c') {
	    process.stdin.stop();
  	}

  	//up
  	if (key && key.code == '[A') {	
    		bot.forwrd();
  	}

  	//down
	if (key && key.code == '[B') {	
    		bot.revrse();
  	}

  	//left
  	if (key && key.code == '[D') {
		bot.turnLeft();
  	}

  	//right
  	if (key && key.code == '[C') {
		bot.turnRight();
  	}

  	//stop
  	if (key && key.name == 'space') {
		bot.stop();
  	}
});

process.stdin.setRawMode(true);
process.stdin.resume();

});


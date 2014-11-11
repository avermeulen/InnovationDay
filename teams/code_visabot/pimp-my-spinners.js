var Wheel = function(pinNr1, pinNr2){
    var pin1 =  new five.Pin(pinNr1),
        pin2 = new five.Pin(pinNr2);

    this.stop = function(){
	pin1.low();
	pin2.low();
    }

    this.forward = function(){
	pin1.high();
	pin2.low();
    }

    this.reverse = function(){
	pin1.low();
	pin2.high();
    }
};


var Visabot = function(rightWheel, leftWheel){

  this.turnLeft = function(){
    rightWheel.forward();
    leftWheel.reverse();
  }

  this.turnRight = function(){
    rightWheel.reverse();
    leftWheel.forward();
  }

  this.reverse = function(){
    rightWheel.forward();
    leftWheel.forward();
  }

  this.forward = function(){
    rightWheel.reverse();
    leftWheel.reverse();
  }

  this.stop = function(){
    rightWheel.stop();
    leftWheel.stop();
  }

}



var five = require("johnny-five"),
    board, myMotor, led;
var keypress = require('keypress');

board = new five.Board({port : '/dev/rfcomm0'}); //

board.on("ready", function() {
 var visaBot = new Visabot(new Wheel(5,9), new Wheel(4, 10));

var minDistance = 30;
var currentDistance = -1;
var previousDistance = -1;
var adjuster = false;

var theServo = new five.Servo(11);

  board.repl.inject({
    servo: theServo
  });

theServo.center();
//theServo.stop();

//theServo.sweep();


 var ping = new five.Ping(7);

  ping.on("change", function() {
    console.log("Object is " + this.cm + " cm away");
    if (this.cm <= previousDistance || this.cm <= minDistance){
	previousDistance =  this.cm;

    	board.wait(500, function() {
		console.log("Looking for space");
		visaBot.turnLeft();
	    	board.wait(20, function() {
			console.log("stopping");
			visaBot.stop();
		});

	});
    }
    else {
    	board.wait(1000, function() {
		console.log("moving forward");
		visaBot.forward();
	    	board.wait(20, function() {
			console.log("stopping");
			visaBot.stop();
		});
	});
    }
  });
});






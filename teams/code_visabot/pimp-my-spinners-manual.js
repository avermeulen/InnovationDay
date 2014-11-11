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

  this.forward = function(){
    rightWheel.forward();
    leftWheel.forward();
  }

  this.reverse = function(){
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

board = new five.Board({port : '/dev/rfcomm0'});

board.on("ready", function() {
 var visaBot = new Visabot(new Wheel(5,9), new Wheel(4, 10));

    console.log("-- auto-pilot --");
    console.log("start forward");
    visaBot.forward();

    // stop after 2 seconds
    board.wait(3000, function() {
	console.log("start reverse");
	visaBot.reverse();

	    board.wait(3000, function() {
		console.log("turn left");
		visaBot.turnLeft();

		    board.wait(3000, function() {
			console.log("turn right");
			visaBot.turnRight();

			    board.wait(3000, function() {
				console.log("turn stop");
				visaBot.stop();

					console.log("waiting for keypress");

					// make `process.stdin` begin emitting "keypress" events
					keypress(process.stdin);

					// listen for the "keypress" event
					process.stdin.on('keypress', function (ch, key) {
					  console.log('got "keypress"', key);
					  if (key && key.ctrl && key.name == 'f') {
					    console.log("forward");
					    visaBot.forward();	
					  }
					  else if (key && key.ctrl && key.name == 'b') {
					    console.log("backward");
					    visaBot.reverse();	
					  }
					  else if (key && key.ctrl && key.name == 'l') {
					    console.log("turn left");
					    visaBot.turnLeft();	
					  }
					  else if (key && key.ctrl && key.name == 'r') {
					    console.log("turn right");
					    visaBot.turnRight();	
					  }
					  else if (key && key.ctrl && key.name == 's') {
					    console.log("stop");
					    visaBot.stop();	
					  }

					});

					process.stdin.setRawMode(true);
					process.stdin.resume();

			    });

		    });
	    });
    });


});






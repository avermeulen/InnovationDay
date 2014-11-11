var Wheel = function(pinNr1, pinNr2){
    var pin1 =  new five.Pin(pinNr1),
        pin2 = new five.Pin(pinNr2);

    this.stop = function(){
      pin1.low();
      pin2.low();
    }

    this.forward = function(){
      pin1.high();
      pin2.high();
    }

    this.reverse = function(){
      // pin logic here
    }

  };

var rightWheel = new Wheel(1,2);
var leftWheel = new Wheel(3,4);

var Visabot = function(rightWheel, leftWheel){

  this.turnLeft = function(){
    	rightWheel.forward();
	leftWheel.stop();
  }

  this.turnLeftQuick = function(){
        rightWheel.forward();
	leftWheel.reverse();
  }

  this.turnRight = function(){
        rightWheel.stop();
	leftWheel.forward();
  }

  this.turnRightQuick = function(){
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

var motor = new five.Motor({
  pins: {
    pwm: 3,
    dir: 12,
    brake: 11
  }, 
  current: {
    pin: "A0",
    freq: 250,
    range: [0, 2000]
  }
});

var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

  var motor = new five.Motor([3, 12]);

  // Reverse the motor at maximum speed
  motor.reverse(255);

})

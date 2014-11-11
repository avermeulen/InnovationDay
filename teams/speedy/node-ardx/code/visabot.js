/*
  IMPORTANT!!! This example is not intended for off the shelf
  H-Bridge based motor controllers. It is for home made H-Bridge
  controllers. Off the shelf controllers abstract away the need
  to invert the PWM (AKA Speed) value when the direction pin is set 
  to high. This is for controllers that do not have that feature.
*/

var five = require("johnny-five"),rightWheel, leftWheel,
  board = new five.Board();

board.on("ready", function() {
  var motor;
  var motor2;
  
  motor = new five.Motor({
    pins: {
      pwm: 9,
      dir: 8
    },
    invertPWM: true
  });
  motor2 = new five.Motor({
    pins: {
      pwm: 10,
      dir: 7
    },
    invertPWM: true
  });

  board.repl.inject({
    motor: motor,
    motor2:motor2,
    visabot:Visabot
  });

  motor.on("start", function(err, timestamp) {
    console.log("*** LEFT START", timestamp);
  });
  motor2.on("start", function(err, timestamp) {
    console.log("*** RIGHT START", timestamp);
  });

  motor.on("stop", function(err, timestamp) {
    console.log("*** LEFT automated stop", timestamp);
  });
  motor2.on("stop", function(err, timestamp) {
    console.log("*** RIGHT automated stop", timestamp);
  });

  motor.on("forward", function(err, timestamp) {
    console.log("*** LEFT forward", timestamp);

    // demonstrate switching to reverse after 5 seconds
//    board.wait(5000, function() {
//      motor.reverse(150);
//    });
  });
  motor2.on("forward", function(err, timestamp) {
    console.log("*** RIGHT forward", timestamp);
//
    // demonstrate switching to reverse after 5 seconds
//    board.wait(5000, function() {
//      motor2.reverse(150);
//    });
  });

  motor.on("reverse", function(err, timestamp) {
    console.log("*** LEFT reverse", timestamp);

    // demonstrate stopping after 5 seconds
//    board.wait(5000, function() {
//      motor.stop();
//    });
  });
  motor2.on("reverse", function(err, timestamp) {
    console.log("*** RIGHT reverse", timestamp);

    // demonstrate stopping after 5 seconds
//    board.wait(5000, function() {
//      motor2.stop();
//    });
  });

  // set the motor going forward full speed
 // motor.forward(255);
 // motor2.forward(255);




var Visabot = function(rightWheel, leftWheel){
  this.turnLeft = function(){
      motor.reverse(150);
	motor2.stop();
  }

  this.turnRight = function(){
      motor2.reverse(150);
	motor.stop();
 }

  this.forward = function(){
        motor.reverse(255);
  	motor2.reverse(255);   
//setTimeout(this.stop, 5000);
  }

  this.reverse = function(){
	motor.forward(255);
	motor2.forward(255);
//setTimeout(this.stop, 5000);
  }

  this.stop = function(){
        motor.stop();
	motor2.stop();
  }
}

//Visabot.forward();

var visabot = new Visabot();
setTimeout(visabot.forward, 100);
setTimeout(visabot.stop, 2000);
setTimeout(visabot.reverse, 2200);
setTimeout(visabot.stop, 4200);
setTimeout(visabot.turnLeft, 4300);
setTimeout(visabot.stop, 6300);
setTimeout(visabot.turnRight, 6400);
setTimeout(visabot.stop, 8400);
});






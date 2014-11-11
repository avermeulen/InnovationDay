/*
  IMPORTANT!!! This example is not intended for off the shelf
  H-Bridge based motor controllers. It is for home made H-Bridge
  controllers. Off the shelf controllers abstract away the need
  to invert the PWM (AKA Speed) value when the direction pin is set 
  to high. This is for controllers that do not have that feature.
*/
var five = require("johnny-five"),
  board = new five.Board();
  

board.on("ready", function() {



var keypress = require('keypress');
  var motor;
  
  process.stdin.setRawMode(true);
  process.stdin.resume();
  
  board.repl.inject({
    motorL: motor,
    motorR: motor
  });
  /*
      Motor A
        pwm: 3
        dir: 12
   */

 keypress(process.stdin);



// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  
if(key.name == 'up'){
  motorL.forward(255);
  motorR.forward(255);
 }


if(key.name == 'down'){
  motorL.reverse(100);
  motorR.reverse(100);
 }  


if(key.name == 'right'){
  motorL.forward(100);
  motorR.reverse(150);
 }

if(key.name == 'left'){
  motorL.reverse(150);
  motorR.forward(100);
 }
  if (key.name == 'space') {
      motorL.stop();
      motorR.stop(); 
  }
});


  motorL = new five.Motor({
    pins: {
      pwm: 9,
      dir: 12
    },
    invertPWM: true
  });



 motorR = new five.Motor({
    pins: {
      pwm: 10,
      dir: 13
    },
    invertPWM: true
  });





  motorL.on("start", function(err, timestamp) {
    console.log("start left", timestamp);
  });


 motorR.on("start", function(err, timestamp) {
    console.log("start right", timestamp);
  });

  motorL.on("stop", function(err, timestamp) {
    console.log("stop left", timestamp);
  });


 motorR.on("stop", function(err, timestamp) {
    console.log("stop right", timestamp);
  });

  motorL.on("forward", function(err, timestamp) {
    console.log("left forward", timestamp);

    
  });

 motorR.on("forward", function(err, timestamp) {
    console.log("right forward", timestamp);

   
  });

  motorL.on("reverse", function(err, timestamp) {
    console.log("reverse left", timestamp);

   
  });



 // set the motor going forward full speed

});

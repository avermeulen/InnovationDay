var five = require("johnny-five"),
  board = new five.Board();

var keypress = require('keypress');
keypress(process.stdin);

board.on("ready", function() {
  var leftmotor, rightmotor, servo;
  /*
      Motor A
        pwm: 3
        dir: 12
   */


  leftmotor = new five.Motor({
    pins: {
      pwm: 9,
      dir: 2
    },
    invertPWM: true
  });

  rightmotor = new five.Motor({
    pins: {
      pwm: 10,
      dir: 4
    },
    invertPWM: true
  });

  servo = new five.Servo({
      pin: 12,
      type: "continuous"
  } );

 //var ping = new five.Ping(7);
  
 // board.repl.inject({
 //   ping: ping
 // });

  board.repl.inject({
    servo: servo
  });

  board.repl.inject({
    motor: leftmotor
  });

board.repl.inject({
    motor: rightmotor
  });

  leftmotor.on("start", function(err, timestamp) {
    //leftmotor.stop();
    //rightmotor.stop();
  });

  //leftmotor.on("stop", function(err, timestamp) {
  //  console.log("automated stop on timer", timestamp);
  //});

  //leftmotor.on("forward", function(err, timestamp) {
  //  console.log("forward", timestamp);

    // demonstrate switching to reverse after 5 seconds
    //board.wait(10000, function() {
    //  leftmotor.reverse(250);
    //  rightmotor.forward(250);
    //});
  //});

  //leftmotor.on("reverse", function(err, timestamp) {
  //  console.log("reverse", timestamp);

    
  //});


	process.stdin.on('keypress', function (ch, key) {
	  console.log('got "keypress"', key);
	  if (key.name == 'up') {
	    leftmotor.forward(255);
	    rightmotor.forward(255);
	  }
	  if (key.name == 'down') {
	    leftmotor.reverse(255);
	    rightmotor.reverse(255);
	  }
	  if (key.name == 'right') {
	    leftmotor.forward(255);
	    rightmotor.reverse(255);
	  }
          if (key.name == 'left') {
	    leftmotor.reverse(255);
	    rightmotor.forward(255);
	  }
          if (key.name == 'q') {
	    servo.sweep();
	  }
          if (key.name == 'w') {
	    servo.stop();
	  }
     
	  if (key.name == 's') {
	    leftmotor.stop();
	    rightmotor.stop();
       //     servo.stop();
       //     servo.center();
	  }
	  
	});

  // set the motor going forward full speed
  //leftmotor.forward(200);
  // rightmotor.reverse(200);
});

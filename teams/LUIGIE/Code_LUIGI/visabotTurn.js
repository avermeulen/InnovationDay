var five = require("johnny-five"),
    board, board1, myMotor, led;
board = new five.Board();

board.on("ready", function() {

  var pin4 = new five.Pin(4);
  var pin5 = new five.Pin(5);
  var pin6 = new five.Pin(6);
  var pin7 = new five.Pin(7);

  pin4.high();
  pin5.low();
  pin6.high();
  pin7.low();

  board.wait(2000, function() {
      pin4.low();
      pin5.low();
      pin6.low();
      pin7.low();

  });
 });


  // event handlers on start and stop
	/*
  myMotor.on("start", function( err, timestamp ) {
    console.log( "started", timestamp );

    // stop after 2 seconds
    board.wait(2000, function() {
      myMotor.stop();
    });
  }); 
  */
  /*
  myMotor.on("stop", function( err, timestamp ) {
    console.log( "stopped", timestamp );
  });
  myMotor.start();

});*/

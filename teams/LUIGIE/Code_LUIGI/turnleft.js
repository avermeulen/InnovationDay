var five = require("johnny-five"),
    board, myMotor, led;
board = new five.Board();
board.on("ready", function() {

  var pin4 = new five.Pin(4);
  var pin5 = new five.Pin(5);
  

  pin4.high();
  pin5.low();
  

  board.wait(2000, function() {
      pin4.low();
      pin5.low();
      

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
*/
});

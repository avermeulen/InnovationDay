var five = require("johnny-five"),
    board, myMotor, led;
board = new five.Board();
board.on("ready", function() {

  
  var pin6 = new five.Pin(6);
  var pin7 = new five.Pin(7);

 
  pin6.high();
  pin7.low();

  board.wait(2000, function() {
     
      pin6.low();
      pin7.low();

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

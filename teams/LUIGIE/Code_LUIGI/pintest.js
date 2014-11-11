var five = require("johnny-five"),
  temporal = require("temporal"),
  board = new five.Board();

board.on("ready", function() {
  var events, strobe, analog;

  events = [];
  strobe = new five.Pin({
    addr: 5
  });

  temporal.loop(5000, function(loop) {
    strobe[loop.called % 2 === 0 ? "high" : "low"]();
  });


  // Event tests
  ["high", "low"].forEach(function(state) {
    strobe.on(state, function() {
      if (events.indexOf(state) === -1) {
        console.log("Event emitted for:", state, "on", this.addr);
        events.push(state);
      }
    });
  });

  analog = new five.Pin(5);

  analog.query(function(state) {
    console.log(state);
  });
});



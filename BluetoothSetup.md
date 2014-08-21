# Bluetooth Setup

The main challange when using Johnny-Five with bluetoot is setting up the Bluetooth Serial port model BAUD rate correctly. Firmata is requiring a BAUD rate of 57600 and the HC-06 bluetooth module we are using by default use 9600/37600.

See the details of what to do here : https://github.com/rwaldron/johnny-five/wiki/JY-MCU-Bluetooth-Serial-Port-Module-Notes.

Find the sketch to run here: 

## Things to remember

Once you ran the Arduino sketch to configure the buad rate, remember to load the Firmata sketch on your Arduino. 

Remember that this Tx/Rx pins on the Bluetooth module needs to be in a cross-over configuration.

Bluetooth Tx -> Arduino Rx
Bluetooth Rx -> Ardiuno Tx

## Linux bluetooth config

Albert's stuff goes here...

## Battery power

Use 9V battery.
Build the battery clip.

## Changing your code

To make your Visabot wireless you need to make a small code change.

```
board = new five.Board({
		port : "/com9"
});
```

When you run the code you will see that the little light on the Bluetooth module will stop blinking. And your Visabot will now be wireless. Sometimes when you run the code it might crash, just try again. If it persitently crash something is wrong.
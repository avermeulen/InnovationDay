# Bluetooth Setup

The main challenge when using Johnny-Five with bluetooth is setting up the Bluetooth Serial port model BAUD rate correctly. Firmata is requiring a BAUD rate of 57600 and the HC-06 bluetooth module we are using by default use 9600/37600.

See the details of what to do here : https://github.com/rwaldron/johnny-five/wiki/JY-MCU-Bluetooth-Serial-Port-Module-Notes.

Find the sketch to run here: 

## Things to remember

Once you ran the Arduino sketch to configure the baud rate, remember to load the Firmata sketch on your Arduino. 

Remember that this Tx/Rx pins on the Bluetooth module needs to be in a cross-over configuration.

Bluetooth Tx (transmit) -> Arduino Rx (receive)
Bluetooth Rx -> Ardiuno Tx

## Linux bluetooth config

Navigate to the bluetooth settings panel by hitting the "windows" key, and then typing "bluetooth" in the search box.  Click the "+" button, and select the correct device.  The pin option must be set to "0000".  Pair the device.

We want to connect to the bluetooth device via a serial interface - for this we have to first find the device address, and then bind to it with an utility from the command-line.

The following commands have to be executed as the root user, or by using "sudo".

Run "hcitool scan", and make a note of the address of the correct bluetooth device.
Run "rfcomm 0 bind xxxxx", replacing the xxxxx with the address of the bluetooth device.

Check that the "/dev/rfcomm0" file has been created.

The "fundamo" user have been created with the correct groups to access this device, but if for some reason you have a permission problem you can run (as root) "chmod 666 /dev/rfcomm0".


## Battery power

Use 9V battery.
Build the battery clip.

## Changing your code

To make your Visabot wireless you need to make a small code change.

```
board = new five.Board({
		port : "/dev/rfcomm0"
});
```

When you run the code you will see that the little light on the Bluetooth module will stop blinking.  Your Visabot will now be wireless. Sometimes when you run the code it might crash, just try again. If it persistently crashes something is wrong.
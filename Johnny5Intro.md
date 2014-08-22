#Johnny-five intro

##Background

Johnny-five is a Node module that allows one to program Arduino micro-controllers using Javascript. It need the Firmata sketch to be installed on the Arduino, so be sure before you try to use johnny-five that you have Firmata installed.

One of the first things you need to do is to ensure that your Arduino have Firmata installed on it.

## Setup

Be sure that your Arduino have firmata installed on it.

Connect your Arduino to the USB table.

In the Arduino IDE click,

	* File, the Open... 
	* Navigate to sketches, 
	* Then select StandardFirmata_ping.ino. 
	* Click open.
	* Click on Verify
	* Click upload

If there are no errots your Arduino is now infected with Firmata.

##Tutorials

We will use these tutorials:

	* http://node-ardx.org
	* and the node-workshop npm module.

### Lessons to complete

http://node-ardx.org/exercises/1

http://node-ardx.org/exercises/4

http://node-ardx.org/exercises/7

Use the nodebot-workshop utility (https://www.npmjs.org/package/nodebot-workshop) to run your code without having the Arduino connected to your PC. 

Once you are happy with your code run it on the Arduino with the correct Breadboard setup.

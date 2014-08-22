#Visa Innovation Day - 22 August 2014

##Welcome

Welcome to the Visa Innovation day.

##Outcomes

By the end of this day you and your team would have built a Wireless Bluetooth enabled Nodebot. Along the way you might learn to solder, getting to know Javascript better, meet Git and learn how to pull and push code to github. Not to mention brushing of your electronic skills, using a breadboard again and even configure a Ultrasonic module. 

You will use:

	* Node JS
	* npm - the Node Package Manager
	* git
	* github.com
	* An Arduino micro-controller
	* Breadboard, Jumper Cables and various electronic components
	* Fritzing	

##Backgound

We will be building a Nodebot that is a robot powered by Javascript, we will be using Node JS to program an Arduino micro-controller. The Node module we will be using is called johnny-five, this needs the Firmata sketch to be installed on the Arduino

##Setup
 
Each team will be supplied with a bluetooth enabled laptop that needs to be configured.

You need to install Node JS, NPM and GIT, using this command:

	yum install git nodejs npm

Download the Arduino IDE from here: http://arduino.cc/en/main/software and unzip it into a folder of your choice.

Create a nodebotsday folder, in this folder

Now you need to install johnny-five and keypress

	npm install keypress
	npm install johnny-five

Install nodebot-workshop:
	
	sudo npm install -g nodebot-workshop

###Install Firmata

You will need to install firmata on your Arduino using the Arduino IDE, see the [instructions](./Johnny5Intro.md)


### Git setup

Clone the git project, and create a folder for your team under the teams folder.

##Getting to know Johnny

The first step in building a Nodebot is to get to know Johnny-Five for that we will use the node-workshop node module and the http://www.node-ardx.org website.

To install the node-workshop utility run:
	
	npm install nodebot-workshop 


##VisaBot build

[See the build steps](./VisaBotBuild.md)

##Motor Driver

Build the Motor Driver by following these [instructions](./MotorDriver.md)

##Visabot software

Create a Basic wheel class that can make a wheel go forward, reverse and stop.

Tip: 
	Use the Pin class to set the pins of the Driver Motor high and low to move the wheels in the appropriate directions.

https://github.com/rwaldron/johnny-five/wiki/Pin


Create a VisaBot class - that has 2 wheel class instances. Your visa bot should be able to go forward, to reverse and to turn left and right.

##Challenge 1

Control your Visabot from the keyboard. Using the up, down, left and right keys. Feel free to innovate and add more moves for your bot.

Tip: the keypress node library.
	
	npm install keypress

##Bluetooth support

Make your Visabot wireless by following these [instructions](./BluetoothSetup.md)

## Challenge 2

Now that your Visabot has no wires to get tangled in lets get it to navigate its way around some cones 1 meter x 1 meter apart. First in a clockwise direction. If you are brave let it automatically turn around and come back again in a clockwise direction around the cones.

Tip: use the temporal module to control your bots movements

##A seeing bot

Add eyes to you robot by using these [instructions](./UltraSonicSupport.md)

## Challange 3

We will put your bot in a tight spot and it needs to navigate its way out of an corner.

##Challenge 4
	
Navigate out of a maze. You bot should be able to find the exit.

##Challenge 5

Find all the cones on a court with 5 cones.








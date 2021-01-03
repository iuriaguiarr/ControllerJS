const ViGEmClient = require("vigemclient");

let client = new ViGEmClient();

client.connect(); // establish connection to the ViGEmBus driver

let controller = client.createX360Controller();
let controller2 = client.createX360Controller();

controller.connect(); // plug in the virtual controller
controller2.connect();
// change some axes and buttons
controller.axis.leftX.setValue(0.5); // move left stick 50% to the left
controller.axis.leftY.setValue(-0.5); // move left stick 50% down
controller.axis.leftTrigger.setValue(1); // press in left trigger all the way

controller.button.Y.setValue(true); // press Y button

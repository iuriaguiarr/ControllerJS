yarn add ffi vgen-xbox

const VGen = require("vgen-xbox")
const vgen = new VGen();

var controllerId = vgen.pluginNext() // Plugs in next available controller
vgen.setDpad(controllerId, vgen.Dpad.UP); // Set dpad to point up
vgen.setButton(controllerId, vgen.Buttons.B, true); // Press B button
vgen.setButton(controllerId, vgen.Buttons.B, false); // Release B button

vgen.unplug(controllerId); // Unplug controller

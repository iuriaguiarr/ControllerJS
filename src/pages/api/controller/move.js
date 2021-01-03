import { controllers } from "../../../components";

export default function movimento(req, res) {
  try {
    const { userId, username } = req.body;
    const ViGEmClient = require("vigemclient");
    const client = new ViGEmClient();
    client.connect();
    controllers.forEach((controller, index) => {
      if (
        controller.username == username &&
        controller.userId == parseInt(userId)
      ) {
        const control = controller.controller;

        control.button.Y.setValue(true); // press Y button

        // Desconectar controle
        // control.disconnect();
        // controllers.splice(index, 1);
      }
    });

    res.status(200).json("foi");
  } catch (error) {
    console.log(error);
    res.status(400).json("foi");
  }
}

// START
// BACK
// LEFT_THUMB
// RIGHT_THUMB
// LEFT_SHOULDER
// RIGHT_SHOULDER
// GUIDE
// A
// B
// X
// Y

// leftX
// leftY
// rightX
// rightY
// leftTrigger
// rightTrigger
// dpadHorz
// dpadVert

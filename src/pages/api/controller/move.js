import { controllers } from "../../../components";

export default function movimento(req, res) {
  try {
    const { userId, username, axis } = req.body;
    const ViGEmClient = require("vigemclient");
    const client = new ViGEmClient();
    client.connect();
    controllers.forEach((controller, index) => {
      if (
        controller.username == username &&
        controller.userId == parseInt(userId)
      ) {
        const control = controller.controller;
        var x = 0;
        var y = 0;

        if (!axis.x) {
          x = 0;
        } else {
          x = axis.x / 70;
        }
        if (!axis.y) {
          y = 0;
        } else {
          y = axis.y / 70;
        }

        control.axis.leftX.setValue(x);
        control.axis.leftY.setValue(y);

        // control.button.Y.setValue(true); // press Y button

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

// leftTrigger
// rightTrigger
// dpadHorz
// dpadVert

import { controllers } from "../../components";

export default function movimento(req, res) {
  try {
    const { userId, username, keyPressed, action, axis } = req.body;
    const ViGEmClient = require("vigemclient");
    const client = new ViGEmClient();
    client.connect();
    controllers.forEach((controller, index) => {
      console.log(keyPressed);
      if (
        controller.username == username &&
        controller.userId == parseInt(userId)
      ) {
        const control = controller.controller;
        switch (keyPressed) {
          case ` `:
            if (action === `down`) {
              control.button.A.setValue(true);
            } else {
              control.button.A.setValue(false);
            }
            break;
          case `j`:
            if (action === `down`) {
              control.button.X.setValue(true);
            } else {
              control.button.X.setValue(false);
            }
            break;
          case `k`:
            if (action === `down`) {
              control.button.B.setValue(true);
            } else {
              control.button.B.setValue(false);
            }
            break;
          case `l`:
            if (action === `down`) {
              control.button.Y.setValue(true);
            } else {
              control.button.Y.setValue(false);
            }
            break;

          default:
            break;
        }
        setTimeout(() => {
          control.disconnect();
          controllers.splice(index, 1);
        }, 30000);
      }
    });

    res.status(200).json({ success: `moved` });
  } catch (error) {
    res.status(400).json({ error: `not moved` });
  }
}

// START        enter
// BACK         Backspace
// LEFT_THUMB    U
// RIGHT_THUMB    P
// LEFT_SHOULDER  I
// RIGHT_SHOULDER   O
// GUIDE          Escape
// A              espaco
// B              K
// X              J
// Y              L

// leftTrigger    H
// rightTrigger     Ç
// dpadHorz
// dpadVert
//
//
//
//
// var x = 0;
// var y = 0;

// if (!axis.x) {
//   x = 0;
// } else {
//   x = axis.x / 70;
// }
// if (!axis.y) {
//   y = 0;
// } else {
//   y = axis.y / 70;
// }

// control.axis.leftX.setValue(x);
// control.axis.leftY.setValue(y);

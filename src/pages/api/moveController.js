import { controllers } from "../../components";

export default function movimento(req, res) {
  try {
    const { userId, username, keyPressed, action, axis } = req.body;
    const ViGEmClient = require("vigemclient");
    const client = new ViGEmClient();
    client.connect();

    controllers.forEach((controller, index) => {
      if (
        controller.username == username &&
        controller.userId == parseInt(userId)
      ) {
        const control = controller.controller;

        if (axis) {
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
        } else {
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
            case `J`:
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
            case `K`:
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
            case `L`:
              if (action === `down`) {
                control.button.Y.setValue(true);
              } else {
                control.button.Y.setValue(false);
              }
              break;
            case `Enter`:
              if (action === `down`) {
                control.button.START.setValue(true);
              } else {
                control.button.START.setValue(false);
              }
              break;
            case `Backspace`:
              if (action === `down`) {
                control.button.BACK.setValue(true);
              } else {
                control.button.BACK.setValue(false);
              }
              break;
            case `u`:
              if (action === `down`) {
                control.button.LEFT_THUMB.setValue(true);
              } else {
                control.button.LEFT_THUMB.setValue(false);
              }
              break;
            case `U`:
              if (action === `down`) {
                control.button.LEFT_THUMB.setValue(true);
              } else {
                control.button.LEFT_THUMB.setValue(false);
              }
              break;
            case `p`:
              if (action === `down`) {
                control.button.RIGHT_THUMB.setValue(true);
              } else {
                control.button.RIGHT_THUMB.setValue(false);
              }
              break;
            case `P`:
              if (action === `down`) {
                control.button.RIGHT_THUMB.setValue(true);
              } else {
                control.button.RIGHT_THUMB.setValue(false);
              }
              break;

            case `i`:
              if (action === `down`) {
                control.button.LEFT_SHOULDER.setValue(true);
              } else {
                control.button.LEFT_SHOULDER.setValue(false);
              }
              break;
            case `I`:
              if (action === `down`) {
                control.button.LEFT_SHOULDER.setValue(true);
              } else {
                control.button.LEFT_SHOULDER.setValue(false);
              }
              break;
            case `o`:
              if (action === `down`) {
                control.button.RIGHT_SHOULDER.setValue(true);
              } else {
                control.button.RIGHT_SHOULDER.setValue(false);
              }
              break;
            case `O`:
              if (action === `down`) {
                control.button.RIGHT_SHOULDER.setValue(true);
              } else {
                control.button.RIGHT_SHOULDER.setValue(false);
              }
              break;
            case `Escape`:
              if (action === `down`) {
                control.button.GUIDE.setValue(true);
              } else {
                control.button.GUIDE.setValue(false);
              }
              break;
            case `w`:
              if (action === `down`) {
                control.axis.leftY.setValue(1);
              } else {
                control.axis.leftY.setValue(0);
              }
              break;
            case `a`:
              if (action === `down`) {
                control.axis.leftX.setValue(-1);
              } else {
                control.axis.leftX.setValue(0);
              }
              break;
            case `s`:
              if (action === `down`) {
                control.axis.leftY.setValue(-1);
              } else {
                control.axis.leftY.setValue(0);
              }
              break;
            case `d`:
              if (action === `down`) {
                control.axis.leftX.setValue(1);
              } else {
                control.axis.leftX.setValue(0);
              }
              break;
            case `ArrowUp`:
              if (action === `down`) {
                control.axis.leftY.setValue(1);
              } else {
                control.axis.leftY.setValue(0);
              }
              break;
            case `ArrowLeft`:
              if (action === `down`) {
                control.axis.leftX.setValue(-1);
              } else {
                control.axis.leftX.setValue(0);
              }
              break;
            case `ArrowDown`:
              if (action === `down`) {
                control.axis.leftY.setValue(-1);
              } else {
                control.axis.leftY.setValue(0);
              }
              break;
            case `ArrowRight`:
              if (action === `down`) {
                control.axis.leftX.setValue(1);
              } else {
                control.axis.leftX.setValue(0);
              }
              break;

            default:
              // control.disconnect();
              // controllers.splice(index, 1);
              break;
          }
        }
      }
    });

    res.status(200).json({ success: `moved` });
  } catch (error) {
    res.status(400).json({ error: `not moved` });
  }
}

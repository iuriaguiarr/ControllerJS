import { controllers } from "../../components";

export default function movimento(req, res) {
  try {
    const { userId, username } = req.body;
    const ViGEmClient = require("vigemclient");
    const opts = { vendorID: userId };
    const client = new ViGEmClient();
    client.connect();
    const newController = client.createX360Controller(opts);
    newController.connect(opts);
    controllers.push({ username, userId, controller: newController });

    setTimeout(() => {
      newController.disconnect();
    }, 70000);

    res.status(200).json(newController.index);
  } catch (error) {
    res.status(400).json(error);
  }
}

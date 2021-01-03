export default function movimento(req, res) {
  try {
    const ViGEmClient = require("vigemclient");
    const client = new ViGEmClient();
    client.connect();
    const newController = client.createX360Controller();
    newController.connect();

    setTimeout(() => {
      newController.disconnect();
    }, 8000);

    res.status(200).json(newController.index);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

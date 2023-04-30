const Item = require("../models/items");

const itemController = {};

itemController.add = (request, response) => {
  const body = request.body;
  const item = new Item(body);

  item
    .save()
    .then((item) => {
      response.json(item);
    })
    .catch((error) => {
      response.json(error);
    });
};

itemController.list = (request, response) => {
  Item.find()
    .then((item) => {
      response.json(item);
    })
    .catch((error) => {
      response.json(error);
    });
};

itemController.find = (request, response) => {
  const body = request.body;
  if (!body.name) {
    response.json([]);
    return;
  }
  Item.find({ name: { $regex: body.name, $options: "i" } })
    .then((item) => {
      response.json(item);
    })
    .catch((error) => {
      response.json(error);
    });
};

itemController.findByType = (request, response) => {
  const body = request.body;
  let filter = {};
  if (body.type) {
    filter = { type: body.type };
  }
  Item.find(filter)
    .then((item) => {
      response.json(item);
    })
    .catch((error) => {
      response.json(error);
    });
};
module.exports = itemController;

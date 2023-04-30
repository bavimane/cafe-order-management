const express = require("express");
const router = express.Router();
const itemController = require("../app/controllers/itemController");

router.post("/api/items", itemController.add);
router.get("/api/items", itemController.list);
router.post("/api/getItem", itemController.find);
router.post("/api/getItemsByType", itemController.findByType);

module.exports = router;

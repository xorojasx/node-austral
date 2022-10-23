var express = require("express");
var router = express.Router();
var bicicletasApiController = require("../../controllers/api/bicicletaApiController");

router.get("/", bicicletasApiController.bicicleta_list);
router.post("/create", bicicletasApiController.bicicleta_create);
router.delete("/delete", bicicletasApiController.bicicleta_delete);

module.exports = router;

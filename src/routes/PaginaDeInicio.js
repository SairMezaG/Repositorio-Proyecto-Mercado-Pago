const express = require("express");

const router = express.Router();

const { getItems, createItem, deleteItem,updateItem } = require("../controllers/PaginaDeInicio");

router.get("/", getItems);
router.post("/", createItem);
router.delete('/:id', deleteItem);
router.put('/:id', updateItem);


module.exports = router

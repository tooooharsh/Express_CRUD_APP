const express = require("express");
const router = express.Router();
const {getContact, createContact, getAContact, deleteContact, updateContact} = require("../controllers/contactsController");



router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getAContact).put(updateContact).delete(deleteContact);


module.exports = router;
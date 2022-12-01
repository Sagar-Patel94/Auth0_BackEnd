const express = require("express");
const auth0Controller = require('../controllers/auth0Controller');

const router = express.Router();

router.post("/createUser", auth0Controller.createUserData);

module.exports = router;
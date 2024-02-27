const express = require("express");
const { findUserChats, findChat, createChat } = require("../Controllers/chatController");

const router = express.Router()

router.post("/", createChat)
router.get("/:userId", findUserChats);
router.get("/find/:fistId/:secondId", findChat);

module.exports = router
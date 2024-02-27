const mongoose = require("mongoose")

const messgaeSchema = new mongoose.Schema({
    chatId: String,
    senderId:String,
    text:String
},{
    timestamps: true
})

const messageModel = mongoose.model("Message", messgaeSchema)

module.exports = messageModel
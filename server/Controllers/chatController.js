const chatModel = require("../Models/chatModel")

//createChat

//findUserChats

//findChat

const createChat = async(req, res) =>{
    const {fistId, secondId} = req.body

    try {
        const chat = await chatModel.findOne({
            members: {$all: [fistId,secondId]}
        })

        if(chat) return res.status(200).json(chat)

        const newChat = new chatModel({
            members: [fistId, secondId]
        })

        const response = await newChat.save()

        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

const findUserChats = async(req, res) => {
    const userId = req.params.userId
    try {
        const chat = await chatModel.find({
            members: {$in: [userId]}
        })

        res.status(200).json(chat);

    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const findChat = async (req, res) => {
    const {fistId,secondId} = req.params;

    try {
        const chat = await chatModel.findOne({
            members: { $all: [fistId, secondId]},
        });

        res.status(200).json(chat);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {createChat, findChat, findUserChats}
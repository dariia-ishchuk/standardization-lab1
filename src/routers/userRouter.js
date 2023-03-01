const express = require("express");
const UserModel = require('../models/user');
const TaskModel = require("../models/task");
const router = express.Router();

router.post("/users", async (req, res) => {

    let user = new UserModel(req.body);

    try {
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get("/users", async (req, res) => {
    await UserModel.find({}).then((users) => {
        res.status(200).send(users);
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
})

router.get("/user/:id", async (req, res) => {
    await UserModel.findById(req.params.id).then((users) => {
        if(users == null){
            res.status(404).send('User does not exist')
        }
        res.status(200).send(users);
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
})

router.delete("/user/:id", async (req, res) => {
    await UserModel.findByIdAndDelete(req.params.id).then((users) => {
        if(users == null){
            res.status(404).send('User does not exist')
        }
        res.status(200).send('User has been deleted success');
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
})


module.exports = router;


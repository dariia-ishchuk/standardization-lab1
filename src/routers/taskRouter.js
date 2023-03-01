const express = require("express")
const TaskModel = require('../models/task')
const router = express.Router()

router.post("/tasks", async (req, res) => {
    let task = new TaskModel(req.body);

    try {
        await task.save();
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get("/tasks", async (req, res) => {
    await TaskModel.find({}).then((tasks) => {
        res.status(200).send(tasks);
    }).catch((error) =>{
        res.status(500).send(error.message)
    })

})

router.get("/task/:id", async (req, res) => {
    await TaskModel.findById(req.params.id).then((users) => {
        if(users == null){
            res.status(404).send('Task does not exist')
        }
        res.status(200).send(users);
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
})

router.delete("/task/:id", async (req, res) => {
    await TaskModel.findByIdAndDelete(req.params.id).then((users) => {
        if(users == null){
            res.status(404).send('Task does not exist')
        }
        res.status(200).send('Task has been deleted success');
    }).catch((error) =>{
        res.status(500).send(error.message)
    })
})



module.exports = router;
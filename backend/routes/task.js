const express = require('express');
const router = express.Router();
const Task = require('../models/task');


router.get('/',async(req,res)=>{
    const tasks = await Task.find();
    res.json(tasks);
});

router.post('/',async(req,res)=>{
    const task=new Task({title:req.body.title});
    const savedTask=await task.save();
    res.json(savedTask);
});

router.delete('/:id',async(req,res)=>{
    const deleteTask=await Task.findByIdAndDelete(req.params.id);
    res.json(deleteTask);
})










module.exports = router;
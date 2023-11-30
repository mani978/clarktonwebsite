const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
    userName:{
        type:String,
        isSignin:true,
        required:true
    }
},{ collection: 'User' })

module.exports = mongoose.model("Task",taskSchema)
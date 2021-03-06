var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: {
        type:String, lowercase: true, trim: true
    },
    description: String,
    actiontask: Number
});

taskSchema.method.toJSON = function (){
    return {
        _id:this._id,
        title:this.title,
        description:this.description,
        actiontask:this.actiontask
    }
}
var Task = mongoose.model('Task',taskSchema,'tasks')

module.exports = Task;
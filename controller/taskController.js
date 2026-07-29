const Task = require("../model/task");


// adding the task details
exports.addTask = async(req,res) => {
  const testTask = await Task.create(req.body);
  res.json(testTask);
}

// fetching the task details based on the query filter
exports.getTask = async(req,res) => {
  const {status, priority, search} = req.query;
  let filter= {};
  if(status) 
  {
    filter.status = status;
  }
  if(priority) 
  {
    filter.priority = priority;
  }
  if(search) 
  {
    filter.name = {$regex:search};
  }
  const fetchTask = await Task.find(filter);
  res.json(fetchTask);
}

exports.updateTask = async(req,res) => {
  const updateTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body
  );
  res.json(updateTask)
}

exports.deleteTask = async(req,res) => {
  const updateTask = await Task.findByIdAndDelete(req.params.id);
  res.json("delete task by id")
}
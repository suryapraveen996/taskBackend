const mongoose =require('mongoose');

const testSchema = new
mongoose.Schema({
  name:String,
  description:String,
  status: {
    type:String,
    default: "Pending"
  },
  priority: {
    type:String,
    default: "Low"
  }
});

module.exports = mongoose.model("Task", testSchema);

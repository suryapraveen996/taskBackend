const router = require("express").Router();
const task = require("../controller/taskController");

router.post("/", task.addTask);
router.get("/", task.getTask);
router.patch("/", task.updateTask);
router.delete("/", task.deleteTask);
router.get("/", task.getTask);

module.exports = router;

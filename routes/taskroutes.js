const router = require("express").Router();
const task = require("../controller/taskController");

router.post("/", task.addTask);
router.get("/", task.getTask);
router.patch("/:id", task.updateTask);
router.delete("/:id", task.deleteTask);
router.get("/dashboard", task.dashboard);

module.exports = router;

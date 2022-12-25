const express = require("express");
const router = express.Router();
const {
  deleteTask,
  updateTask,
  getTask,
  createTask,
  getAllTasks,
} = require("../controllers/task");

router.post("/task/add", createTask);
router.get("/task/one/:id", getTask);
router.put("/task/update/:id", updateTask);
router.get("/tasks", getAllTasks);
router.delete("/task/delete/:id", deleteTask);
module.exports = router;

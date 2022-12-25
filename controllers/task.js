const { User, Task } = require("../models/");
function getAllTasks(req, res) {
  Task.findAll()
    .then((task) => {
      return res.status(200).json(task);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function createTask(req, res) {
  Task.create({
    title: req.body.title,
    complete: false,
    userId: req.body.userId,
  })
    .then((task) => {
      return res.status(200).json(task);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function getTask(req, res) {
  Task.findByPk(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task Not Found" });
      }

      return res.status(200).json(task);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function updateTask(req, res) {
  Task.findByPk(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task Not Found" });
      }

      task
        .update({
          ...task, //spread out existing task
          ...req.body, //spread out body - the differences in the body will over ride the task returned from DB.
        })
        .then((updatedTask) => {
          return res.status(200).json(updatedTask);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function deleteTask(req, res) {
  Task.findByPk(req.params.id)
    .then((task) => {
      if (!task) {
        return res.status(400).json({ message: "Task Not Found" });
      }

      task
        .destroy()
        .then((task) => {
          return res.status(200).json(task);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

module.exports = { deleteTask, updateTask, getTask, createTask, getAllTasks };

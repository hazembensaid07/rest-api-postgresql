const express = require("express");
const router = express.Router();
const {
  deleteProject,
  updateProject,
  getProject,
  createProject,
  getAllProjects,
} = require("../controllers/project");

router.post("/project/add", createProject);
router.get("/project/one/:id", getProject);
router.put("/project/update/:id", updateProject);
router.get("/projects", getAllProjects);
router.delete("/project/delete/:id", deleteProject);
module.exports = router;

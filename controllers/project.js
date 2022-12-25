const { Company, Project, User } = require("../models/");
function getAllProjects(req, res) {
  Project.findAll({
    include: [
      {
        model: User,
        as: "user",
      },
    ],
  })
    .then((project) => {
      return res.status(200).json(project);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function createProject(req, res) {
  Project.create({
    title: req.body.title,
    complete: false,
    companyid: req.body.companyid,
  })
    .then((project) => {
      return res.status(200).json(project);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function getProject(req, res) {
  Project.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "user",
      },
    ],
  })
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "Project Not Found" });
      }

      return res.status(200).json(project);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function updateProject(req, res) {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (!project) {
        return res.status(404).json({ message: "project Not Found" });
      }

      project
        .update({
          ...project, //spread out existing project
          ...req.body, //spread out body - the differences in the body will over ride the project returned from DB.
        })
        .then((updatedProject) => {
          return res.status(200).json(updatedProject);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function deleteProject(req, res) {
  Project.findByPk(req.params.id)
    .then((project) => {
      if (!project) {
        return res.status(400).json({ message: "project Not Found" });
      }

      project
        .destroy()
        .then((project) => {
          return res.status(200).json(project);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

module.exports = {
  deleteProject,
  updateProject,
  getProject,
  createProject,
  getAllProjects,
};

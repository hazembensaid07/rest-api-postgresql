const { Company, Project } = require("../models");
function getAllCompanies(req, res) {
  Company.findAll({
    include: [
      {
        model: Project,
        as: "projects",
      },
    ],
  })
    .then((company) => {
      return res.status(200).json(company);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function createCompany(req, res) {
  const { name, adress } = req.body;

  const newCompany = Company.build({ name, adress });
  newCompany
    .save()
    .then((company) => {
      return res.status(200).json(company);
    })
    .catch((error) => {
      return res.status(400).json(error.message);
    });
}

function GetCompanyByID(req, res) {
  Company.findByPk(req.params.id, {
    include: [
      {
        model: Project,
        as: "projects",
      },
    ],
  })
    .then((company) => {
      if (!company) {
        return res.status(404).json({ message: "company Not Found" });
      }

      return res.status(200).json(company);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function UpdateCompany(req, res) {
  Company.findByPk(req.params.id)
    .then((company) => {
      if (!company) {
        return res.status(404).json({ message: "company Not Found" });
      }

      company
        .update({
          ...company, //spread out existing company
          ...req.body, //spread out req.body - the differences in the body will override the company returned from DB.
        })
        .then((updatedCompany) => {
          return res.status(200).json(updatedCompany);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function DeleteCompany(req, res) {
  Company.findByPk(req.params.id)
    .then((company) => {
      if (!company) {
        return res.status(400).json({ message: "company Not Found" });
      }

      company
        .destroy()
        .then((company) => {
          return res.status(200).json(company);
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
  DeleteCompany,
  UpdateCompany,
  GetCompanyByID,
  createCompany,
  getAllCompanies,
};

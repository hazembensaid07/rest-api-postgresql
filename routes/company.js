const express = require("express");
const router = express.Router();
const {
  DeleteCompany,
  UpdateCompany,
  GetCompanyByID,
  createCompany,
  getAllCompanies,
} = require("../controllers/company");

router.post("/company/add", createCompany);
router.get("/company/one/:id", GetCompanyByID);
router.put("/company/update/:id", UpdateCompany);
router.get("/companies", getAllCompanies);
router.delete("/company/delete/:id", DeleteCompany);
module.exports = router;

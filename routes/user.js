const express = require("express");
const router = express.Router();
const {
  DeleteUser,
  UpdateUser,
  GetUserByID,
  createUser,
  getAllUsers,
  addUserToMeeting,
} = require("../controllers/user");

router.post("/user/add", createUser);
router.get("/user/one/:id", GetUserByID);
router.put("/user/update/:id", UpdateUser);
router.get("/users", getAllUsers);
router.delete("/user/delete/:id", DeleteUser);
router.post("/user/:meetingId/users/:userID", addUserToMeeting);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  DeleteMeeting,
  UpdateMeeting,
  GetMeetingByID,
  createMeeting,
  getAllMeetings,
} = require("../controllers/meeting");

router.post("/meeting/add", createMeeting);
router.get("/meeting/one/:id", GetMeetingByID);
router.put("/meeting/update/:id", UpdateMeeting);
router.get("/meetings", getAllMeetings);
router.delete("/meeting/delete/:id", DeleteMeeting);
module.exports = router;

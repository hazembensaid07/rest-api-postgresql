const { Meeting, User } = require("../models");
function getAllMeetings(req, res) {
  Meeting.findAll({
    include: [
      {
        model: User,
        as: "users",
        attributes: ["email", "city"],
        through: {
          attributes: ["duration"],
        },
      },
    ],
  })
    .then((meeting) => {
      return res.status(200).json(meeting);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function createMeeting(req, res) {
  const { title, subject } = req.body;

  const newMeeting = Meeting.build({ title, subject });
  newMeeting
    .save()
    .then((meeting) => {
      return res.status(200).json(meeting);
    })
    .catch((error) => {
      return res.status(400).json(error.message);
    });
}

function GetMeetingByID(req, res) {
  Meeting.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "users",
        attributes: ["email"],
        through: {
          attributes: ["duration"],
        },
      },
    ],
  })
    .then((meeting) => {
      if (!meeting) {
        return res.status(404).json({ message: "meeting Not Found" });
      }

      return res.status(200).json(meeting);
    })
    .catch((error) => {
      return res.status(400).json(error.message);
    });
}

function UpdateMeeting(req, res) {
  Meeting.findByPk(req.params.id)
    .then((meeting) => {
      if (!meeting) {
        return res.status(404).json({ message: "meeting Not Found" });
      }

      meeting
        .update({
          ...meeting, //spread out existing meeting
          ...req.body, //spread out req.body - the differences in the body will override the meeting returned from DB.
        })
        .then((updatedMeeting) => {
          return res.status(200).json(updatedMeeting);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function DeleteMeeting(req, res) {
  Meeting.findByPk(req.params.id)
    .then((company) => {
      if (!company) {
        return res.status(400).json({ message: "company Not Found" });
      }

      meeting
        .destroy()
        .then((meeting) => {
          return res.status(200).json(meeting);
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
  DeleteMeeting,
  UpdateMeeting,
  GetMeetingByID,
  createMeeting,
  getAllMeetings,
};

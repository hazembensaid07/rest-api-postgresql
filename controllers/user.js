const { User, Meeting, Task } = require("../models");
function getAllUsers(req, res) {
  User.findAll({
    include: [
      {
        model: Task,
        as: "tasks",
      },
    ],

    include: [
      {
        model: Meeting,
        as: "meetings",
        attributes: ["title"],
        through: {
          attributes: ["duration"],
        },
      },
    ],
  })
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function createUser(req, res) {
  const { firstName, lastName, email, city } = req.body;
  console.log(firstName, lastName, email);
  console.log(req.body.projectId);
  const newUser = User.build(req.body);
  newUser
    .save()
    .then((user) => {
      return res.status(200).json(user);
    })
    .catch((error) => {
      return res.status(400).json(error.message);
    });
}

function GetUserByID(req, res) {
  console.log(User);
  User.findByPk(req.params.id, {
    include: [
      {
        model: Task,
        as: "tasks",
      },
    ],
    include: [
      {
        model: Meeting,
        as: "meetings",
        attributes: ["title"],
        through: {
          attributes: ["duration"],
        },
      },
    ],
  })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }

      return res.status(200).json(user);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function UpdateUser(req, res) {
  User.findByPk(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User Not Found" });
      }

      user
        .update({
          ...user, //spread out existing user
          ...req.body, //spread out req.body - the differences in the body will override the user returned from DB.
        })
        .then((updatedUser) => {
          return res.status(200).json(updatedUser);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}

function DeleteUser(req, res) {
  User.findByPk(req.params.id, {
    include: [
      {
        model: Task,
        as: "tasks",
      },
    ],
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "User Not Found" });
      }
      //tasks cannot be without a user
      if (user.tasks.length != 0) {
        return res.status(401).json({ message: "User associated with tasks " });
      }
      user
        .destroy()
        .then((user) => {
          return res.status(200).json(user);
        })
        .catch((error) => {
          return res.status(400).json(error);
        });
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
}
function addUserToMeeting(req, res) {
  Meeting.findByPk(req.params.meetingId)
    .then((meeting) => {
      if (!meeting) {
        return res.status(400).json({ message: "meeting Not Found" });
      }

      meeting
        .addUser(req.params.userID, {
          through: {
            duration: req.body.duration,
          },
        })
        .then((response) => {
          return res.status(200).json(response);
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
  DeleteUser,
  UpdateUser,
  GetUserByID,
  createUser,
  getAllUsers,
  addUserToMeeting,
};

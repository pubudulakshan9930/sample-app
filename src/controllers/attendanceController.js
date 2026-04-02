const {
  markAttendanceService,
  getAttendanceService,
} = require("../services/attendanceService");

const markAttendance = (req, res) => {
  const { studentId, status } = req.body;
  const result = markAttendanceService(studentId, status);
  res.json(result);
};

const getAttendance = (req, res) => {
  const result = getAttendanceService();
  res.json(result);
};

module.exports = {
  markAttendance,
  getAttendance,
};

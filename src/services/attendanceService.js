let attendance = [];

const markAttendanceService = (studentId, status) => {
  const record = {
    studentId,
    status,
    date: new Date(),
  };
  attendance.push(record);
  return { success: true, message: "Attendance marked successfully", record };
};

const getAttendanceService = () => {
  return attendance;
};

module.exports = {
  markAttendanceService,
  getAttendanceService,
};

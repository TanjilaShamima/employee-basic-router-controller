const employees = require("./Employee");

exports.getAllEmployeeData = (req, res) => {
  res.send(employees.getAllEmployeeData());
};

exports.getEmployeeById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const data = employees.getEmployeeById(id);
  res.send(data);
};

exports.updateEmployeeById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const { name, email, employeeId, mobile } = req.body;
  const data = employees.updateEmployeeById(id, {name, email, employeeId, mobile});
  res.send(data);
};

exports.createNewEmployee = (req, res) => {
  const { name, email, employeeId, mobile } = req.body;
  employees.createNewEmployee({
    name,
    email,
    employeeId,
    mobile,
  });
  res.send(employees);
};

exports.deleteEmployeeById = (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const data = employees.deleteEmployeeById(id);
  res.send(data);
};

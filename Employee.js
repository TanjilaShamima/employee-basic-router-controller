class Employee {
  constructor() {
    this.employees = [];
  }

  getAllEmployeeData = () => {
    return this.employees;
  };

  getEmployeeById = (id) => {
    const data = this.employees.find((employee) => employee.id === id);
    return data;
  };

  createNewEmployee = (employee) => {
    employee.id = this.employees.length + 1;
    this.employees.push(employee);
    return employee;
  };

  updateEmployeeById = (id, data) => {
    const index = this.employees.findIndex((employee) => employee.id === id);
    this.employees[index].name = data.name || this.employees[index].name;
    this.employees[index].email = data.email || this.employees[index].email;
    this.employees[index].mobile = data.mobile || this.employees[index].mobile;
    this.employees[index].employeeId =
      data.employeeId || this.employees[index].employeeId;

    return this.employees[index];
  };

  deleteEmployeeById = (id) => {
    this.employees = this.employees.filter((e) => e.id !== id);

    return this.employees;
  };
}

module.exports = new Employee()

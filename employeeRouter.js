const {
  getAllEmployeeData,
  createNewEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
} = require("./employeeController");

const router = require("express").Router();

// Start router set

router.get("/", getAllEmployeeData);
router.get("/:id", getEmployeeById);
router.post("/", createNewEmployee);
router.put("/:id", updateEmployeeById);
router.delete("/:id", deleteEmployeeById);

module.exports = router;

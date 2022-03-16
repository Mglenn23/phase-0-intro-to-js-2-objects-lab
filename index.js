// Write your solution in this file!
const employee = {};
employee.name = "Mich";
employee["streetAddress"] = "Citra Garden 2";

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const cloneEmployee = { ...employee };
  cloneEmployee[key] = value;
  return cloneEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const cloneEmployee = { ...employee };
  //   cloneEmployee[key];
  delete cloneEmployee[key];
  return cloneEmployee;
  //   return {
  //     ...employee.key,
  //     delete: key,
  //   };
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

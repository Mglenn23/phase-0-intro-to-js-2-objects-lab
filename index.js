// Write your solution in this file!
const employee = {};
employee.name = "Mich";
employee["streetAddress"] = "Citra Garden 2";

function updateEmployeeWithKeyAndValue(obj, key, value) {
  const cloneEmployee = { ...obj };
  cloneEmployee[key] = value;
  return cloneEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromEmployeeByKey(obj, key, val) {
  const cloneEmployee = { ...obj };
  cloneEmployee[key] = val;
  delete cloneEmployee.key;
  return cloneEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, val) {
  delete obj[key];
  return obj;
}

export default function createEmployeesObject(departmentName, employees) {
  const oneandtwo = {
    [`${departmentName}`]: employees,
  };
  return oneandtwo;
}

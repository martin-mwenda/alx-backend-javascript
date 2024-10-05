export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList, // Property to store the employees list
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length; // Count the number of keys (departments)
    },
  };
}

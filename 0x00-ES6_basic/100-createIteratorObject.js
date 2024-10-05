export default function createIteratorObject(report) {
  // Immediately-invoked generator function
  return (function* _() {
    // Iterate over each department (which is an array of employees)
    for (const department of Object.values(report.allEmployees)) {
    // Iterate over each employee in the department
      for (const employee of department) {
        yield employee;
      }
    }
  }());
}

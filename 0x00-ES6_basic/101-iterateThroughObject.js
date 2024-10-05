export default function iterateThroughObject(reportWithIterator){{
  // Initialize an empty array to store employee names
  const employees = [];

  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}

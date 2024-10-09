/**
 * This function accepts a list of students as a parameter and uses
 * the reduce() method to calculate the sum of the id values
 */
export default function getStudentIdsSum(students) {
  // Use the reduce method to sum all the student ids
  if (!Array.isArray(students)) {
    return [];
  }

  const reducer = (acc, item) => acc + item.id;

  const sumIds = students.reduce(reducer, 0);

  return sumIds;
}

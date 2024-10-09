/**
 * returns an array of students who are located in a specific city
 */
function getStudentsByLocation(students, city) {
  // Use the filter method to return students who are located in the given city
  if (!Array.isArray(students)) {
    return [];
  }

  const result = students.filter((item) => item.location === city);

  return result;
}

export default getStudentsByLocation;

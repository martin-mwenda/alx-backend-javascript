function getListStudentIds(students) {
  // Check if the argument is an array, if not return an empty array
  if (!Array.isArray(students)) {
    return [];
  }

  const ids = students.map((item) => item.id); // Use map to create a new array containing

  return ids;
}

export default getListStudentIds;

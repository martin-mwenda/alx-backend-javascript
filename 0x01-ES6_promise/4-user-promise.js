function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName, // Use shorthand property name (same as the variable name)
    lastName, // Use shorthand property name (same as the variable name)
  });
}

export default signUpUser;

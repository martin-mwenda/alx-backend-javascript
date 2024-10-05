export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Initialize an empty array to store the new values
  for (const value of array) {
    newArray.push(appendString + value);
  }

  return newArray;
}

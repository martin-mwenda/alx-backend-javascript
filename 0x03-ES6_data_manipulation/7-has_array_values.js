/**
 * function, which returns a boolean indicating whether all elements in an array exist within a set
 * takes a Set and an Array as arguments
 */
export default function hasValuesFromArray(set, array) {
  const check = array.every((item) => set.has(item));
  return check;
}

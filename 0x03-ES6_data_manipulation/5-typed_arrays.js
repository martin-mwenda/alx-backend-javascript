/**
 * This function returns a new ArrayBuffer with an Int8 value at a specific position
 * If the position is outside the allowable range, it throws an error
 */
export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0);

  if (position > length - 1) {
    throw Error('Position outside range');
  }

  view.setInt8(position, value);

  return view;
}

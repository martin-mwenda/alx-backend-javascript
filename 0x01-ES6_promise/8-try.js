export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero
  if (denominator === 0) {
    throw Error('cannot divide by 0');
  }

  return numerator / denominator;
}

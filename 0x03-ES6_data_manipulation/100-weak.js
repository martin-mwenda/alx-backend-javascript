/**
 * function queryAPI that accepts an endpoint argument, you can use the following code structure
 */
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;

  called += 1;

  weakMap.set(endpoint, called);

  // Check if the endpoint is valid
  if (called >= 5) {
    throw Error('Endpoint load is high');
  }

  return called;
}

/**
 * function, which updates a map by setting the quantity of items with an initial quantity of 1-100
 * If the argument is not a map, it throws an error
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw Error('Cannot process');
  }

  for (const [key] of map) {
    if (map.get(key) === 1) map.set(key, 100);
  }

  return map;
}

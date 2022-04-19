export default function updateUniqueItems(groces) {
  if (!(groces instanceof Map)) {
    throw Error('Cannot process');
  }

  groces.forEach((val, key) => {
    if (val === 1) {
      groces.set(key, 100);
    }
  });

  return groces;
}

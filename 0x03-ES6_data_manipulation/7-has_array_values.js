export default function hasValuesFromArray(seter, arr) {
  return arr.every((number) => seter.has(number));
}

export default function cleanSet(seter, startString) {
  if (!startString || typeof startString !== 'string' || typeof seter !== 'object') return '';
  return [...seter]
    .filter((element) => element.startsWith(startString))
    .map((element) => element.slice(startString.length))
    .join('-');
}

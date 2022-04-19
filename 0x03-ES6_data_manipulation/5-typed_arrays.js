export default function createInt8TypedArray(len, pos, value) {
  if (pos < 0 || pos >= len) {
    throw Error('Position outside range');
  }
  const ARbuffer = new ArrayBuffer(len);
  const view = new Int8Array(ARbuffer, 0, len);
  view.set([value], pos);
  return new DataView(ARbuffer);
}

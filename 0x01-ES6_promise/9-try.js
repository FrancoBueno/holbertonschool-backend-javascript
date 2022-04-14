export default function guardrail(mathFunction) {
  const queue = [];
  let Funcmath;

  try {
    Funcmath = mathFunction();
  } catch (err) {
    Funcmath = err.toString();
  }
  queue.push(Funcmath);
  queue.push('Guardrail was processed');
  return queue;
}

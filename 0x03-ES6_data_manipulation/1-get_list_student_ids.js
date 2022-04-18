export default function getListStudentIds(argument) {
  if (Array.isArray(argument)) {
    const argid = argument.map((items) => items.id);
    return argid;
  }
  return [];
}

export default function getStudentIdsSum(student) {
  if (Array.isArray(student)) {
    const stids = student.reduce((count, items) => count + items.id, 0);
    return stids;
  }
  return [];
}

export default function getStudentsByLocation(student, city) {
  if (Array.isArray(student)) {
    const stcities = student.filter((items) => items.location === city);
    return stcities;
  }
  return [];
}

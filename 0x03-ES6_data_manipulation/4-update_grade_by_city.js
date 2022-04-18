export default function updateStudentGradeByCity(arraystd, city, newGrades) {
  if (!Array.isArray(newGrades)) {
    return [];
  }
  if (!Array.isArray(arraystd)) {
    return [];
  }
  return arraystd
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeItem = newGrades
        .filter((item) => item.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeItem || 'N/A';
      return { ...student, grade };
    });
}

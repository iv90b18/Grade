import { Student, RawGradeData } from '../types/grades';
import { CourseCode } from '../types/courses';

export function cleanGrade(grade: string): number {
  if (!grade || grade === '') return 0;
  if (grade.includes('In Progress')) return 0;
  if (grade.includes('Needs Grading')) return 0;
  const numMatch = grade.match(/\d+(\.\d+)?/);
  return numMatch ? parseFloat(numMatch[0]) : 0;
}

export function formatName(firstName: string, lastName: string): string {
  const firstNameParts = firstName.trim().split(' ');
  const lastNameValue = lastName.trim();
  
  if (firstNameParts[firstNameParts.length - 1] === lastNameValue) {
    firstNameParts.pop();
  }
  
  return `${firstNameParts.join(' ')} ${lastNameValue}`.replace(/\s+/g, ' ').trim();
}

export function calculateTotal(student: Student): number {
  return student.exam1 + student.exam2 + student.participation + student.finalExam;
}

export function parseStudentData(rawData: RawGradeData[], section: string, course: CourseCode): Student[] {
  return rawData
    .filter(row => row["Student ID"] && row["First Name"])
    .map(row => ({
      id: row["Student ID"].trim(),
      name: formatName(row["First Name"], row["Last Name"]),
      exam1: cleanGrade(row["الاختبار الاول [Total Pts: 20 Score]"]),
      exam2: cleanGrade(row["الاختبار الثاني [Total Pts: 20 Score]"]),
      participation: cleanGrade(row["المشاركة [Total Pts: 20 Score]"]),
      finalExam: cleanGrade(row["الاختبار النهائي [Total Pts: 40 Score]"] || "0"),
      section,
      course
    }));
}
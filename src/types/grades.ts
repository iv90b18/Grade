import { CourseCode } from './courses';

export interface RawGradeData {
  "Last Name": string;
  "First Name": string;
  "Student ID": string;
  "الاختبار الاول [Total Pts: 20 Score]": string;
  "الاختبار الثاني [Total Pts: 20 Score]": string;
  "المشاركة [Total Pts: 20 Score]": string;
  "الاختبار النهائي [Total Pts: 40 Score]": string;
}

export interface Student {
  id: string;
  name: string;
  exam1: number;
  exam2: number;
  participation: number;
  finalExam: number;
  section: string;
  course: CourseCode;
}

export interface GradeSearchResult {
  student: Student | null;
  error?: string;
}

export function getLetterGrade(total: number): string {
  if (total >= 95) return 'A+';
  if (total >= 90) return 'A';
  if (total >= 85) return 'B+';
  if (total >= 80) return 'B';
  if (total >= 75) return 'C+';
  if (total >= 70) return 'C';
  if (total >= 65) return 'D+';
  if (total >= 60) return 'D';
  return 'F';
}
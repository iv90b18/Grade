interface RawGradeData {
  "Last Name": string;
  "First Name": string;
  "Student ID": string;
  "الاختبار الاول [Total Pts: 20 Score]": string;
  "الاختبار الثاني [Total Pts: 20 Score]": string;
  "المشاركة [Total Pts: 20 Score]": string;
}

export interface Student {
  id: string;
  name: string;
  exam1: number;
  exam2: number;
  participation: number;
}

function cleanGrade(grade: string): number {
  if (!grade || grade === '') return 0;
  if (grade.includes('In Progress')) return 0;
  if (grade.includes('Needs Grading')) return 0;
  const numMatch = grade.match(/\d+(\.\d+)?/);
  return numMatch ? parseFloat(numMatch[0]) : 0;
}

export function parseStudentData(rawData: RawGradeData[]): Student[] {
  return rawData
    .filter(row => row["Student ID"] && row["First Name"])
    .map(row => ({
      id: row["Student ID"].trim(),
      name: `${row["First Name"].trim()} ${row["Last Name"].trim()}`,
      exam1: cleanGrade(row["الاختبار الاول [Total Pts: 20 Score]"]),
      exam2: cleanGrade(row["الاختبار الثاني [Total Pts: 20 Score]"]),
      participation: cleanGrade(row["المشاركة [Total Pts: 20 Score]"])
    }));
}
import { Student } from '../types/grades';
import { parseStudentData } from '../utils/gradeUtils';
import { SECTIONS } from './sections';
import { section2547Data } from './sections/section2547';
import { section2554Data } from './sections/section2554';
import { section2561Data } from './sections/section2561';
import { section2573Data } from './sections/section2573';
import { section2673Data } from './sections/section2673';
import { section2677Data } from './sections/section2677';
import { section2688Data } from './sections/section2688';
import { section2689Data } from './sections/section2689';

// Parse data for each section
const section2547Students = parseStudentData(section2547Data, SECTIONS['2547'], 'ENG 101');
const section2554Students = parseStudentData(section2554Data, SECTIONS['2554'], 'ENG 101');
const section2561Students = parseStudentData(section2561Data, SECTIONS['2561'], 'ENG 101');
const section2573Students = parseStudentData(section2573Data, SECTIONS['2573'], 'ENG 101');
const section2673Students = parseStudentData(section2673Data, SECTIONS['2673'], 'ENG 103');
const section2677Students = parseStudentData(section2677Data, SECTIONS['2677'], 'ENG 103');
const section2688Students = parseStudentData(section2688Data, SECTIONS['2688'], 'ENG 103');
const section2689Students = parseStudentData(section2689Data, SECTIONS['2689'], 'ENG 103');

// Combine all sections
export const students: Student[] = [
  ...section2547Students,
  ...section2554Students,
  ...section2561Students,
  ...section2573Students,
  ...section2673Students,
  ...section2677Students,
  ...section2688Students,
  ...section2689Students
];

// Export individual sections if needed
export const studentsBySection = {
  '2547': section2547Students,
  '2554': section2554Students,
  '2561': section2561Students,
  '2573': section2573Students,
  '2673': section2673Students,
  '2677': section2677Students,
  '2688': section2688Students,
  '2689': section2689Students
};
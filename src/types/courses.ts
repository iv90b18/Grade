export type CourseCode = 'ENG 101' | 'ENG 103';

export const COURSES = {
  'ENG 101': {
    code: 'ENG 101',
    name: 'English 101',
    sections: ['2547', '2554', '2561', '2573']
  },
  'ENG 103': {
    code: 'ENG 103',
    name: 'English 103',
    sections: ['2673', '2677', '2688', '2689']
  }
} as const;

export type Course = typeof COURSES[keyof typeof COURSES];
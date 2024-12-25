export const SECTIONS = {
  '2547': 'ENG 101 - Section 2547',
  '2554': 'ENG 101 - Section 2554',
  '2561': 'ENG 101 - Section 2561',
  '2573': 'ENG 101 - Section 2573',
  '2673': 'ENG 103 - Section 2673',
  '2677': 'ENG 103 - Section 2677',
  '2688': 'ENG 103 - Section 2688',
  '2689': 'ENG 103 - Section 2689'
} as const;

export type SectionNumber = keyof typeof SECTIONS;
import { Student } from '../types/grades';
import { students } from '../data/students';
import { COURSES } from '../types/courses';

export function findStudent(searchValue: string, selectedCourse: string | null): Student | null {
  if (!searchValue.trim()) {
    return null;
  }

  const normalizedSearch = searchValue.trim();
  
  // Filter students based on selected course
  const filteredStudents = selectedCourse 
    ? students.filter(s => s.course === selectedCourse)
    : students;

  // First try exact match by ID
  const studentById = filteredStudents.find(s => s.id === normalizedSearch);
  if (studentById) {
    console.log('Found student by ID:', studentById); // Debug log
    return studentById;
  }

  // Then try name search
  const normalizedSearchName = normalizedSearch.toLowerCase().replace(/\s+/g, ' ');
  const studentByName = filteredStudents.find(s => 
    s.name.toLowerCase().replace(/\s+/g, ' ').includes(normalizedSearchName)
  );

  console.log('Found student by name:', studentByName); // Debug log
  return studentByName;
}
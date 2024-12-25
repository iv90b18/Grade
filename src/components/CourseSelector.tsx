import React from 'react';
import { FileText } from 'lucide-react';
import { COURSES } from '../types/courses';

interface CourseSelectorProps {
  selectedCourse: string | null;
  onSelectCourse: (course: string) => void;
}

export default function CourseSelector({ selectedCourse, onSelectCourse }: CourseSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      {Object.values(COURSES).map((course) => (
        <button
          key={course.code}
          onClick={() => onSelectCourse(course.code)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            selectedCourse === course.code
              ? 'bg-blue-600 text-white shadow-lg scale-105'
              : 'bg-white/80 text-blue-900 hover:bg-white hover:shadow-md'
          }`}
        >
          <FileText size={14} className={selectedCourse === course.code ? 'text-blue-100' : 'text-blue-600'} />
          <span className="text-xs font-medium font-noto">{course.code}</span>
        </button>
      ))}
    </div>
  );
}
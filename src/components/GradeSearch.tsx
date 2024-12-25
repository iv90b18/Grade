import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Student } from '../types/grades';
import { Search } from 'lucide-react';
import SearchInput from './SearchInput';
import GradeDisplay from './GradeDisplay';
import ErrorMessage from './ErrorMessage';
import CourseSelector from './CourseSelector';
import toast from 'react-hot-toast';
import { findStudent } from '../services/searchService';

export default function GradeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [result, setResult] = useState<Student | null>(null);
  const [error, setError] = useState('');

  const handleSearch = useCallback(() => {
    if (!searchTerm.trim()) {
      setError('الرجاء إدخال الرقم الأكاديمي أو الاسم الرباعي');
      setResult(null);
      return;
    }

    console.log('Searching for:', searchTerm, 'Course:', selectedCourse); // Debug log
    const student = findStudent(searchTerm, selectedCourse);
    console.log('Search result:', student); // Debug log

    if (student) {
      setResult(student);
      setError('');
      toast.success('تم العثور على الطالب بنجاح');
    } else {
      setResult(null);
      setError('لم يتم العثور على الطالب. يرجى التحقق من الرقم الأكاديمي أو الاسم الرباعي');
      toast.error('لم يتم العثور على الطالب');
    }
  }, [searchTerm, selectedCourse]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto px-2 sm:px-3"
    >
      <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 backdrop-blur-sm bg-opacity-90">
        <div className="text-center mb-4 sm:mb-5">
          <CourseSelector 
            selectedCourse={selectedCourse}
            onSelectCourse={setSelectedCourse}
          />
        </div>
        
        <SearchInput 
          value={searchTerm}
          onChange={setSearchTerm}
          onSearch={handleSearch}
        />

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <ErrorMessage message={error} />
            </motion.div>
          )}
          {result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GradeDisplay student={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
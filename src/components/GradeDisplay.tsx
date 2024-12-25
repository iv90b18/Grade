import React from 'react';
import { motion } from 'framer-motion';
import { Student, getLetterGrade } from '../types/grades';
import { calculateTotal } from '../utils/gradeUtils';
import { BookOpen, Target, Users, Award, GraduationCap } from 'lucide-react';

interface GradeDisplayProps {
  student: Student;
}

export default function GradeDisplay({ student }: GradeDisplayProps) {
  const total = calculateTotal(student);
  const letterGrade = getLetterGrade(total);
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 sm:mt-6"
    >
      <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl border border-blue-100/50 shadow-lg overflow-hidden">
        {/* Student Info Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4 text-white">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-3">
            <div className="order-2 sm:order-1">
              <div className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[10px] sm:text-xs bg-white/10 backdrop-blur-sm">
                <BookOpen size={12} className="ml-1 sm:ml-1.5" />
                <span className="font-noto">الشعبة {student.section}</span>
              </div>
            </div>
            <div className="order-1 sm:order-2 text-right w-full sm:w-auto">
              <h2 className="text-sm sm:text-base font-bold mb-0.5 sm:mb-1 font-noto">{student.name}</h2>
              <p className="text-blue-100 flex items-center gap-1 sm:gap-1.5 justify-end text-[10px] sm:text-xs">
                <span>{student.id}</span>
                <Users size={12} className="sm:w-3 sm:h-3" />
              </p>
            </div>
          </div>
        </div>

        {/* Grades Section */}
        <div className="p-3 sm:p-4">
          {/* Individual Grades */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
            {[
              { title: 'الاختبار الأول', value: student.exam1, color: 'from-emerald-500 to-emerald-600', icon: Award, maxScore: 20 },
              { title: 'الاختبار الثاني', value: student.exam2, color: 'from-blue-500 to-blue-600', icon: Award, maxScore: 20 },
              { title: 'المشاركة', value: student.participation, color: 'from-violet-500 to-violet-600', icon: Award, maxScore: 20 },
              { title: 'الاختبار النهائي', value: student.finalExam, color: 'from-amber-500 to-amber-600', icon: GraduationCap, maxScore: 40 }
            ].map((grade, index) => (
              <motion.div
                key={grade.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
              >
                <div className={`bg-gradient-to-r ${grade.color} h-0.5 sm:h-1`} />
                <div className="p-2.5 sm:p-3">
                  <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <grade.icon className="text-gray-600 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <h3 className="text-xs sm:text-sm font-semibold text-gray-700 font-noto">{grade.title}</h3>
                    </div>
                    <span className="text-[8px] sm:text-[10px] text-gray-500 font-noto">من {grade.maxScore} درجة</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-800 font-noto text-center mt-1 sm:mt-1.5">
                    {grade.value}
                  </div>
                  <div className="mt-1.5 sm:mt-2 h-1 sm:h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${grade.color}`}
                      style={{ width: `${(grade.value / grade.maxScore) * 100}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-2.5 sm:p-3 rounded-lg text-white"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="text-center sm:text-right">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Target size={14} className="text-blue-400" />
                  <h3 className="font-bold text-sm sm:text-base font-noto">المجموع النهائي</h3>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-noto">مجموع الدرجات من ١٠٠ درجة</p>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-2">
                  <p className="text-xl sm:text-2xl font-bold font-noto">{total}</p>
                  <span className="text-lg sm:text-xl font-bold text-blue-400 font-noto">({letterGrade})</span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-400 font-noto">الدرجة</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-3 sm:py-4 px-3 sm:px-4 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-1.5 mb-2 sm:mb-3">
            <GraduationCap size={20} className="text-blue-100" />
            <h1 className="text-sm sm:text-base font-bold font-noto">موقع خاص لطلاب محمد الفردان</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 bg-blue-900/30 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full">
              <BookOpen size={14} className="text-blue-200" />
              <p className="text-[10px] sm:text-sm text-blue-100 font-medium font-noto">نظام درجات أعمال السنة</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
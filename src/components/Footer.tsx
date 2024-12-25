import React from 'react';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2 sm:py-3 px-4 mt-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-1.5">
        <Code size={14} className="text-gray-400" />
        <p className="text-center text-[10px] sm:text-xs">
          صنع بواسطة المهندس عبدالله الفردان © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
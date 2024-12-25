import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 p-2.5 sm:p-3 rounded-xl text-right mt-3 sm:mt-4 flex items-center gap-2">
      <AlertCircle className="text-red-500 w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
      <p className="text-[10px] sm:text-xs">{message}</p>
    </div>
  );
}
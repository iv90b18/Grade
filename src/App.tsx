import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import GradeSearch from './components/GradeSearch';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Toaster position="top-center" />
      <Header />
      <main className="flex-grow py-8 sm:py-12 container mx-auto px-4 sm:px-6">
        <GradeSearch />
      </main>
      <Footer />
    </div>
  );
}

export default App;
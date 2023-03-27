import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


export default function App() {
   const [currentPage, setCurrentPage] = useState('About');
   
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
   
   const renderPage = () => {
     if (currentPage === 'Contact') {
       return <Contact />;
     } else if (currentPage === 'Portfolio') {
       return <Portfolio />;
     } else  if (currentPage === 'Resume') {
       return <Resume />;
     } else {
       return <About />;
     }
   };
   return (
    <div>
      
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      { renderPage()}
      <Footer />
    </div>
  );

 }


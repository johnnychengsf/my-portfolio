import React from 'react';
import Nav from '../Nav';
import './style.css';


function Header(props) {
   return (
     <section id="Header">
       <section id="header">
         <header className="header-class">
           <div className="header-image"></div>
           <h1>Cheung Yee, Cheng</h1>
           <Nav currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
         </header>
       </section>
     </section>
   );
 }
 
export default Header;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Footer() {
    return (
      <div class="container-fluid mt-4" style={{backgroundColor: '#453328'}}>
        <div className="text-center p-3 text-white" >
          © {new Date().getFullYear()} BAKAROU Hajar - Tous droits réservés
        </div>
      </div>
    );
  }
  export default Footer;
  
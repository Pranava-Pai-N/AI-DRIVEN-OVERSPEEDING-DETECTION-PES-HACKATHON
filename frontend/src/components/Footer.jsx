import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <span className="font-bold text-orange-400">Bug Smashers</span>
        </p>
        <div className="flex space-x-4">
          <a
         
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition"
          >
           
          </a>
          <a
           
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            
          </a>
          <a
            href="https://parivahan.gov.in/parivahan//en/contactus"
            className="text-orange-400 hover:text-orange-500 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

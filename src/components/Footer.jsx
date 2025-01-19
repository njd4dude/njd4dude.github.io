import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 text-center mt-20">
      <p>
        &copy; {new Date().getFullYear()} Nathan Donato. All rights reserved.
      </p>
      <div className="mt-2">
        <a href="https://github.com/njd4dude" className="mx-2 hover:underline">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
          className="mx-2 hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:njdonato30@gmail.com" className="mx-2 hover:underline">
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;

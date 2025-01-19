import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <address className="bg-white shadow-xl rounded-lg p-4 flex flex-col items-center">
        <span className="font-bold text-2xl mb-6">Contact Me</span>
        <div className="space-y-4 text-base">
          <p className="flex items-center justify-center hover:scale-105">
            <a className="flex items-center" href="mailto:njdonato30@gmail.com">
              <EmailIcon className="mr-3" />
              njdonato30@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center hover:scale-105">
            <a
              className="flex items-center"
              href="https://www.linkedin.com/in/nathan-donato-4a0742242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="mr-3" sx={{ color: "#0077B5" }} />
              linkedin.com/in/nathan-donato-4a0742242/
            </a>
          </p>
          <p className="flex items-center justify-center hover:scale-105">
            <a
              className="flex items-center"
              href="https://github.com/njd4dude"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="mr-3" />
              github.com/njd4dude
            </a>
          </p>
        </div>
      </address>
    </div>
  );
};

export default Contact;

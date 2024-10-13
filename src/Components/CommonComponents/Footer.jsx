import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      {/* Navigation links */}
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium text-sm">
        <a className="hover:text-gray-900" href="/">
          Home
        </a>
        <a className="hover:text-gray-900" href="#">
          About
        </a>
        <a className="hover:text-gray-900" href="#">
          Contact
        </a>
      </nav>

      {/* Social media links */}
      <div className="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook" // Added aria-label for accessibility
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt="Facebook Icon" // Added alt text for images
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt="LinkedIn Icon"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
            alt="Instagram Icon"
          />
        </a>
        <a
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Messenger"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
            alt="Messenger Icon"
          />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt="Twitter Icon"
          />
        </a>
      </div>

      {/* Copyright notice */}
      <p className="text-center text-gray-700 font-medium text-sm">
        &copy; 2022 Company Ltd. All rights reserved.
      </p>
    </footer>
  );
}

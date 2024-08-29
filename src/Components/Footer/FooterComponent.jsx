import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold">A+ Studio</h2>
            <p className="text-gray-600 mt-2">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-800">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full md:space-x-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">What We Do</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>Web Design</li>
                <li>App Design</li>
                <li>Social Media Manage</li>
                <li>Market Analysis Project</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Career</li>
                <li>Become Investor</li>
              </ul>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>FAQ</li>
                <li>Policy</li>
                <li>Business</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li>WhatsApp</li>
                <li>Support 24</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

import { Facebook, Instagram, Mail, Send, Zap } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const quickLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const LinkColumn = ({ title, links }) => (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.href}
              className="text-base text-gray-500 hover:text-orange-500 transition-colors duration-300"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const SocialIcon = ({ Icon, href, label }) => (
    <a
      href={href}
      className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </a>
  );

  function handleSubmit(e) {
    e.preventDefault();
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="max-w-[90rem] mx-auto py-12 pt-20 px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,2fr)] gap-4">
          <LinkColumn title="Quick Links" links={quickLinks} />
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={index}
                  Icon={social.icon}
                  href={social.href}
                  label={social.label}
                />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold  text-gray-900 uppercase tracking-wider mb-4">
              Certifications
            </h3>
            <div>
              <img
                src="vite.svg"
                alt="Creti"
                className="bg-gray-300 object-cover object-center "
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-base text-gray-500 mb-4">
            Get the latest updates and insights delivered to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Zap className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">PAVAN FOAM</span>
          </div>
          <p className="text-base text-gray-500">
            © {currentYear} PAVAN FOAM. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

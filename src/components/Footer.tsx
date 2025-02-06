import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Bio Section */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-4 mb-4 group">
              <img 
                src="/profile-pic.jpg" 
                alt="Sanjan B M" 
                className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm leading-relaxed">
                I am a Full Stack Developer and ML Engineer, currently pursuing MCA at RVCE. 
                I create intelligent web applications that are fast, scalable, and built with best practices.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-start-3">
            <div className="space-y-4">
              <h3 className="font-semibold text-white mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-indigo-500 after:mt-2">
                CONNECT
              </h3>
              <div className="space-y-6">
                <a 
                  href="https://twitter.com/sanjanbm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Follow for tech insights & updates</span>
                </a>
                <a 
                  href="https://github.com/sanjanb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Follow for open-source projects</span>
                </a>
                <a 
                  href="https://linkedin.com/in/sanjan-bm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 transform hover:translate-x-2 group"
                >
                  <div className="p-2 rounded-lg bg-gray-800 group-hover:bg-blue-700 transition-colors duration-300">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Let's connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-start-4">
            <div>
              <h3 className="font-semibold text-white mb-6 relative inline-block after:content-[''] after:block after:w-12 after:h-0.5 after:bg-indigo-500 after:mt-2">
                EXPLORE
              </h3>
              <div className="space-y-6">
                <div>
                  <Link to="/about" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    ABOUT
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">Learn about my journey and expertise</p>
                </div>
                
                <div>
                  <Link to="/portfolio" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    PORTFOLIO
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">Explore my latest projects and work</p>
                </div>
                
                <div>
                  <Link to="/testimonials" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    TESTIMONIALS
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">What clients say about my work</p>
                </div>
                
                <div>
                  <Link to="/articles" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    ARTICLES
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">Tech insights and tutorials</p>
                </div>
                
                <div>
                  <Link to="/store" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    STORE
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">Digital products and resources</p>
                </div>
                
                <div>
                  <Link to="/contact" 
                    className="text-sm font-medium hover:text-white transition-all duration-300 transform hover:translate-x-2 inline-block">
                    CONTACT
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">Get in touch for collaborations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright {new Date().getFullYear()} Sanjan B M
          </p>
          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-sm">Built with</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span className="text-sm">in Bangalore</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Mail } from 'lucide-react';

const ContactMinimal = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Let's chat.
                <br />
                Tell me about your project.
              </h2>
              <p className="text-gray-600 mb-6">
                Let's create something together ✨
              </p>
              <div className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:sanjanacharaya1234@gmail.com">
                  sanjanacharaya1234@gmail.com
                </a>
              </div>
            </div>

            <div className="flex-1 w-full">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name*"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email address*"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMinimal;

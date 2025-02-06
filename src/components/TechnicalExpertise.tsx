import React from 'react';
import { Code2, Brain, BarChart3 } from 'lucide-react';

const TechnicalExpertise = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-gray-900 text-center mb-3 sm:mb-4">
          Technical Expertise
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed">
          Delivering high-quality solutions through expertise in web development, machine learning, and data analytics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Web Development */}
          <div className="group">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 bg-indigo-100 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                <div className="absolute inset-0 bg-indigo-50 rounded-xl transform -rotate-6 transition-transform group-hover:-rotate-12"></div>
                <div className="relative bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-[24px] md:text-[28px] font-bold text-center mb-2 sm:mb-3">Web Development</h3>
              <p className="text-base sm:text-[15px] md:text-[17px] text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed">
                Responsive websites built for an optimal user experience that achieves your business goals.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">React & Next.js</span>
                  <span className="text-xs text-indigo-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">Node.js & Express</span>
                  <span className="text-xs text-indigo-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">TypeScript</span>
                  <span className="text-xs text-indigo-600">Proficient</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="group">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 bg-purple-100 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                <div className="absolute inset-0 bg-purple-50 rounded-xl transform -rotate-6 transition-transform group-hover:-rotate-12"></div>
                <div className="relative bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-[24px] md:text-[28px] font-bold text-center mb-2 sm:mb-3">Machine Learning</h3>
              <p className="text-base sm:text-[15px] md:text-[17px] text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed">
                Make your applications intelligent with state-of-the-art machine learning solutions.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">TensorFlow & PyTorch</span>
                  <span className="text-xs text-purple-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">Computer Vision</span>
                  <span className="text-xs text-purple-600">Proficient</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">NLP</span>
                  <span className="text-xs text-purple-600">Proficient</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Analytics */}
          <div className="group">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-xl transform rotate-6 transition-transform group-hover:rotate-12"></div>
                <div className="absolute inset-0 bg-blue-50 rounded-xl transform -rotate-6 transition-transform group-hover:-rotate-12"></div>
                <div className="relative bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <BarChart3 className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-[24px] md:text-[28px] font-bold text-center mb-2 sm:mb-3">Data Analytics</h3>
              <p className="text-base sm:text-[15px] md:text-[17px] text-gray-600 text-center mb-6 sm:mb-8 leading-relaxed">
                Make your website fast, easy to find, and reach the widest audience possible.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">Python & Pandas</span>
                  <span className="text-xs text-blue-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">SQL & Database</span>
                  <span className="text-xs text-blue-600">Advanced</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-[13px] md:text-[15px] font-medium">Data Visualization</span>
                  <span className="text-xs text-blue-600">Proficient</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;

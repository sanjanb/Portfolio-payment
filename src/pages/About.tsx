import React from 'react';
import { Briefcase, GraduationCap, Coffee, Globe, Heart, Award, Trophy } from 'lucide-react';

function About() {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-indigo-200">Full Stack Developer | Machine Learning Engineer | Problem Solver</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Quick Info */}
              <div>
                <div className="sticky top-24">
                  <div className="relative mb-12">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80" 
                        alt="Sanjan B M" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Coffee className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">Tech Enthusiast</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Briefcase className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Experience</h3>
                        <p className="text-gray-600">Full Stack Dev</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Education</h3>
                        <p className="text-gray-600">MCA at RVCE</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Globe className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Location</h3>
                        <p className="text-gray-600">Bangalore, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Heart className="w-6 h-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Interests</h3>
                        <p className="text-gray-600">AI/ML, Web3</p>
                      </div>
                    </div>
                  </div>

                  {/* Certifications Section */}
                  <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-xl font-semibold">Certifications</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-gray-600">
                        <span className="font-medium block">Google Cloud Certified</span>
                        <span className="text-sm text-gray-500">Associate Cloud Engineer</span>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium block">TensorFlow Developer</span>
                        <span className="text-sm text-gray-500">Google AI</span>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium block">Deep Learning Specialization</span>
                        <span className="text-sm text-gray-500">DeepLearning.AI</span>
                      </li>
                    </ul>
                  </div>

                  {/* Achievements Section */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-xl font-semibold">Achievements</h3>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-gray-600">
                        <span className="font-medium block">Smart India Hackathon Finalist</span>
                        <span className="text-sm text-gray-500">AI/ML Solution for Healthcare</span>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium block">Research Paper Publication</span>
                        <span className="text-sm text-gray-500">Deep Learning in Medical Imaging</span>
                      </li>
                      <li className="text-gray-600">
                        <span className="font-medium block">Open Source Contributor</span>
                        <span className="text-sm text-gray-500">TensorFlow & PyTorch Projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Detailed Content */}
              <div className="space-y-12">
                <section>
                  <h2 className="text-3xl font-bold mb-6">My Story</h2>
                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-4">
                      Hello! I'm Sanjan, a passionate Full Stack Developer and Machine Learning Engineer based in Bangalore. 
                      My journey in tech began with a curiosity about artificial intelligence and web development, which has evolved 
                      into a deep expertise in building intelligent web applications.
                    </p>
                    <p className="mb-4">
                      Currently pursuing my MCA at RV College of Engineering, I combine academic excellence with practical 
                      experience in developing scalable applications. My focus lies in the intersection of web technologies 
                      and machine learning, where I strive to create intelligent solutions that solve real-world problems.
                    </p>
                    <p>
                      I'm particularly passionate about deep learning, computer vision, and building efficient web applications. 
                      My approach combines cutting-edge technology with clean, maintainable code to deliver exceptional results.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Technical Expertise</h2>
                  <div className="space-y-8">
                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>React.js, Next.js, TypeScript</li>
                        <li>Node.js, Express, MongoDB</li>
                        <li>RESTful APIs & GraphQL</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Deep Learning & Neural Networks</li>
                        <li>Computer Vision & Image Processing</li>
                        <li>TensorFlow & PyTorch</li>
                      </ul>
                    </div>

                    <div className="relative pl-8 pb-8 border-l-2 border-indigo-100">
                      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Google Cloud Platform</li>
                        <li>Docker & Kubernetes</li>
                        <li>CI/CD & Git Workflows</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-3xl font-bold mb-6">Education</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Master of Computer Applications (MCA)</h3>
                      <p className="text-indigo-600 mb-2">RV College of Engineering • 2022 - Present</p>
                      <p className="text-gray-600">Specializing in AI/ML and Web Technologies</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Applications (BCA)</h3>
                      <p className="text-indigo-600 mb-2">St. Joseph's College • 2019 - 2022</p>
                      <p className="text-gray-600">First Class with Distinction</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that uses AI to prioritize and categorize tasks, built with React and TensorFlow.js',
    image: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80',
    tags: ['React', 'TypeScript', 'TensorFlow.js', 'Node.js'],
    githubUrl: 'https://github.com/yourusername/project1',
    liveUrl: 'https://project1.demo.com'
  },
  {
    id: 2,
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce platforms with advanced data visualization and predictive analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'D3.js', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.demo.com'
  },
  {
    id: 3,
    title: 'Smart Home Automation System',
    description: 'IoT-based home automation system with machine learning capabilities for optimal energy management',
    image: 'https://images.unsplash.com/photo-1558002038-bb0d7d86e23b?auto=format&fit=crop&q=80',
    tags: ['IoT', 'Python', 'React Native', 'TensorFlow'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.demo.com'
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Here are some of my recent projects that showcase my technical expertise
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                        <div className="flex gap-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <Github className="w-6 h-6 text-gray-900" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Projects
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

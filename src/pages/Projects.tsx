import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    id: 'pet-plate',
    title: 'Pet Plate',
    subtitle: 'Working with Pet Plate over 5 years, from initial idea to now a company with a total investment fund of $13 million dollars',
    description: 'A smart pet food delivery service that provides fresh, healthy meals for dogs, built with React and Ruby on Rails.',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    tags: ['React', 'Ruby on Rails', 'WordPress', 'WooCommerce'],
    githubUrl: 'https://github.com/yourusername/pet-plate',
    liveUrl: 'https://petplate.com',
    featured: true
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-commerce Analytics Dashboard',
    description: 'Real-time analytics dashboard for e-commerce platforms with advanced data visualization and predictive analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Next.js', 'D3.js', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/yourusername/project2',
    liveUrl: 'https://project2.demo.com',
    featured: true
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description: 'IoT-based home automation system with machine learning capabilities for optimal energy management',
    image: 'https://images.unsplash.com/photo-1558002038-bb0d7d86e23b?auto=format&fit=crop&q=80',
    tags: ['IoT', 'React Native', 'Python', 'TensorFlow'],
    githubUrl: 'https://github.com/yourusername/project3',
    liveUrl: 'https://project3.demo.com',
    featured: true
  },
  {
    id: 4,
    title: 'Sentiment Analysis Tool',
    description: 'NLP-based sentiment analysis tool for social media monitoring and brand reputation management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    tags: ['Python', 'NLP', 'Machine Learning', 'React'],
    githubUrl: 'https://github.com/yourusername/project4',
    liveUrl: 'https://project4.demo.com',
    featured: false
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and Tailwind CSS, featuring modern design and smooth animations',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: false
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'Weather forecast application with machine learning-based precipitation prediction',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80',
    tags: ['React Native', 'Python', 'Machine Learning'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-app.demo.com',
    featured: false
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              My Projects
            </h1>
            <p className="text-xl text-gray-600">
              A collection of my work in web development, machine learning, and data analytics
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12">
            {allProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-6 h-6 text-gray-900" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-6 h-6 text-gray-900" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 p-6 lg:p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

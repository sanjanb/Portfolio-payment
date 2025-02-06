import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  responsibilities: string[];
  updates: {
    date: string;
    content: string;
  }[];
  technologies: string[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  links: {
    website?: string;
    github?: string;
    forbes?: string;
  };
  logos?: string[];
}

const projectData: Record<string, ProjectDetail> = {
  'pet-plate': {
    id: 'pet-plate',
    title: 'Pet Plate',
    subtitle: 'Working with Pet Plate over 5 years, from initial idea to now a company with a total investment fund of $13 million dollars',
    description: 'I was the designer and front-end developer for the initial Pet Plate website in 2015 and worked closely with the company as it grew over a period of 5 years. By early 2020, Pet Plate had successfully raised a total investment fund of $13 million dollars.',
    longDescription: `Pet Plate launched in August 2015, delivering on-demand freshly cooked meals for pets. I was involved with Pet Plate during its conception, providing design and responsive front-end templates that I integrated into a Ruby on Rails framework. I eventually focused on front-end development, coordinating with the back-end development and design teams to produce a strong user experience.

My main areas of focus were in producing the conversion flow in React, the My Account pages in jQuery (and later moving to React), and the marketing pages in WordPress.`,
    duration: '2015 - 2020',
    responsibilities: [
      'JavaScript',
      'React/Redux',
      'APIs',
      'Semantic HTML',
      'Responsive CSS',
      'WordPress',
      'jQuery/jQuery UI',
      'WooCommerce',
      'WCAG 2.0 AA compliance',
      'Cross-Browser Testing',
      'Git/SVN'
    ],
    updates: [
      {
        date: '15 May 2020',
        content: 'Updated to show Pet Plate\'s progress up to 2020.'
      },
      {
        date: '28 Sep 2018',
        content: 'Updated the project with a Forbes article, describing Pet Plate\'s expansion and my responsibilities as the company has grown.'
      }
    ],
    technologies: ['React', 'Ruby on Rails', 'WordPress', 'WooCommerce'],
    images: [
      {
        src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
        alt: 'Dog eating from a bowl',
        caption: 'Fresh, healthy meals delivered right to your door'
      },
      {
        src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80',
        alt: 'Fresh ingredients for dog food',
        caption: 'Made with real, human-grade ingredients'
      },
      {
        src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
        alt: 'Happy dog',
        caption: 'Pets love the taste of fresh, real food'
      },
      {
        src: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&q=80',
        alt: 'Pet food preparation',
        caption: 'Each meal is carefully prepared in our kitchen'
      },
      {
        src: 'https://images.unsplash.com/photo-1597843786271-1027c861c15c?auto=format&fit=crop&q=80',
        alt: 'Mobile app interface',
        caption: 'Easy ordering through our mobile app'
      }
    ],
    testimonial: {
      quote: 'Not only is Ian\'s work on-time and to spec, he pays attention to improve the aesthetics of the site as well as the functionality. Throughout the entire process he is responsive, and willing to work through issues as they arise. It\'s obvious he takes tremendous pride in his work, and I wouldn\'t hesitate to recommend or work with him again.',
      author: 'Renaldo Webb',
      role: 'Founder of Pet Plate'
    },
    links: {
      website: 'https://www.petplate.com',
      github: 'https://github.com/yourusername/pet-plate',
      forbes: 'https://www.forbes.com/petplate'
    },
    logos: [
      'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?auto=format&fit=crop&q=80&w=200',
      'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=200',
      'https://images.unsplash.com/photo-1557683311-eac922347aa1?auto=format&fit=crop&q=80&w=200',
      'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?auto=format&fit=crop&q=80&w=200'
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectData[projectId || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <Link to="/projects" className="text-blue-500 hover:text-blue-600">
            Return to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      {/* Back to Projects */}
      <div className="fixed top-24 left-8 z-10">
        <Link 
          to="/projects"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{project.subtitle}</p>
            
            {project.links.website && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  View Website
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div 
            className="md:col-span-2"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="my-12 space-y-12">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full"
                      />
                    </div>
                    {image.caption && (
                      <p className="text-sm text-gray-500 mt-2 text-center">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </div>

              {project.testimonial && (
                <motion.blockquote 
                  className="border-l-4 border-blue-500 pl-4 my-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-lg text-gray-600 italic mb-4">
                    "{project.testimonial.quote}"
                  </p>
                  <footer>
                    <strong className="text-gray-900">— {project.testimonial.author}</strong>
                    <span className="text-gray-600">, {project.testimonial.role}</span>
                  </footer>
                </motion.blockquote>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">RESPONSIBILITIES</h2>
              <ul className="space-y-2">
                {project.responsibilities.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    className="text-gray-600 flex items-center"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">UPDATES</h2>
              <div className="space-y-4">
                {project.updates.map((update, index) => (
                  <motion.div 
                    key={index}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="text-sm text-gray-500">{update.date}</div>
                    <div className="text-gray-600">{update.content}</div>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">ABOUT ME</h2>
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                  alt="Profile" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <p className="text-gray-600 text-sm">
                    Sanjan B M is a Front-end Developer with 3+ years experience creating successful websites that are fast to load and easy to use.
                  </p>
                </div>
              </motion.div>
            </section>

            {project.logos && (
              <section>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">FEATURED IN</h2>
                <div className="flex flex-wrap gap-6">
                  {project.logos.map((logo, index) => (
                    <motion.img
                      key={index}
                      src={logo}
                      alt="Featured in"
                      className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    />
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex gap-4">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              )}
              {project.links.forbes && (
                <a
                  href={project.links.forbes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Read on Forbes
                </a>
              )}
            </div>
            
            <Link
              to="/projects"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;

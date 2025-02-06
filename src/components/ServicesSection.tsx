import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Palette, Code, Sparkles, Zap, Database, Star, Calendar, ArrowRight } from 'lucide-react';
import ServiceCard from './ServiceCard';
import PricingTable from './PricingTable';

const ServicesSection: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState(7);
  const [spotsLeft, setSpotsLeft] = useState(3);

  const services = [
    {
      icon: <Globe className="w-6 h-6 text-indigo-600" />,
      title: "Web Development",
      description: "Transform your vision into a stunning, high-performance website that drives results.",
      benefits: [
        "Lightning-fast load times for better user engagement",
        "Mobile-first design for maximum reach",
        "SEO-optimized structure for higher rankings"
      ],
      beforeAfter: {
        before: "5+ second load time, 30% bounce rate",
        after: "Sub-2 second loads, 80% engagement increase"
      }
    },
    {
      icon: <Palette className="w-6 h-6 text-indigo-600" />,
      title: "UI/UX Design",
      description: "Create intuitive, engaging user experiences that convert visitors into customers.",
      benefits: [
        "User-centric design that boosts conversions",
        "Intuitive navigation reducing bounce rates",
        "Brand-aligned visuals for stronger identity"
      ],
      beforeAfter: {
        before: "2% conversion rate, confused users",
        after: "8% conversion rate, clear user journey"
      }
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-600" />,
      title: "Performance Optimization",
      description: "Supercharge your website's speed and efficiency for better user experience.",
      benefits: [
        "Improved Core Web Vitals scores",
        "Enhanced SEO rankings",
        "Reduced bounce rates"
      ],
      beforeAfter: {
        before: "40/100 PageSpeed score",
        after: "95/100 PageSpeed score"
      }
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Working with Sanjan transformed our online presence. Our conversion rate doubled within just two months!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content: "The attention to detail and technical expertise is outstanding. Best investment we've made this year.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4 inline-block">
              Services
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Want to Elevate Your Business?{" "}
            <span className="text-indigo-600">Let's Make It Happen!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Transform your digital presence with data-driven solutions that deliver real results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Social Proof */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12 grayscale opacity-70">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                src={`https://via.placeholder.com/120x40?text=LOGO${i + 1}`}
                alt={`Company ${i + 1}`}
                className="h-8 object-contain"
              />
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white mb-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-indigo-500 rounded-full text-sm font-medium mb-4">
              <Star className="w-4 h-4 inline-block mr-2" />
              Limited Time Offer
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Claim Your Free Strategy Call
            </h3>
            
            <p className="text-indigo-100 mb-8">
              Only {spotsLeft} spots remaining this month. Book now and receive a complimentary website audit worth $500.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Offer ends in {daysLeft} days</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 group hover:bg-indigo-50 transition-colors"
            >
              Schedule Your Free Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-sm text-indigo-200 mt-4">
              No credit card required • 30-day money-back guarantee
            </p>
          </div>
        </motion.div>

        {/* Pricing Table */}
        <PricingTable />
      </div>
    </section>
  );
};

export default ServicesSection;

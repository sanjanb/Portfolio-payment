import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingTable: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Custom responsive website',
        'Basic SEO optimization',
        'Contact form integration',
        '2 rounds of revisions',
        '1 month of support'
      ]
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses needing more features',
      features: [
        'Everything in Starter, plus:',
        'Advanced SEO optimization',
        'E-commerce integration',
        'Custom animations',
        'Performance optimization',
        '3 months of support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For businesses needing complex solutions',
      features: [
        'Everything in Professional, plus:',
        'Custom backend development',
        'Third-party integrations',
        'Advanced analytics',
        'Priority support',
        '12 months of support'
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-2xl ${
                tier.popular
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white'
              } shadow-xl p-8`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <div className="bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.name !== 'Enterprise' && (
                    <span className={tier.popular ? 'text-indigo-200' : 'text-gray-500'}>
                      /project
                    </span>
                  )}
                </div>
                <p className={tier.popular ? 'text-indigo-200' : 'text-gray-600'}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 ${
                      tier.popular ? 'text-indigo-300' : 'text-green-500'
                    }`} />
                    <span className={tier.popular ? 'text-indigo-100' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 group ${
                  tier.popular
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-indigo-600 text-white hover:bg-indigo-700'
                } transition-colors`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {tier.popular && (
                <div className="absolute -inset-px bg-indigo-600 -z-10 rounded-2xl" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans include:{' '}
            <span className="font-semibold">Responsive Design</span>,{' '}
            <span className="font-semibold">SEO Optimization</span>,{' '}
            <span className="font-semibold">Free Hosting Setup</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            *Enterprise pricing varies based on specific requirements
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingTable;

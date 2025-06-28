import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 25,
      description: 'Perfect for occasional tutoring needs',
      features: [
        'Elementary to Middle School',
        'Online sessions only',
        'Email support',
        'Basic progress tracking',
        'Standard tutors'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: 45,
      description: 'Most popular choice for regular students',
      features: [
        'All academic levels',
        'Online + In-person options',
        'Priority support',
        'Detailed progress reports',
        'Experienced tutors',
        'Flexible scheduling',
        'Test prep included'
      ],
      popular: true,
      color: 'green'
    },
    {
      name: 'Premium',
      price: 65,
      description: 'For serious academic goals and test prep',
      features: [
        'All features included',
        'Expert tutors only',
        '24/7 support',
        'College prep specialists',
        'Unlimited sessions',
        'Personal learning plan',
        'Parent progress meetings',
        'Satisfaction guarantee'
      ],
      popular: false,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string, popular: boolean) => {
    const colors = {
      blue: {
        bg: popular ? 'bg-blue-600' : 'bg-white',
        text: popular ? 'text-white' : 'text-gray-900',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        accent: 'text-blue-600'
      },
      green: {
        bg: popular ? 'bg-green-600' : 'bg-white',
        text: popular ? 'text-white' : 'text-gray-900',
        border: 'border-green-200',
        button: 'bg-green-600 hover:bg-green-700',
        accent: 'text-green-600'
      },
      orange: {
        bg: popular ? 'bg-orange-600' : 'bg-white',
        text: popular ? 'text-white' : 'text-gray-900',
        border: 'border-orange-200',
        button: 'bg-orange-600 hover:bg-orange-700',
        accent: 'text-orange-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Affordable Pricing for Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your learning needs and budget. 
            All plans include our satisfaction guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color, plan.popular);
            
            return (
              <div
                key={index}
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} ${colors.text} 
                  ${plan.popular ? 'transform scale-105 shadow-2xl' : 'shadow-lg'} 
                  transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className={`text-sm ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                        /hour
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : colors.accent} mt-0.5`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                        : `${colors.button} text-white`
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            All plans include our 100% satisfaction guarantee. Not happy? Get your money back.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-100 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors">
              Compare All Features
            </button>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
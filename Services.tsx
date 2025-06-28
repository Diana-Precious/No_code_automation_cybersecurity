import React from 'react';
import { Home, BookOpen, Target, Users, Globe, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Tutoring',
      description: 'Personalized one-on-one tutoring sessions in the comfort of your home',
      features: ['Qualified tutors', 'Flexible scheduling', 'All subjects covered', 'Progress tracking']
    },
    {
      icon: BookOpen,
      title: 'Homework & Assignment Help',
      description: 'Expert assistance with daily homework and challenging assignments',
      features: ['Step-by-step guidance', 'Subject expertise', 'Deadline management', 'Quality assurance']
    },
    {
      icon: Target,
      title: 'Test Preparation',
      description: 'Comprehensive preparation for standardized tests and exams',
      features: ['SAT/ACT prep', 'College entrance', 'Professional certifications', 'Practice tests']
    },
    {
      icon: Globe,
      title: 'Online Sessions',
      description: 'Connect with tutors worldwide through our interactive platform',
      features: ['HD video calls', 'Screen sharing', 'Digital whiteboard', 'Session recordings']
    },
    {
      icon: Users,
      title: 'Group Sessions',
      description: 'Cost-effective group learning with peers at similar levels',
      features: ['Small groups (2-4)', 'Peer learning', 'Competitive pricing', 'Social interaction']
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock academic support whenever you need it',
      features: ['Instant help', 'Global time zones', 'Emergency sessions', 'Always available']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Learning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From elementary to college level, we provide personalized tutoring services 
            that adapt to your learning style and academic goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
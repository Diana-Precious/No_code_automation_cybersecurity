import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Parent of High School Student',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "TutorGlobal transformed my daughter's approach to mathematics. Her grades improved from C to A+ in just 3 months. The tutor was patient, knowledgeable, and truly cared about her success.",
      subject: 'Mathematics'
    },
    {
      name: 'Robert Chen',
      role: 'College Student',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "As an international student, I struggled with English writing. My tutor helped me not only improve my grades but also gain confidence in expressing my ideas clearly. Highly recommended!",
      subject: 'English Writing'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Parent of Elementary Student',
      image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "The convenience of home tutoring is incredible. My son feels comfortable learning in his own environment, and I can see his progress firsthand. The pricing is very reasonable too.",
      subject: 'Elementary Math'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Graduate Student',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "Preparing for my medical school entrance exam seemed impossible until I found TutorGlobal. The specialized test prep tutor knew exactly what I needed to focus on. I scored in the top 10%!",
      subject: 'Medical School Prep'
    },
    {
      name: 'Lisa Thompson',
      role: 'Working Professional',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "Learning programming while working full-time was challenging. The flexible scheduling and online sessions made it possible. I successfully transitioned to a tech career thanks to my tutor.",
      subject: 'Programming'
    },
    {
      name: 'David Kim',
      role: 'High School Student',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      content: "SAT prep was stressing me out, but my tutor made it manageable. The personalized study plan and practice tests boosted my score by 300 points. Got into my dream college!",
      subject: 'SAT Preparation'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from students and parents who have experienced success with our tutoring platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative"
            >
              <div className="absolute top-4 right-4 text-blue-600 opacity-20">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              
              <div className="border-t pt-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {testimonial.subject}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.9/5</span>
            </div>
            <span className="text-gray-600">Based on 1,200+ reviews</span>
          </div>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
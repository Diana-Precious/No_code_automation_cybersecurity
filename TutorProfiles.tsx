import React from 'react';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';

const TutorProfiles = () => {
  const tutors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 127,
      subjects: ['Mathematics', 'Physics', 'Chemistry'],
      experience: '8 years',
      education: 'PhD in Mathematics, MIT',
      location: 'Boston, MA',
      price: 65,
      languages: ['English', 'Spanish'],
      availability: 'Available now',
      verified: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 89,
      subjects: ['Computer Science', 'Programming', 'Web Development'],
      experience: '6 years',
      education: 'MS Computer Science, Stanford',
      location: 'San Francisco, CA',
      price: 70,
      languages: ['English', 'Mandarin'],
      availability: 'Available today',
      verified: true
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      image: 'https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 156,
      subjects: ['English Literature', 'Writing', 'History'],
      experience: '10 years',
      education: 'MA English Literature, Harvard',
      location: 'New York, NY',
      price: 55,
      languages: ['English', 'French'],
      availability: 'Available tomorrow',
      verified: true
    },
    {
      id: 4,
      name: 'David Wilson',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      subjects: ['Biology', 'Chemistry', 'Medical Sciences'],
      experience: '12 years',
      education: 'MD, Johns Hopkins',
      location: 'Baltimore, MD',
      price: 75,
      languages: ['English'],
      availability: 'Available now',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 94,
      subjects: ['Economics', 'Business', 'Statistics'],
      experience: '7 years',
      education: 'MBA Finance, Wharton',
      location: 'Philadelphia, PA',
      price: 60,
      languages: ['English', 'German'],
      availability: 'Available today',
      verified: true
    },
    {
      id: 6,
      name: 'James Park',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 112,
      subjects: ['Languages', 'Korean', 'Japanese'],
      experience: '5 years',
      education: 'BA Linguistics, UCLA',
      location: 'Los Angeles, CA',
      price: 45,
      languages: ['English', 'Korean', 'Japanese'],
      availability: 'Available now',
      verified: true
    }
  ];

  return (
    <section id="tutors" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Tutors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            All our tutors are carefully vetted professionals with proven track records 
            and expertise in their respective fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900">{tutor.name}</h3>
                      {tutor.verified && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{tutor.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({tutor.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{tutor.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tutor.subjects.slice(0, 3).map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{tutor.education}</p>
                  <p className="text-sm text-gray-600">{tutor.experience} of experience</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-green-600">{tutor.availability}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">${tutor.price}</div>
                    <div className="text-sm text-gray-500">per hour</div>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                    Book Session
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Tutors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorProfiles;
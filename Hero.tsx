import React, { useState } from 'react';
import { Search, MapPin, Clock, Star, Users } from 'lucide-react';

const Hero = () => {
  const [requestType, setRequestType] = useState('find');
  const [subject, setSubject] = useState('');
  const [level, setLevel] = useState('');
  const [sessionType, setSessionType] = useState('');

  const subjects = [
    'Mathematics', 'Science', 'English', 'History', 'Languages', 'Programming',
    'Chemistry', 'Physics', 'Biology', 'Economics', 'Business', 'Art'
  ];

  const levels = [
    'Elementary (K-5)', 'Middle School (6-8)', 'High School (9-12)', 
    'College/University', 'Graduate Level', 'Professional'
  ];

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Your Perfect
            <span className="text-blue-600"> Tutor</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Connect with qualified tutors worldwide for personalized learning. 
            From elementary to college level, we make quality education accessible and affordable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5 text-blue-500" />
              <span>10,000+ Happy Students</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Clock className="h-5 w-5 text-green-500" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 space-y-4">
                <div className="flex gap-4">
                  <button
                    onClick={() => setRequestType('find')}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                      requestType === 'find'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Find a Tutor
                  </button>
                  <button
                    onClick={() => setRequestType('become')}
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
                      requestType === 'become'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Become a Tutor
                  </button>
                </div>

                {requestType === 'find' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Subject</option>
                        {subjects.map(sub => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                      <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Level</option>
                        {levels.map(lvl => (
                          <option key={lvl} value={lvl}>{lvl}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Session Type</label>
                      <select
                        value={sessionType}
                        onChange={(e) => setSessionType(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Type</option>
                        <option value="online">Online Sessions</option>
                        <option value="in-person">In-Person (Home)</option>
                        <option value="both">Both Options</option>
                      </select>
                    </div>
                  </div>
                )}

                {requestType === 'become' && (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Global Tutor Network</h3>
                    <p className="text-gray-600 mb-6">
                      Share your expertise and earn money by teaching students worldwide
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">$25-75</div>
                        <div className="text-sm text-gray-600">Per Hour</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">Flexible</div>
                        <div className="text-sm text-gray-600">Schedule</div>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">Global</div>
                        <div className="text-sm text-gray-600">Reach</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <button className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                <Search className="h-5 w-5" />
                <span>{requestType === 'find' ? 'Find Perfect Tutor' : 'Apply to Teach'}</span>
              </button>
              <button className="md:w-auto bg-orange-500 text-white py-4 px-8 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
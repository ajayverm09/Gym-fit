// src/components/ClassesSection.js
import { useState } from 'react';

const ClassesSection = () => {
  const [activeTab, setActiveTab] = useState('classes');

  const classes = [
    { 
      name: 'Yoga', 
      time: 'Mon, Wed, Fri', 
      duration: '45 min', 
      level: 'All Levels',
      image: 'https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg'
    },
    { 
      name: 'HIIT', 
      time: 'Tue, Thu', 
      duration: '30 min', 
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/8520383/pexels-photo-8520383.jpeg'
    },
    { 
      name: 'Pilates', 
      time: 'Mon, Wed', 
      duration: '60 min', 
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/868483/pexels-photo-868483.jpeg'
    },
    { 
      name: 'CrossFit', 
      time: 'Tue, Thu, Sat', 
      duration: '60 min', 
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/3076514/pexels-photo-3076514.jpeg'
    },
    { 
      name: 'Zumba', 
      time: 'Fri, Sat', 
      duration: '45 min', 
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/903171/pexels-photo-903171.jpeg'
    },
    { 
      name: 'Boxing', 
      time: 'Wed, Fri', 
      duration: '50 min', 
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/7991704/pexels-photo-7991704.jpeg'
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Fitness Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of classes to suit all fitness levels and interests. 
            From high-intensity workouts to relaxing yoga sessions, we have something for everyone.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab('classes')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'classes'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Classes
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'schedule'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Schedule
            </button>
          </div>
        </div>

        {activeTab === 'classes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((cls, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={cls.image} 
                    alt={cls.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{cls.name}</h3>
                  <div className="flex justify-between text-gray-600 mb-2">
                    <span>Time: {cls.time}</span>
                    <span>Duration: {cls.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">{cls.level}</span>
                    <button className="text-red-600 hover:text-red-800 font-medium">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saturday</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Yoga</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 AM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">HIIT</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Zumba</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5:30 PM</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassesSection;
import CountUp from 'react-countup';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Gym" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Fitness Academy</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Fitness Academy has been helping people achieve their fitness goals for over a decade. 
              Our mission is to provide a supportive environment where everyone can reach their full potential.
            </p>
            <p className="text-gray-600 mb-6">
              With state-of-the-art equipment, expert trainers, and a variety of classes, we offer everything you need 
              to transform your health and wellness.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  <CountUp end={5000} duration={2.5} suffix="+" />
                </div>
                <div className="text-gray-600">Happy Members</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  <CountUp end={15} duration={2.5} suffix="+" />
                </div>
                <div className="text-gray-600">Expert Trainers</div>
              </div>
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
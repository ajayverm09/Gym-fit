import CountUp from 'react-countup';

const HeroSection = () => {
  return (
    <section id="home" className="pb-20 md:pb-32 bg-gradient-to-r from-red-500 to-red-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Transform Your Body, Transform Your Life</h1>
            <p className="text-xl mb-8">Join the best fitness academy in town with state-of-the-art equipment and expert trainers.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-md text-lg font-semibold">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-md text-lg font-semibold">
                View Classes
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img className="rounded-lg shadow-xl" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Fitness" />
              <div className="absolute -bottom-6 -right-6 bg-white text-red-600 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">
                  <CountUp end={50} duration={2.5} suffix="+" />
                </div>
                <div className="text-sm">Fitness Classes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
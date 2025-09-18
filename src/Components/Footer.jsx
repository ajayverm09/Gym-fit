import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FA</span>
              </div>
              <span className="ml-2 text-xl font-bold">Fitness Academy</span>
            </div>
            <p className="text-gray-400">
              Transform your body and life with our expert trainers and state-of-the-art facilities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><RouterLink to="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</RouterLink></li>
              <li><RouterLink to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</RouterLink></li>
              <li><RouterLink to="/blogs" className="text-gray-400 hover:text-white transition-colors duration-200">Blogs</RouterLink></li>
              <li><RouterLink to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</RouterLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Classes</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Yoga</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">HIIT</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Pilates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">CrossFit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Zumba</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for fitness tips and special offers.
            </p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800" />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fitness Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
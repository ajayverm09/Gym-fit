import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const TrainersSection = ({ trainers }) => {
  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our certified trainers are here to guide you on your fitness journey
            with personalized plans and expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                 transition-all duration-500 group hover:-translate-y-2"
            >
              <div className="h-64 relative overflow-hidden">
                {/* Trainer Image */}
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover"
                />

                {/* Social Links Overlay */}
                <div
                  className="absolute inset-0 flex items-end justify-center 
                     bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                     backdrop-blur-sm opacity-0 group-hover:opacity-100 
                     transition-all duration-500 ease-in-out"
                >
                  <div className="flex space-x-4 mb-4">
                    {[
                      {
                        href: "#",
                        icon: <FaFacebookF className="h-5 w-5" />,
                        hover: "hover:bg-white hover:text-blue-600",
                      },
                      {
                        href: "#",
                        icon: <FaTwitter className="h-5 w-5" />,
                        hover: "hover:bg-white hover:text-sky-500",
                      },
                      {
                        href: "#",
                        icon: <FaInstagram className="h-5 w-5" />,
                        hover: "hover:bg-white hover:text-pink-600",
                      },
                      {
                        href: "#",
                        icon: <FaLinkedinIn className="h-5 w-5" />,
                        hover: "hover:bg-white hover:text-blue-700",
                      },
                    ].map((item, i) => (
                      <a
                        key={i}
                        href={item.href}
                        className={`h-10 w-10 rounded-full border-2 border-white 
                          flex items-center justify-center text-white 
                          transform hover:scale-110 transition-all 
                          duration-300 shadow-lg ${item.hover}`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trainer Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {trainer.name}
                </h3>
                <p className="text-red-600 font-medium mb-2">
                  {trainer.specialty}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {trainer.experience} of experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;

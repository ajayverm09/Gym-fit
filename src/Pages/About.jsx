import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Founder & CEO",
      bio: "Fitness enthusiast with over 15 years of experience in the industry.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mike Rodriguez",
      position: "Head Trainer",
      bio: "Certified personal trainer specializing in strength and conditioning.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Emma Wilson",
      position: "Nutrition Specialist",
      bio: "Expert in sports nutrition and dietary planning for optimal performance.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Kim",
      position: "Operations Manager",
      bio: "Ensures smooth day-to-day operations and member satisfaction.",
      image: "https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg"
    },
  ];

  const timelineEvents = [
    {
      year: "2010",
      title: "Foundation",
      description:
        "Fitness Academy was founded with a vision to transform lives through fitness.",
    },
    {
      year: "2012",
      title: "First Expansion",
      description:
        "Opened our second location to serve more members in the community.",
    },
    {
      year: "2015",
      title: "Award Recognition",
      description:
        'Received "Best Gym in the City" award for exceptional service.',
    },
    {
      year: "2018",
      title: "Digital Transformation",
      description:
        "Launched our mobile app for workout tracking and scheduling.",
    },
    {
      year: "2021",
      title: "10 Year Anniversary",
      description:
        "Celebrated a decade of transforming lives and building a healthier community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About Fitness Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We're more than just a gym - we're a community dedicated to
              helping you achieve your fitness goals and transform your life.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision Tabs */}
        <div className="mb-20">
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === "mission"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === "vision"
                    ? "bg-red-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Our Vision
              </button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            {activeTab === "mission" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 mb-4">
                  At Fitness Academy, our mission is to provide a supportive,
                  inclusive environment where everyone can achieve their fitness
                  goals regardless of their current fitness level or background.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that fitness is not just about physical strength,
                  but also about mental resilience, emotional well-being, and
                  building lasting connections within our community.
                </p>
                <p className="text-gray-600">
                  Through expert guidance, state-of-the-art facilities, and
                  personalized programs, we empower our members to transform
                  their bodies, minds, and lives.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Vision
                </h2>
                <p className="text-gray-600 mb-4">
                  Our vision is to become the leading fitness community in the
                  region, recognized for our innovative programs, exceptional
                  member experience, and commitment to holistic health and
                  wellness.
                </p>
                <p className="text-gray-600 mb-4">
                  We aim to expand our reach, bringing our unique approach to
                  fitness to more communities while maintaining the personalized
                  touch that sets us apart.
                </p>
                <p className="text-gray-600">
                  By 2030, we envision having transformed the lives of over
                  100,000 individuals through our comprehensive fitness programs
                  and supportive community.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section with CountUp Animation */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={15} duration={3} suffix="+" />
              </div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={5000} duration={3} suffix="+" separator="," />
              </div>
              <div className="text-lg">Happy Members</div>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={50} duration={3} suffix="+" />
              </div>
              <div className="text-lg">Expert Trainers</div>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl font-bold mb-2">
                <CountUp end={20} duration={3} suffix="+" />
              </div>
              <div className="text-lg">Fitness Programs</div>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals is here to support you on your
              fitness journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl 
                   transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="h-64 relative overflow-hidden">
                  {/* Team Member Image */}
                  <img 
                    src={member.image} 
                    alt={member.name}
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
                          icon: <FaFacebookF />,
                          hover: "hover:text-blue-600 hover:bg-white",
                        },
                        {
                          href: "#",
                          icon: <FaTwitter />,
                          hover: "hover:text-sky-500 hover:bg-white",
                        },
                        {
                          href: "#",
                          icon: <FaInstagram />,
                          hover: "hover:text-pink-600 hover:bg-white",
                        },
                        {
                          href: "#",
                          icon: <FaLinkedinIn />,
                          hover: "hover:text-blue-700 hover:bg-white",
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

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section - Our Journey */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our <span className="text-red-600">Journey</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From our humble beginnings to becoming a leading fitness academy,
              here's our story.
            </p>
          </div>

          <div className="relative w-full max-w-6xl mx-auto">
            {/* Vertical Gradient Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-red-600 via-red-500 to-red-700"></div>

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0; // zigzag pattern

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`mb-16 flex w-full items-center ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative w-[45%] bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-600 hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                      isLeft ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <span className="text-red-600 font-bold text-lg tracking-wide">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 text-gray-900 hover:text-red-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Dot with Glow */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg shadow-red-400 animate-pulse"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Fitness Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our equipment
                to our training programs.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                We foster a supportive community where everyone feels welcome
                and motivated.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Results</h3>
              <p className="text-gray-600">
                We're committed to helping our members achieve real, measurable
                results.
              </p>
            </div>
            {/* New Core Value 1 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with honesty and transparency in all our interactions
                with members and staff.
              </p>
            </div>
            {/* New Core Value 2 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously seek new and better ways to enhance our members'
                fitness experience.
              </p>
            </div>
            {/* New Core Value 3 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Passion</h3>
              <p className="text-gray-600">
                We bring energy and enthusiasm to everything we do, inspiring
                our members to reach their potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
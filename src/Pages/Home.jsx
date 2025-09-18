import HeroSection from '../Components/HomeHero';
import AboutSection from '../Components/HomeAbout';
import ClassesSection from '../Components/HomeClasses';
import TrainersSection from '../Components/HomeTeam';
import TestimonialsSection from '../Components/HomeTestimonial';
import ContactSection from '../Components/HomeContact';

const HomePage = () => {

  const trainers = [
    { 
      name: 'Sarah Johnson', 
      specialty: 'Yoga & Pilates', 
      experience: '8 years',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Mike Rodriguez', 
      specialty: 'HIIT & CrossFit', 
      experience: '10 years',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'Emma Wilson', 
      specialty: 'Zumba & Dance', 
      experience: '6 years',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      name: 'David Kim', 
      specialty: 'Boxing & Martial Arts', 
      experience: '12 years',
      image: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg'
    },
  ];

  const testimonials = [
    { 
      name: 'Alex T.', 
      text: 'This gym transformed my life! The trainers are amazing and the community is so supportive.',
      image: 'https://images.pexels.com/photos/31618281/pexels-photo-31618281.jpeg'
    },
    { 
      name: 'Jessica M.', 
      text: 'I lost 30 pounds in 4 months with their personalized program. Highly recommend!',
      image: 'https://images.pexels.com/photos/936075/pexels-photo-936075.jpeg'
    },
    { 
      name: 'Robert K.', 
      text: 'Best fitness facility in town. Clean, modern equipment and great classes.',
      image: 'https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg'
    },
    { 
      name: 'Emily S.', 
      text: 'The trainers here are top-notch. They really care about your progress and tailor workouts to your needs.',
      image: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg '
    },
    { 
      name: 'Michael T.', 
      text: 'I\'ve been a member for 3 years and it\'s the best decision I made for my health. Great community and facilities!',
      image: 'https://images.pexels.com/photos/29850900/pexels-photo-29850900.jpeg'
    },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <TrainersSection trainers={trainers} />
      <TestimonialsSection testimonials={testimonials} />
      <ContactSection />
    </>
  );
};

export default HomePage;
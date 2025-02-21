import { useEffect, useRef } from 'react';
import Carousel from './Carousel';

const projectsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    title: 'Global Infrastructure Project',
    content: 'Revolutionizing infrastructure development through innovative solutions.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    title: 'Smart City Integration',
    content: 'Implementing cutting-edge technology for modern urban development.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5',
    title: 'Sustainable Energy Solutions',
    content: 'Leading the transition to renewable energy sources.',
  },
];

const testimonialData = [
  {
    id: 1,
    title: 'Exceptional Service',
    content: 'Working with ServiceCo has transformed our operations. Their expertise and dedication are unmatched.',
    name: 'Sarah Johnson',
    role: 'CEO, Tech Innovations',
  },
  {
    id: 2,
    title: 'Outstanding Results',
    content: 'The teams attention to detail and commitment to excellence exceeded our expectations.',
    name: 'Michael Chen',
    role: 'Director, Global Solutions',
  },
  {
    id: 3,
    title: 'Reliable Partner',
    content: 'ServiceCo has been instrumental in our growth. Their solutions are innovative and effective.',
    name: 'Emma Thompson',
    role: 'Operations Manager, Future Corp',
  },
];

const servicesData = [
  {
    id: 1,
    title: 'Strategic Consulting',
    content: 'Expert guidance for business growth and optimization.',
  },
  {
    id: 2,
    title: 'Digital Transformation',
    content: 'Comprehensive solutions for modern business needs.',
  },
  {
    id: 3,
    title: 'Project Management',
    content: 'Efficient execution of complex projects.',
  },
];

const teamData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    title: 'John Davis',
    content: 'CEO & Founder',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    title: 'Lisa Wang',
    content: 'Chief Technology Officer',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    title: 'Robert Martinez',
    content: 'Head of Operations',
  },
];

export default function CarouselSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="py-20 bg-gray-50 opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Projects</h3>
              <Carousel items={projectsData} type="projects" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Client Testimonials</h3>
              <Carousel items={testimonialData} type="testimonials" />
            </div>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Services</h3>
              <Carousel items={servicesData} type="services" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Team</h3>
              <Carousel items={teamData} type="team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
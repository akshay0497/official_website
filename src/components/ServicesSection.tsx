import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {products as projects, Corporate_clients as Corporateclients} from '../constants/index';

const services = [
  {
    title: 'Custom Software Development',
    items: [
      'Web & mobile application development',
      'Business analysis',
      'Software architecture',
      'Maintenance',
    ],
  },
  {
    title: 'Web Application Development',
    items: [
      'Frontend & backend development',
      'Software architecture',
      'Maintenance of legacy systems',
    ],
  },
  {
    title: 'UI/UX Design',
    items: [
      'Mobile app design',
      'Business analysis',
      'Software architecture',
    ],
  },
  {
    title: 'Mobile App Development',
    items: [
      'iOS & Android app development',
      'Cross-platform development',
    ],
  },
  {
    title: 'Quality Assurance',
    items: [
      'Manual & automation testing',
      'Functional & security testing',
    ],
  },
  {
    title: 'Technical Support',
    items: [
      'Software maintenance',
      'Infrastructure support',
    ],
  },
  {
    title: 'Project Management',
    items: [
      'Project portfolio management',
      'Change management',
      'Project scoping & delivery',
    ],
  },
];


// const testimonials = [
//   {
//     id: 1,
//     content: "Multifacet's expertise in software development has transformed our business operations. Their team's dedication to quality is outstanding.",
//     author: "Rajesh Kumar",
//     position: "CTO, Tech Solutions Ltd",
//   },
//   {
//     id: 2,
//     content: "Working with Multifacet has been a game-changer for our organization. Their innovative solutions have helped us stay ahead of the competition.",
//     author: "Priya Sharma",
//     position: "CEO, Digital Innovations",
//   },
//   {
//     id: 3,
//     content: "The team's technical expertise and commitment to deadlines make them an ideal technology partner. Highly recommended!",
//     author: "Amit Patel",
//     position: "Director, Global Systems",
//   },
// ];

export default function ServicesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for your software needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                See more
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
          
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Projects</h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            // loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12"
            speed={1000} 
            freeMode={true} 
            grabCursor={true}  
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-400/35 rounded-xl overflow-hidden shadow-lg"
                >
                  <img
                    src={project.images}
                    alt={project.title}
                    className="w-full h-48 object-contain"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 truncate">{project.title}</h4>
                    <p className="text-gray-600 truncate italic">{project.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Corporate Client's</h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            // loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-12 bg-important bg-cover bg-center bg-no-repeat"
            speed={1000} 
            freeMode={true} 
            grabCursor={true}            
          >
            {Corporateclients.map((item) => (
              <SwiperSlide key={item.id} >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="p-8 rounded-xl text-center align-top"
                  //  className="bg-important bg-cover bg-no-repeat bg-center py-12"
                >
                   <img
                    src={item.logo}
                    alt='#'
                    className="w-full h-32 object-contain"
                  />
                  <p className="text-gray-600 my-6 font-bold">{item.title}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
}
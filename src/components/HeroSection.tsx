import { motion } from 'framer-motion';
import mapl from '../assets/website/mapl.svg'
export default function HeroSection() {
  return (
    <div className="relative py-24 bg-no-repeat text-gray-600 bg-contain bg-center " style={{ backgroundImage: `url(${mapl})` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 opacity-20" />
      <div className="container mx-auto px-4 relative ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" mx-auto text-center"
        >
          <h1 className="text-4xl text-gray-600 md:text-5xl font-bold mb-6">
            SOFTWARE DEVELOPMENT COMPANY WITH A UNIQUE APPROACH
          </h1>
          <div className="text-xl text-gray-600 md:text-2xl mb-8">
            25+ Years of Excellence in Software Development
          </div>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            With a legacy spanning nearly two decades, we have partnered with <span className="font-semibold">200+ clients</span> to transform their ideas into successful, innovative products. We have delivered impactful solutions tailored to diverse industries.
          </p>
           
        </motion.div>
      </div>
    </div>
  );
}
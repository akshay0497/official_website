import { motion } from 'framer-motion';
import { technologies } from "../constants";
import { BallCanvas } from '../canvas';


export default function TechStackSection() {
  return (
    <div className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600">Powered by cutting-edge technologies</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-11 gap-8">
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
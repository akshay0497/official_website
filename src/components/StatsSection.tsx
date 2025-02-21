import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '499.9+', label: 'Developed custom solutions', icon: '🚀' },
  { value: '110+', label: 'Working government projects', icon: '🏛️' },
  { value: '70%', label: 'Senior engineers', icon: '👨‍💻' },
  { value: '99.9%', label: 'Client satisfaction rate', icon: '⭐' },
  { value: '10L+', label: 'Users in India using our developed software', icon: '🇮🇳' },
  { value: '5.0', label: 'Client ratings', icon: '🏆' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

function Counter({ target, color }: { target: string; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract numeric value and symbol from target
  const numericValue = parseFloat(target.replace(/[^0-9.-]+/g, ''));
  const symbol = target.replace(/[0-9.-]+/g, '');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest * 10) / 10);
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: [0.32, 0.72, 0, 1],
      });
      return controls.stop;
    }
  }, [count, numericValue, isInView]);

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center"
      style={{ color }}
    >
      <motion.span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tabular-nums">
        {rounded}
      </motion.span>
      <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
        {symbol}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const gradients = [
    'from-blue-500 to-cyan-400',
    'from-purple-500 to-pink-400',
    'from-green-500 to-emerald-400',
    'from-yellow-500 to-orange-400',
    'from-indigo-500 to-blue-400',
    'from-pink-500 to-rose-400',
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className={`relative overflow-hidden bg-white rounded-2xl shadow-lg`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-10`} />
              
              {/* Content */}
              <div className="relative p-4 sm:p-6 md:p-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 flex justify-center"
                >
                  {stat.icon}
                </motion.div>
                
                <Counter 
                  target={stat.value} 
                  color={`var(--gradient-${index + 1})`}
                />
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 font-medium"
                >
                  {stat.label}
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br opacity-10 transform rotate-45 translate-x-8 sm:translate-x-10 -translate-y-8 sm:-translate-y-10" />
              <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr opacity-10 transform -rotate-45 -translate-x-8 sm:-translate-x-10 translate-y-8 sm:translate-y-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CSS Variables for gradients */}
      <style>{`
        :root {
          --gradient-1: #3B82F6;
          --gradient-2: #8B5CF6;
          --gradient-3: #10B981;
          --gradient-4: #F59E0B;
          --gradient-5: #6366F1;
          --gradient-6: #EC4899;
        }
      `}</style>
    </div>
  );
}
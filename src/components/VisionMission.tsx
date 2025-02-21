import { motion } from 'framer-motion';

export default function VisionMission() {
  return (
    <div
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-blue-400/35" />
      <div className="relative container mx-auto px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Our Vision & Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                Continuous improvement of operational efficiency and effectiveness. Helping organizations become cost-effective in a cost-sensitive market, making each one of us globally competitive.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                Better leverage through innovative business solutions. Continuous improvement of operational efficiency and effectiveness.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
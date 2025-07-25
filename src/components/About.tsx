import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Coffee, Zap, Award, Users,Palette,Image } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '4+', label: 'Years Experience', icon: Zap },
    { number: '250+', label: 'Projects Completed', icon: Code2 },
    { number: '85%', label: 'Client Satisfaction', icon: Heart },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee },
  ];

  const highlights = [
  {
    icon: Palette,
    title: 'Creative Mastery',
    description: 'Cutting-edge expertise in visual storytelling, branding, and digital design.'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'Seamless teamwork with clients and designers to bring creative visions to life.'
  },
  {
    icon: Image,
    title: 'Diverse Portfolio',
    description: 'Experience delivering impactful graphics for web, print, and multimedia projects.'
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Cloud Graphics
         </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                Transforming Ideas into Stunning Visuals with Cloud Graphics
              </h3>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                          Cloud Graphics is a creative design and printing studio committed to producing stunning visuals and high-quality print materials using the latest cloud technologies.  
                </p> 
                <p>
                    We work closely with clients to realize their branding and marketing goals efficiently and creatively.
                 </p>
                
          
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Let's Work Together
                </button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                      <stat.icon size={28} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white">
                    <highlight.icon size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12"
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                My Philosophy
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
               We don’t just create graphics; we build connections through purposeful design, innovation, and a commitment to excellence 
               </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
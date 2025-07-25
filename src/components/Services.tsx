import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layers, Printer, Image, Package, IdCard, Tag, Shirt } from 'lucide-react';


const Services: React.FC = () => {
  const designCategories = [
    {
      title: 'Brand Identity',
      icon: Layers,
      color: 'from-blue-500 to-green-500',
      services: [
        { name: 'Logo Design', level: 95 },
        { name: 'Stationery Design', level: 90 },
        { name: 'Social Media Branding', level: 85 }
      ]
    },
    {
      title: 'Logo Design Showcase',
      icon: PenTool,
      color: 'from-yellow-400 to-pink-500',
      services: [
        { name: 'Custom Logo', level: 95 },
        { name: 'Monogram & Symbol', level: 90 },
        { name: 'Mockups', level: 85 }
      ]
    },
    {
      title: 'Marketing & Print Design',
      icon: Printer,
      color: 'from-rose-500 to-orange-500',
      services: [
        { name: 'Flyers & Posters', level: 90 },
        { name: 'Brochures', level: 85 },
        { name: 'Print Ads', level: 88 }
      ]
    },
    {
      title: 'Social Media Graphics',
      icon: Image,
      color: 'from-indigo-500 to-purple-600',
      services: [
        { name: 'Instagram Posts', level: 95 },
        { name: 'Facebook Covers', level: 90 },
        { name: 'Ad Creatives', level: 88 }
      ]
    },
    {
      title: 'Packaging Design',
      icon: Package,
      color: 'from-lime-500 to-amber-600',
      services: [
        { name: 'Box Design', level: 90 },
        { name: 'Bottle Labels', level: 85 },
        { name: 'Die-line Mockups', level: 80 }
      ]
    },
    {
      title: 'Business Cards',
      icon: IdCard,
      color: 'from-fuchsia-500 to-violet-600',
      services: [
        { name: 'Classic Layouts', level: 90 },
        { name: 'QR Integrated', level: 85 },
        { name: 'Luxury Finishes', level: 88 }
      ]
    },
    {
      title: 'Product Label / Sticker',
      icon: Tag,
      color: 'from-teal-500 to-emerald-500',
      services: [
        { name: 'Custom Stickers', level: 92 },
        { name: 'Waterproof Labels', level: 88 },
        { name: 'Roll Packaging', level: 85 }
      ]
    },
    {
      title: 'Stationary & Apparel',
      icon: Shirt,
      color: 'from-cyan-600 to-blue-700',
      services: [
        { name: 'Letterheads', level: 90 },
        { name: 'T-Shirt Prints', level: 85 },
        { name: 'Notepads', level: 82 }
      ]
    }
  ];



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Creative solutions tailored for your brand — from concept to execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designCategories.map((category, i) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="text-center space-y-4">

  {/* Sub Services List */}
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 inline-block text-left">
    {category.services.map((service) => (
      <li key={service.name} className="font-medium">
        {service.name}
      </li>
    ))}
  </ul>
</div>
              </motion.div>
            ))}
          </div>

          {/* Design Tools */}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

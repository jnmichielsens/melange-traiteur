'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { homePage } from '../constants/constants';

const menuCategories = [
  {
    title: 'Cocktail Reception',
    items: [
      {
        name: 'Truffle Arancini',
        description: 'Crispy risotto balls with black truffle',
      },
      {
        name: 'Tuna Tartare',
        description: 'Fresh tuna with avocado on rice crackers',
      },
      {
        name: 'Wild Mushroom Vol-au-vent',
        description: 'Light puff pastry with creamy mushrooms',
      },
    ],
  },
  {
    title: 'Main Courses',
    items: [
      {
        name: 'Beef Wellington',
        description: 'Premium beef wrapped in mushroom duxelles and pastry',
      },
      {
        name: 'Sea Bass en Papillote',
        description: 'Fresh herbs, seasonal vegetables, white wine',
      },
      {
        name: 'Risotto aux Truffes',
        description: 'Carnaroli rice, black truffle, aged parmesan',
      },
    ],
  },
  {
    title: 'Desserts',
    items: [
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean custard with caramelized sugar',
      },
      {
        name: 'Chocolate Soufflé',
        description: 'Warm chocolate soufflé with vanilla ice cream',
      },
      {
        name: 'Fruit Pavlova',
        description: 'Light meringue with fresh berries and cream',
      },
    ],
  },
];

export default function Menu() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={homePage.Menu}
      className='bg-white px-6 py-24 md:px-12 lg:px-24'
      ref={ref}
    >
      <div className='mx-auto max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className='section-title text-center'>Sample Menu</h2>
          <p className='mb-16 text-center text-lg'>
            Our menus are customizable to suit your preferences and dietary
            requirements
          </p>
        </motion.div>

        <div className='grid gap-12 md:grid-cols-3'>
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className='space-y-6'
            >
              <h3 className='border-b border-gray-200 pb-4 text-2xl font-light tracking-wide'>
                {category.title}
              </h3>
              <div className='space-y-6'>
                {category.items.map((item) => (
                  <div key={item.name}>
                    <h4 className='mb-1 text-lg font-medium'>{item.name}</h4>
                    <p className='text-gray-600'>{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

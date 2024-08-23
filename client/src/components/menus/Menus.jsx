// eslint-disable-next-line no-unused-vars
import React from 'react';
// import fruit1 from '../../assets/fruits/apple.png'
// import fruit2 from '../../assets/fruits/cherry.png';
// import fruit3 from '../../assets/fruits/orange.png';
// import fruit4 from '../../assets/fruits/avocado.png';
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';

const MenusData = [
  {
    id: 1,
    title: 'Fresh Apples',
    link: '/',
    price: '$2:00',
    img: '🍎',
    delay: 0.3,
  },
  {
    id: 2,
    title: 'Fresh Oranges',
    link: '/',
    price: '$5:00',
    img: '🍊',
    delay: 0.6,
  },
  {
    id: 3,
    title: 'Fresh Avocado',
    link: '/',
    price: '$3:00',
    img: '🥑',
    delay: 0.9,
  },
  {
    id: 4,
    title: 'Fresh Cherries',
    link: '/',
    price: '$5:00',
    img: '🍒',
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section>
      <div className='container pt-12 pb-20'>
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className='pb-10 text-2xl font-bold text-left uppercase'
        >
          Our Menu
        </motion.h1>
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-4'>
          {MenusData.map((menu, index) => {
            return (
              <motion.div
                variants={FadeLeft(menu.delay)}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{scale:1.1}}
                key={index}
                className='px-4 py-2 bg-white rounded-3xl
                 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-y-44'>
                <div className='mb-4 text-5xl transform-translate-y-6'>
                  {menu.img}</div>
               
                <div>
                  <h1 className='text-lg font-semibold'>{menu.title}</h1>
                  <p className='text-lg font-semibold text-secondary'>
                    {menu.price}
                  </p>
                </div>
              </motion.div>
               
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menus;

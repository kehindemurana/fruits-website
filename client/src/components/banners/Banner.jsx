// eslint-disable-next-line no-unused-vars
import React from 'react'
import BannerImg from '../../assets/fruits-splash.png'
import {motion} from 'framer-motion'
import {FadeLeft,FadeUp} from '../../utility/animation'

const Banner = () => {

    return (
        <section className='bg-secondary/10'>
        <div className='container grid grid-cols-1 space-y-2 md:grid-cols-2 md:space-y-0 py-14'>
                {/* Banner Image*/}
                <div className='flex flex-col justify-center'>
                    <motion.img
                      initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                        transition={{type: "spring", stiffness:100, delay:0.2 }}
                         viewPort={{once:true}}
                     src={BannerImg } alt='' className='w-[300px] md:max-w-[400px] h-full object-cover ' />
                </div>
                {/*Brand Info */}
                <div className='flex flex-col jus'>
                <div className='space-y-4 text-center md:text-left lg:max-w-[400px]'>
                <motion.h1
                variants={FadeUp(0.5)}
              initial='hidden'
              animate='visible'
                className='text-3xl lg:text-6xl '>Brand Info</motion.h1>
                        <motion.p
                         variants={FadeUp(1.5)}
                        initial='hidden'
                        animate='visible'
                        >Lorem Ipsum dolor amet consectur.....</motion.p>
                <motion.p
                        variants={FadeUp(1.5)}
                        initial='hidden'
                        animate='visible'
                
                >Lorem Ipsum dolor amet consectur.....</motion.p>
                      {/*button section */}
            <motion.div
              variants={FadeUp(1.5)}
              initial='hidden'
              animate='visible'
              className='flex justify-center md:justify-start'
            >
              <button className='flex items-center gap-2 primary-btn'>
                <span>

                </span>
                Order now
              </button>
            </motion.div>
                </div>
                </div>
        </div>
        </section>
    )
}
export default Banner;
import {motion } from 'framer-motion'
import {FaLeaf, FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'
const Footer = () => {
    return (
      <footer className='py-12 mt-12 text-white bg-primary/10'>
            <motion.div
                initial={{opacity:0}}
                whileInView={{ opacity: 1 }}
                transition={{ duration:1, delay:0.2 }}
        
                className='container flex items-center justify-between'>
          {/*Logo section */}
          <div className='flex items-center gap-2 text-2xl font-bold uppercase'>
            <p className='text-primary'>Fruits</p>
            <p className='text-secondary'>Store</p>
            <FaLeaf className='text-green-600' />
          </div>

                {/*social Icons section */}
                <div className='flex items-center gap-4 mt-6 text-3xl text-gray-700'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebook/>
                </div>
        </motion.div>
      </footer>
    );


}
export default Footer;
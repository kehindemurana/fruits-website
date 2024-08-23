import Navbar from './components/navbar/Navbar'
import './App.css'
import ResponsiveMenu from './components/navbar/ResponsiveMenu'
import Hero from './components/hero/Hero'
import Menus from './components/menus/Menus'
import Banner from   './components/banners/Banner'
import Banner2 from './components/banners/Banner2'
import Banner3 from './components/banners/Banner3'
import Footer from './components/footer/Footer'
function App() {
  

  return (
    <main className='overflow-x-hidden'>
    <Navbar/>
      <ResponsiveMenu />
      <Hero />
      <Menus/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </main>
  )
}

export default App

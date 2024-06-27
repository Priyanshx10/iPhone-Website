import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HighLight from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

import * as Sentry from '@sentry/react';



const App = () => {
  return (
   <main >
      <NavBar />
      <Hero/>
      <HighLight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />

   </main>
  )
}

export default Sentry.withProfiler(App) 

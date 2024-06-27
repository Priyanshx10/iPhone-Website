import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HighLight from './components/Highlights';
import Model from './components/Model';


const App = () => {
  return (
   <main className="bg-black" >
      <NavBar />
      <Hero/>
      <HighLight />
      <Model />

   </main>
  )
}

export default App

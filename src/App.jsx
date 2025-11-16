import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;

import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="px-40">
        <Header />
        <About />
        <Skills />
        <Projects />
      </div>
      <Contact />
    </main>
  )
}

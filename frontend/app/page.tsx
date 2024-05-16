import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from '../components/home/about';
import Stats from '../components/home/stats';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Stats/>
    </div>
  );
}
import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from '../components/home/about';
import Statistics from '../components/home/statistics';
import Partners from '../components/home/partners';
import Faq from '../components/home/faq';
import Footer from '../components/home/footer';



export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero"> <Hero /> </div>
      <div id="about"> <About /> </div>
      <div id="statistics"> <Statistics /> </div>
      <div id="partners"> <Partners /> </div>
      <div id="faq"> <Faq /> </div>
      <Footer />
    </div>
  );
}

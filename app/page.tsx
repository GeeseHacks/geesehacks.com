import Navbar from "@/components/home/navbar";
import Hero from "@/components/home/hero";
import About from '../components/home/about';
import Stats from '../components/home/stats';
import JoinUs from '../components/home/joinUs';
import Partners from '../components/home/partners';
import Faq from '../components/home/faq';
import Team from '../components/home/team';
import Sponsors from '../components/home/sponsors';
import Footer from '../components/home/footer';
import "./globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="hero"> <Hero /> </div>
      <div id="about"> <About /> </div>
      <div id="statistics"> <Stats /> </div>
      <div id="joinUs"> <JoinUs /> </div>
      <div id="sponsors"> <Sponsors /> </div>
      <div id="partners"> <Partners /> </div>
      {/* <div id="team"> <Team /> </div> */}
      <div id="faq"> <Faq /> </div>
      <Footer />
    </div>
  );
}


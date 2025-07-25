"use client";
import Container from "../components/section/container/container";
import Hero from "../components/section/hero/hero";
import LogoMarquee from "../components/section/logos/logomarquee";
import About from "../components/section/about/about";
import Testimonials from "../components/section/testimonials/testimonials";
import Faq from "../components/section/faq/faq";
import Cta from "../components/ui/cta";
import Footer from "../components/section/footer/footer";
import Usecases from "../components/section/usecases/usecases";
import Process from "../components/section/process/process";
import Navbar from "../components/section/navbar/navbar";
import Chatbot from "../components/ui/chatbot";
import ReactLenis from "lenis/react";
import { motion } from "framer-motion";

function Home() {
  return (
    <ReactLenis root>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Navbar />
        <Container>
          <Hero />
          <LogoMarquee />
          <Process />
          <Usecases />
          <Testimonials />
          <About />
          <Faq />
          <Cta />
          <Chatbot />
        </Container>
        <Footer />
      </motion.div>
    </ReactLenis>
  );
}

export default Home;

// .framer-HB4nF .framer-1ibt9zd {
//     background: conic-gradient(from 0deg at 50% 50%, red, #ff001a 54.89161972682219deg, #00a6ff 106.69924423399361deg, #4797ff 162deg, #04f 252.00000000000003deg, #ff8000, red 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

// .framer-HB4nF .framer-1hr18x0, .framer-HB4nF .framer-1l6bpng, .framer-HB4nF .framer-1i6knq0, .framer-HB4nF .framer-6ahcye, .framer-HB4nF .framer-119s1am, .framer-HB4nF .framer-1m996ui, .framer-HB4nF .framer-wvjiby, .framer-HB4nF .framer-onufeu, .framer-HB4nF .framer-1x9m7l9, .framer-HB4nF .framer-ctoyg8, .framer-HB4nF .framer-1rgr5ip, .framer-HB4nF .framer-tcyzkn {
//     background: conic-gradient(from 0deg at 50% 50%, #ffd9ad, #139ce5, #fd864d 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

// .framer-HB4nF .framer-1hr18x0, .framer-HB4nF .framer-1l6bpng, .framer-HB4nF .framer-1i6knq0, .framer-HB4nF .framer-6ahcye, .framer-HB4nF .framer-119s1am, .framer-HB4nF .framer-1m996ui, .framer-HB4nF .framer-wvjiby, .framer-HB4nF .framer-onufeu, .framer-HB4nF .framer-1x9m7l9, .framer-HB4nF .framer-ctoyg8, .framer-HB4nF .framer-1rgr5ip, .framer-HB4nF .framer-tcyzkn {
//     background: conic-gradient(from 0deg at 50% 50%, #ffd9ad, #139ce5, #fd864d 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

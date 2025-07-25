import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import TestimonialCard from "../components/ui/testimonialcard";
import usecaseDataById from "../components/section/usecases/usecaseDatabyId";
import neutrinologo from "/neutrinologo.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "../components/section/footer/footer";
import { CheckCircle } from "lucide-react";
import ProcessCard from "../components/ui/processcard";

gsap.registerPlugin(ScrollTrigger);

const UsecaseDetails = () => {
  const { id } = useParams();
  const usecase = usecaseDataById[id];

  const headerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animation for header
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      // GSAP scroll animations
      sectionsRef.current.forEach((el, index) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 40,
          duration: 0.6,
          ease: "power2.out",
          delay: index * 0.05,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  if (!usecase) {
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        Use Case not found.
      </div>
    );
  }

  return (
    <>
      {/* Top bar */}
      <div className="border-b border-gray-700">
        <div className="max-w-[1140px] px-2.5 flex items-center justify-between mx-auto py-3">
          <a href="/" className="w-36 h-4 flex items-center ml-2">
            <img
              src={neutrinologo}
              alt="Neutrino Logo"
              className="w-full h-auto block"
            />
          </a>
          <h4>{usecase.title}</h4>
          <Link to="/">
            <Button className="btn primary-btn">Back to home</Button>
          </Link>
        </div>
      </div>

      {/* Animated Content Wrapper */}
      <motion.div
        className="usecase-header max-w-[1140px] px-[10px] mx-auto pt-10 pb-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="mb-10" ref={headerRef}>
          <h1 className="mb-4">{usecase.title}</h1>
          <p>{usecase.description}</p>
        </div>

        {/* Image */}
        <div className="mb-18" ref={(el) => (sectionsRef.current[0] = el)}>
          <img
            src={`/${usecase.imageUrl}`}
            alt={usecase.title}
            className="w-full max-h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Problem & Solution */}
        <div
          className="grid grid-cols-2 gap-6 mb-18 relative text-center w-[1140px] px-[10px]"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="pr-6">
            <h2 className="text-center mb-2">
              The <span className="italic">Problem</span>
            </h2>
            <p>{usecase.problem}</p>
          </div>
          <div className="pl-6">
            <h2 className="text-center mb-2">
              Our <span className="italic">Solution</span>
            </h2>
            <p>{usecase.solution}</p>
          </div>
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-300" />
        </div>

        {/* Benefits */}
        <div className="mb-18" ref={(el) => (sectionsRef.current[2] = el)}>
          <h2 className="text-center text-2xl mb-8">Key Benefits</h2>
          <div className="grid grid-cols-3 gap-6">
            {usecase.benefits.map((benefit, index) => (
              <ProcessCard
                key={index}
                icon={CheckCircle}
                title={benefit}
                description=""
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-10" ref={(el) => (sectionsRef.current[3] = el)}>
          <h2 className="mb-10">Testimonials</h2>
          <div className="grid grid-cols-3 gap-6">
            {usecase.testimonials.map((t, i) => (
              <TestimonialCard
                key={i}
                text={t.feedback}
                name={t.name}
                role={t.role}
                avatar={t.avatar}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default UsecaseDetails;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Label from "../../ui/label";
import TestimonialCard from "../../ui/testimonialcard";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Neutrino AI revolutionized our workflow. We went from weeks of manual experimentation to generating deployable models in minutes.",
    name: "Jonathan Day",
    role: "Co-founder of Monday",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Our team now prototypes AI solutions 5x faster thanks to Neutrino. It’s become our go-to tool for every new project.",
    name: "Melissa Reid",
    role: "Founder of Tuesday",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Neutrino AI Studio is a game-changer. Its intuitive interface and instant model deployment saved us months of dev time.",
    name: "Chris Wright",
    role: "CTO of Wednesday",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    text: "Before Neutrino, we struggled to turn ideas into real AI tools. Now, we launch new features weekly—fully AI-powered.",
    name: "Terri Williams",
    role: "Founder of Thursday",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Neutrino helped us scale quickly without hiring a massive data science team. It’s automation meets innovation.",
    name: "Belinda Meyers",
    role: "COO of Friday",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    text: "Thanks to Neutrino AI, we streamlined R&D and cut our model delivery time by 80%. It’s the smartest decision we made.",
    name: "Sarah Yanna",
    role: "Director of Saturday",
    avatar: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    text: "Neutrino AI helped us go from prototype to production in days, not months. The speed and simplicity it brings to AI development is unmatched.",
    name: "Alex Monroe",
    role: "CTO of QuantumEdge",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "As a product team, we were amazed by how Neutrino AI streamlined our AI workflows. It's like having a full ML engineering team on demand.",
    name: "Priya Shah",
    role: "Head of Product at SynthWave",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    text: "We integrated Neutrino AI Studio into our stack and saw immediate gains in experimentation speed and model quality. It's a no-brainer for modern teams.",
    name: "Leonard Tan",
    role: "AI Lead at DataForge",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
  },
];

const Testimonials = () => {
  const headingRef = useRef(null);
  const cardsWrapperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      }
    );

    const cards = gsap.utils.toArray(".testimonial-animate");

    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      },
      once: true,
      start: "top 85%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="testimonials" className="py-11">
      <div className="flex flex-col items-center justify-center gap-[20px] mb-10">
        <Label name="Testimonials" />
        <h2 ref={headingRef} className="max-w-[680px] text-center">
          There's a reason <span className="italic">people</span> are{" "}
          <span className="italic">raving</span> about us.
        </h2>
      </div>

      <div
        ref={cardsWrapperRef}
        className="max-w-[1140px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] place-items-center sm:place-items-stretch"
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-animate h-full w-full max-w-[360px]"
          >
            <TestimonialCard
              text={t.text}
              name={t.name}
              role={t.role}
              avatar={t.avatar}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Funnel, Settings, TrendingUp } from "lucide-react";
import ProcessCard from "../../ui/processcard";
import Label from "../../ui/label";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Funnel,
    title: "Data Funnel Audit",
    description:
      "We begin by auditing your data sources and pipelines to identify gaps, redundancies, and performance blockers.",
  },
  {
    icon: Settings,
    title: "AI Workflow Setup",
    description:
      "Next, we integrate automation and intelligent workflows tailored to your business objectives and data strategy.",
  },
  {
    icon: TrendingUp,
    title: "Insight-Driven Growth",
    description:
      "We continuously fine-tune your AI systems to maximize performance, cut costs, and uncover actionable insights.",
  },
];

const Process = () => {
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!headingRef.current || !subRef.current || !cardsRef.current) return;

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

    gsap.fromTo(
      subRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      id="process"
      className="py-11 flex flex-col items-center justify-center gap-[20px]"
    >
      <Label name="Process" />
      <div className="flex flex-col gap-4">
        <h2
          ref={headingRef}
          className="max-w-[680px] text-center opacity-0 translate-y-10"
        >
          Our simple 3-step process to <span className="italic">skyrocket</span>{" "}
          your business.
        </h2>
        <p
          ref={subRef}
          className="max-w-[90%] sm:max-w-[720px] text-center opacity-0 translate-y-10 text-gray-600 mx-auto"
        >
          From intelligent automation to AI-driven insights, Neutrino AI covers
          every aspect of business transformation—efficient, smart, and
          scalable.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[20px] mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="opacity-0 translate-y-10"
          >
            <ProcessCard {...step} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

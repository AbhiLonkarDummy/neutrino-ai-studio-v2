"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Label from "../../ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqItems = [
  {
    title: "Is Neutrino AI Studio accessible to users with disabilities?",
    content:
      "Absolutely. Neutrino AI Studio adheres to industry-standard accessibility guidelines such as WCAG 2.1 and WAI-ARIA. Our platform supports screen readers, keyboard navigation, and high-contrast themes to ensure users of all abilities can access and benefit from our tools with ease.",
  },
  {
    title:
      "What kind of customization does Neutrino AI Studio offer for AI outputs?",
    content:
      "Neutrino AI Studio gives users complete flexibility to fine-tune the behavior and tone of AI outputs. You can customize model parameters, training data, output formatting, and even deploy post-processing logic. This allows businesses to tailor AI responses to their brand’s voice or specific industry standards.",
  },
  {
    title: "Can I integrate Neutrino AI Studio into my existing tech stack?",
    content:
      "Yes, Neutrino AI Studio provides robust APIs and SDKs that make integration seamless with most modern tech stacks. Whether you're working with Python, JavaScript, or cloud-based tools, you can embed AI capabilities directly into your workflows, products, or internal systems without starting from scratch.",
  },
  {
    title: "Is there a learning curve for non-technical users?",
    content:
      "Not at all. Neutrino AI Studio is built with a no-code interface that enables non-technical users to build, train, and deploy AI models using intuitive drag-and-drop tools. We also offer interactive tutorials, templates, and guided wizards to help you get started quickly—even if you're new to AI.",
  },
  {
    title: "Does Neutrino AI Studio support real-time AI deployment?",
    content:
      "Yes, our platform supports real-time inference and deployment, allowing you to integrate AI models into live applications with low latency. Whether it's powering chatbots, recommendation engines, or dynamic analytics, Neutrino ensures reliable and fast performance at scale.",
  },
  {
    title:
      "Is there an API available for developers to programmatically access features?",
    content:
      "Definitely. Developers can use our well-documented RESTful APIs to access all major features of Neutrino AI Studio, including dataset management, model training, evaluation, and deployment. We also provide detailed SDKs and code samples to speed up development and integration.",
  },
];

const Faq = () => {
  const headingRef = useRef(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      });

      // Animate each FAQ item
      faqRefs.current.forEach((el, index) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.05,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" className="py-11">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-[20px] mb-10">
        <Label name="Frequently asked questions" />
        <h2 ref={headingRef} className="max-w-[680px] text-center">
          Got questions? We’ve got <span className="italic">clarity</span> for
          every <span className="italic">curiosity</span>.
        </h2>
      </div>

      {/* Accordion Items */}
      <div className="max-w-[840px] mx-auto flex flex-col gap-[20px]">
        {faqItems.map(({ title, content }, index) => (
          <div
            key={index}
            ref={(el) => (faqRefs.current[index] = el)}
            className="bg-[var(--accordian-card-background)] border border-white/30 rounded-md px-4 py-2"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border-0">
                <AccordionTrigger className="accordian-title text-left">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="accordian-answer text-left pb-4 text-gray-400">
                  {content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Label from "../../ui/label";
import { Button } from "@/components/ui/button";
import Marquee from "react-fast-marquee";
import TeamCard from "../../ui/teamcard";
import teamMembers from "./teamData";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });

      tl.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          paragraphRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          buttonWrapperRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3"
        );
    });

    return () => {
      ctx.revert(); // clean up animations
    };
  }, []);

  return (
    <section
      id="about"
      className="py-11 flex flex-col items-center justify-center gap-[20px]"
    >
      <Label name="About" />
      <div className="flex flex-col gap-10">
        <div className="about-heading text-center px-4">
          <div className="flex flex-col gap-4 mb-8">
            <h2 ref={headingRef}>
              Meet the <span className="italic">incredible</span> team.
            </h2>
            <p ref={paragraphRef} className="max-w-[720px] mx-auto">
              Being the best isn’t just a claim we make—it’s a standard our team
              consistently upholds through every project, partnership, and
              solution we deliver.
            </p>
          </div>
          <div ref={buttonWrapperRef}>
            <Button className="primary-btn btn">
              Book a 15 min call <ArrowRight className="ml-0.5 w-4 h-4" />
            </Button>
          </div>
        </div>

        <Marquee
          speed={60}
          pauseOnHover={false}
          loop={0}
          className="py-4 image-marquee"
        >
          <div className="flex gap-6">
            {teamMembers.concat(teamMembers).map((member, index, arr) => (
              <div
                key={index}
                className={`shrink-0 ${index === arr.length - 1 ? "mr-6" : ""}`}
              >
                <TeamCard {...member} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default About;

"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import AvatarStack from "../../ui/avatarstack";
import { motion } from "framer-motion";
function Hero() {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const btn1WrapperRef = useRef(null);
  const btn2WrapperRef = useRef(null);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (
      !titleRef.current ||
      !paraRef.current ||
      !btn1WrapperRef.current ||
      !btn2WrapperRef.current ||
      !avatarRef.current
    )
      return;

    // Set initial styles with a deeper Y offset
    gsap.set(
      [
        titleRef.current,
        paraRef.current,
        btn1WrapperRef.current,
        btn2WrapperRef.current,
        avatarRef.current,
      ],
      { opacity: 0, y: 60, scale: 0.98 }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.4,
    })
      .to(
        paraRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
        },
        "-=0.9"
      )
      .to(
        [btn1WrapperRef.current, btn2WrapperRef.current],
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.7"
      )
      .to(
        avatarRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.5)",
        },
        "-=0.6"
      );
  }, []);

  return (
    <section
      id="home"
      className="pt-20 pb-18 mb-20 flex flex-col items-center justify-center gap-[24px] relative overflow-hidden"
    >
      {/* Heading */}
      <h1
        ref={titleRef}
        className="max-w-[720px] text-center text-4xl font-bold relative z-10"
      >
        Craft <span className="italic">Smarter</span> Solutions with Neutrino{" "}
        <span className="italic">AI.</span>
      </h1>

      {/* Paragraph */}
      <p
        ref={paraRef}
        className="max-w-[680px] text-center text-lg text-gray-600 relative z-10"
      >
        Neutrino AI Studio transforms your boldest ideas into intelligent
        systems — instantly, creatively, and seamlessly, empowering you to build
        the future of AI with ease.
      </p>

      {/* CTA buttons */}
      <div className="btn-container flex gap-4 items-center relative z-10">
        <span ref={btn1WrapperRef}>
          <Button className="primary-btn btn">Book a Demo</Button>
        </span>
        <span ref={btn2WrapperRef}>
          <Button className="secondary-btn btn">Get Details</Button>
        </span>
      </div>

      {/* AvatarStack with gradient glow below */}
      <div
        ref={avatarRef}
        className="relative mt-8 flex items-center justify-center"
      >
        {/* Glowing conic gradient behind avatars */}
        <motion.div
          initial={{ opacity: 0.6, scale: 0.9 }}
          animate={{ opacity: 0.75, scale: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px] z-0 opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, #ff001a, #00a6ff 106.69deg, #4797ff 162deg, #04f 252deg, #ff8000, #ff001a 360deg)",
          }}
        />
        <div className="relative z-10">
          <AvatarStack />
        </div>
      </div>
    </section>
  );
}

export default Hero;

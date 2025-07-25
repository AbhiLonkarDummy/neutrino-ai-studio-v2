"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Label from "../../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCaseData from "./usescasesData";
import UseCaseCard from "../../ui/usecasecard";

gsap.registerPlugin(ScrollTrigger);

const Usecases = () => {
  const headerRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const [activeTab, setActiveTab] = useState(useCaseData[0].value);

  // Animate header and tab bar on scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
        defaults: { ease: "power3.out", duration: 1 },
      });

      tl.from(headerRef.current, { opacity: 0, y: 40 }).from(
        tabsRef.current,
        { opacity: 0, y: 30 },
        "-=0.6"
      );
    });

    return () => ctx.revert();
  }, []);

  // Animate cards on tab change
  useEffect(() => {
    const cards = cardsWrapperRef.current?.querySelectorAll(".usecase-card");

    if (!cards || cards.length === 0) return;

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, [activeTab]); // Run only when tab changes

  return (
    <section id="usecases" className="py-11">
      <div className="flex flex-col items-center justify-center gap-[20px] mb-10">
        <Label name="Usecases" />
        <h2 ref={headerRef} className="max-w-[800px] text-center">
          Discover how our <span className="italic">solutions</span> are{" "}
          <span className="italic">transforming</span> real-world industries.
        </h2>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex justify-center items-center" ref={tabsRef}>
          <TabsList className="flex flex-wrap md:flex-nowrap justify-center p-0 h-auto bg-[var(--tabs-background-color)] gap-1">
            {useCaseData.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="data-[state=active]:bg-[var(--brand-primary-color)] data-[state=active]:text-primary-foreground"
              >
                <code className="tab-label small-text text-[var(--text-primary-color)]">
                  {tab.name}
                </code>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {useCaseData.map((tab) => (
          <TabsContent key={tab.value} value={tab.value} className="pt-6">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center sm:place-items-stretch"
              ref={cardsWrapperRef}
            >
              {tab.cards.map((card, idx) => (
                <div key={idx} className="usecase-card w-full max-w-[360px]">
                  <UseCaseCard
                    title={card.title}
                    description={card.description}
                    id={card.id}
                    link={card.link}
                    imageUrl={card.imageUrl}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default Usecases;

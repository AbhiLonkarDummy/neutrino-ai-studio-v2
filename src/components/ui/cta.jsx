import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const Cta = () => (
  <section className="w-full flex justify-center items-center py-16 px-4 relative overflow-hidden">
    {/* Glowing gradient at the bottom */}
    <motion.div
      initial={{ opacity: 0.4, scale: 0.9 }}
      animate={{ opacity: 0.6, scale: 1 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] z-0 opacity-60"
      style={{
        background:
          "conic-gradient(from 0deg at 50% 50%, #ff001a, #00a6ff 106.69deg, #4797ff 162deg, #04f 252deg, #ff8000, #ff001a 360deg)",
      }}
    />

    <div className="cta-card px-8 py-16 text-center relative z-10">
      <div className="cta-card-text flex flex-col gap-4 mb-4">
        <h2 className="max-w-[800px] mx-auto">
          Ready to elevate your business with{" "}
          <span className="italic">intelligent automation?</span>
        </h2>
        <p className="max-w-[700px] mx-auto">
          From automation to insight—Neutrino AI equips you to scale faster,
          work smarter, and grow confidently.
        </p>
      </div>

      <Button className="primary-btn btn">Book a call</Button>
    </div>
  </section>
);

export default Cta;

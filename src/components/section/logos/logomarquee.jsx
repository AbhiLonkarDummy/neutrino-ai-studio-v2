import Marquee from "react-fast-marquee";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
  "/logos/logo7.svg",
  "/logos/logo8.svg",
];

const LogoMarquee = () => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-center">Trusted by top companies worldwide</h4>
      <Marquee gradient={false} speed={40} pauseOnHover={false} className="py-4">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Logo ${i}`}
            className="h-10 w-auto mx-6"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default LogoMarquee;

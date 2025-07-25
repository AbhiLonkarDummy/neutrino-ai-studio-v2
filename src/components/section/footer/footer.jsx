import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative w-full mx-0 bg-black text-white overflow-hidden">
      {/* Background Blur Effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-orange-400/30 via-blue-500/30 to-black blur-3xl opacity-70"></div>
      </div>

      <div className="relative z-10 max-w-[1120px] px-4 mx-auto py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: Logo + Newsletter */}
        <div className="flex flex-col gap-6 items-start text-left">
          <img
            src="/neutrinologo.png"
            alt="Logo"
            className="w-32 sm:w-36 h-auto"
          />

          <div className="footer-left-content flex flex-col gap-2">
            <p className="footer-text text-base">Join our newsletter</p>
            <p className="footer-subtext text-sm text-gray-300">
              Sign up to our mailing list and be the first to know about
              updates. We hate spam too.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 mt-2 w-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 rounded-md bg-gray-800 text-white placeholder:text-gray-400 text-sm w-full"
            />
            <Button className="primary-btn btn w-full sm:w-auto">
              Sign Up
            </Button>
          </form>
        </div>

        {/* Middle + Right Sections stacked on mobile */}
        <div className="md:col-span-2 flex flex-col sm:flex-row flex-wrap gap-8 justify-between">
          {/* Services */}
          <div className="flex flex-col gap-4 min-w-[140px]">
            <h4 className="footer-link-header">Services</h4>
            <ul className="flex flex-col gap-1 footer-links">
              <li>Cloud Engineering</li>
              <li>DevOps</li>
              <li>Data Engineering</li>
              <li>Salesforce</li>
              <li>Quality Engineering</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="flex flex-col gap-4 min-w-[140px]">
            <h4 className="footer-link-header">Pages</h4>
            <ul className="flex flex-col gap-1 footer-links">
              <li>About</li>
              <li>Blog</li>
              <li>Services</li>
            </ul>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-4 min-w-[140px]">
            <h4 className="footer-link-header">About us</h4>
            <ul className="flex flex-col gap-1">
              {[
                "Blogs",
                "Customer Service Stories",
                "Ebooks",
                "Tech Newsletter",
                "Podcast",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="footer-links hover:text-[--text-primary-color] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

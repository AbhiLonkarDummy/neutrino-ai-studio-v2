"use client";
import { Routes, Route, useLocation  } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import UsecaseDetails from "./pages/usecasedetails";
import Home from "./pages/home";
import ChatbotPage from "./pages/chatbotpage";
import ReactLenis from "lenis/react";

function App() {
  const location = useLocation();
  return (
    <>
      <ReactLenis root>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/usecase/details/:id" element={<UsecaseDetails />} />
            <Route path="/usecase/chatbot/:id" element={<ChatbotPage />} />
          </Routes>
        </AnimatePresence>
      </ReactLenis>
    </>
  );
}

export default App;

// .framer-HB4nF .framer-1ibt9zd {
//     background: conic-gradient(from 0deg at 50% 50%, red, #ff001a 54.89161972682219deg, #00a6ff 106.69924423399361deg, #4797ff 162deg, #04f 252.00000000000003deg, #ff8000, red 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

// .framer-HB4nF .framer-1hr18x0, .framer-HB4nF .framer-1l6bpng, .framer-HB4nF .framer-1i6knq0, .framer-HB4nF .framer-6ahcye, .framer-HB4nF .framer-119s1am, .framer-HB4nF .framer-1m996ui, .framer-HB4nF .framer-wvjiby, .framer-HB4nF .framer-onufeu, .framer-HB4nF .framer-1x9m7l9, .framer-HB4nF .framer-ctoyg8, .framer-HB4nF .framer-1rgr5ip, .framer-HB4nF .framer-tcyzkn {
//     background: conic-gradient(from 0deg at 50% 50%, #ffd9ad, #139ce5, #fd864d 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

// .framer-HB4nF .framer-1hr18x0, .framer-HB4nF .framer-1l6bpng, .framer-HB4nF .framer-1i6knq0, .framer-HB4nF .framer-6ahcye, .framer-HB4nF .framer-119s1am, .framer-HB4nF .framer-1m996ui, .framer-HB4nF .framer-wvjiby, .framer-HB4nF .framer-onufeu, .framer-HB4nF .framer-1x9m7l9, .framer-HB4nF .framer-ctoyg8, .framer-HB4nF .framer-1rgr5ip, .framer-HB4nF .framer-tcyzkn {
//     background: conic-gradient(from 0deg at 50% 50%, #ffd9ad, #139ce5, #fd864d 360deg);
//     border-radius: 50%;
//     flex: none;
//     inset: 0;
//     overflow: hidden;
//     position: absolute;
//     will-change: var(--framer-will-change-override, transform);
// }

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Paperclip, Mic, Send } from "lucide-react";
import usecaseDataById from "../components/section/usecases/usecaseDataById";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import neutrinologo from "/neutrinologo.png";

const ChatbotPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("Smart Triage");

  useEffect(() => {
    if (id && usecaseDataById[id]) {
      setTitle(usecaseDataById[id].title);
    }
  }, [id]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      const responseMessage = {
        id: Date.now() + 1,
        text: "Loading...",
        isUser: false,
        timestamp: new Date(),
        isLoading: true,
      };
      setMessages((prev) => [...prev, responseMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const LoadingDots = () => (
    <div className="flex space-x-1">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="chatbot-container bg-[var(--testimonial-card-background)]"
    >
      <div className="flex flex-col h-screen">
        {/* Header */}
        <div className="border-b border-gray-700">
          <div className="max-w-[1140px] px-2.5 flex items-center justify-between mx-auto py-3">
            <a href="/" className="w-36 h-4 flex items-center ml-2">
              <img src={neutrinologo} alt="Neutrino Logo" className="w-full h-auto block" />
            </a>
            <Link to="/">
              <Button className="btn primary-btn">Back to home</Button>
            </Link>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h3 className="text-5xl mb-6 max-w-[960px]">
                How can {title} chatbot help you today?
              </h3>
              <p className="max-w-[720px]">
                I’m Neutrino, your AI assistant by Neutrino AI. I help with
                analysis, automation, customer support, and more — tailored to
                your needs.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`flex max-w-3xl ${message.isUser ? "flex-row-reverse" : "flex-row"} space-x-3`}>
                  <div className={`flex-shrink-0 ${message.isUser ? "ml-3" : "mr-3"}`}>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.isUser ? "bg-blue-400" : ""
                      }`}
                      style={
                        !message.isUser
                          ? { backgroundColor: "var(--brand-primary-color)" }
                          : undefined
                      }
                    >
                      <span className="text-white font-semibold text-sm">
                        {message.isUser ? "U" : "AI"}
                      </span>
                    </div>
                  </div>
                  <div className={`flex-1 ${message.isUser ? "text-right" : "text-left"}`}>
                    <div
                      className={`inline-block px-4 py-3 rounded-lg ${
                        message.isUser
                          ? "bg-blue-500 text-white"
                          : "bg-gray-800 text-white"
                      }`}
                    >
                      {message.isLoading ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-300">Loading</span>
                          <LoadingDots />
                        </div>
                      ) : (
                        <p className="whitespace-pre-wrap text-box">
                          {message.text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center gap-3">
              <div className="flex-1 relative flex items-center">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Message..."
                  className="w-full px-4 py-3 pr-12 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-2xl resize-none focus:outline-none focus:border-gray-500"
                  rows="1"
                  style={{ minHeight: "48px", maxHeight: "120px" }}
                />
                <div className="absolute right-3 bottom-2 flex items-center space-x-2">
                  <button className="p-1 text-gray-500 hover:text-gray-300 rounded">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-300 rounded">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-3 h-[48px] aspect-square flex items-center justify-center text-white rounded-xl hover:opacity-80 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                style={{ backgroundColor: "var(--brand-primary-color)" }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatbotPage;

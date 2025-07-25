import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    newMessages.push({ from: "bot", text: "This is a dummy response." });
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-[var(--brand-primary-color)] hover:opacity-90 text-white p-3 rounded-md shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="w-80 h-96 rounded-xl shadow-xl flex flex-col overflow-hidden"
          style={{
            backgroundColor: "var(--testimonial-card-background)",
            color: "var(--text-primary-color)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-2"
            style={{
              backgroundColor: "var(--brand-primary-color)",
              color: "#fff",
            }}
          >
            <div className="font-semibold">Chatbot</div>
            <button onClick={toggleChat}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-2 border-t"
            style={{
              borderColor: "var(--border-muted-color)",
              backgroundColor: "transparent",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`w-fit max-w-[90%] px-4 py-2 rounded-lg text-sm border text-left bg-transparent border-[var(--border-muted-color)]`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input box */}
          <div
            className="px-2 py-2 border-t"
            style={{ borderColor: "var(--border-muted-color)" }}
          >
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-md text-sm border bg-transparent text-left"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                style={{
                  color: "var(--text-primary-color)",
                  borderColor: "var(--border-muted-color)",
                }}
              />
              <Button
                className="primary-btn"
                style={{ backgroundColor: "var(--brand-primary-color)" }}
                onClick={handleSend}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

import { Phone, MessageSquare, Instagram, Facebook, Plus, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FloatingContact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "ai" as const },
  ]);
  const [inputText, setInputText] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  const contactOptions = [
    { icon: Phone, href: "tel:+61412345678", label: "Call Us", color: "bg-green-500 hover:bg-green-600" },
    { icon: MessageSquare, href: "https://wa.me/61412345678", label: "WhatsApp", color: "bg-green-600 hover:bg-green-700" },
    { icon: Facebook, href: "https://www.facebook.com/share/1CX24Hg5oU/?mibextid=wwXIfr", label: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: Instagram, href: "https://www.instagram.com/ysmnhomecare?igsh=MXByZDBtczIwbjc1ZA==", label: "Instagram", color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400" },
  ];

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    const userMessage = { id: Date.now(), text: inputText, sender: "user" as const };
    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setTimeout(() => {
      const aiMessage = { id: Date.now() + 1, text: "Thank you for your message! Our team will get back to you shortly.", sender: "ai" as const };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">YSMN AI Assistant</h3>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsChatOpen(false)} className="text-primary-foreground hover:bg-primary/90">
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div ref={chatRef} className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-white text-gray-800 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200 flex space-x-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col space-y-3 items-end">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3"
                >
                  <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                    {option.label}
                  </span>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${option.color} text-white shadow-lg transition-all`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </motion.a>
              );
            })}
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2, delay: contactOptions.length * 0.05 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsChatOpen(!isChatOpen);
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-3"
            >
              <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                AI Chat
              </span>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all">
                <Bot className="w-5 h-5" />
              </div>
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl hover:shadow-3xl transition-all"
      >
        {isMenuOpen ? <X className="w-8 h-8" /> : <Plus className="w-8 h-8" />}
      </motion.button>
    </div>
  );
}

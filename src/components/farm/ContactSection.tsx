import { useState } from "react";
import { WoodenSign } from "./WoodenSign";
import { GameButton } from "./GameButton";
import { Mail, Linkedin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending
    setTimeout(() => {
      toast.success("Message sent to the farmer! 🌻", {
        description: "Shailesh will get back to you soon!",
      });
      setMessage("");
      setName("");
      setIsSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-farm-grass/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <WoodenSign className="inline-block mb-4">
            <h2 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3">
              <span>📮</span> Farm Mailbox <span>✉️</span>
            </h2>
          </WoodenSign>
          <p className="text-muted-foreground font-medium max-w-xl mx-auto">
            Ready to build the future of learning together? 
            Drop a message in my mailbox!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="farm-plot">
              <div className="farm-plot-inner p-6">
                <div className="bg-card rounded-xl p-6 shadow-inner">
                  <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                    <span>📝</span> Send a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-medium text-sm mb-1">Your Name</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:border-accent focus:outline-none transition-colors font-medium"
                        placeholder="Enter your name..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-sm mb-1">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background focus:border-accent focus:outline-none transition-colors font-medium resize-none"
                        rows={4}
                        placeholder="Write your message..."
                        required
                      />
                    </div>
                    <GameButton
                      variant="success"
                      className="w-full"
                    >
                      {isSending ? (
                        <>Sending... ✈️</>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </GameButton>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="farm-plot">
              <div className="farm-plot-inner p-6">
                <div className="bg-card rounded-xl p-6 shadow-inner h-full">
                  <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                    <span>🌻</span> Connect With Me
                  </h3>
                  
                  <div className="space-y-4">
                    {/* Email */}
                    <a
                      href="mailto:info@shaileshgurav.com"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent/20 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <p className="font-bold">Email</p>
                        <p className="text-sm text-muted-foreground">info@shaileshgurav.com</p>
                      </div>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-muted hover:bg-accent/20 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <p className="font-bold">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Professional Network</p>
                      </div>
                    </a>

                    {/* Fun Message */}
                    <div className="mt-6 p-4 bg-accent/20 rounded-xl border-2 border-accent/30">
                      <p className="font-display text-center">
                        🌾 Let's <strong>cultivate</strong> revolutionary learning experiences together! 🌾
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

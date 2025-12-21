import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import GoogleMap from "./map";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mbdrkkqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We{"'"}d love to hear from you. Visit us or reach out with any
            questions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-white mb-8">Contact Information</h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a] flex-shrink-0">
                  <MapPin className="text-[#d4af37]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Location</h4>
                  <p className="text-gray-400">
                    #30/6, 150A Highway, Heggere, Sanikere Post
                    <br />
                    Chitradurga-577522
                    <br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a] flex-shrink-0">
                  <Phone className="text-[#d4af37]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+91 8310023983</p>
                  <p className="text-gray-400">+91 9353243874</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a] flex-shrink-0">
                  <Mail className="text-[#d4af37]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <p className="text-gray-400">nalapaakapureveg@gmail.com</p>
                  {/* <p className="text-gray-400">
                    reservations@nalapaaka.com
                  </p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#2a2a2a] flex-shrink-0">
                  <Clock className="text-[#d4af37]" size={20} />
                </div>
                <div>
                  <h4 className="text-white mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Monday - Sunday</p>
                  <p className="text-gray-400">11:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <GoogleMap />
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-white mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:border-[#d4af37] transition-colors"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#d4af37] text-black hover:bg-[#e8c96f] transition-all rounded-md"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Required fields. We{"'"}ll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

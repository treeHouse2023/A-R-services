import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: [] as string[],
    contactMethod: [] as string[],
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (
    field: "serviceType" | "contactMethod",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      serviceType: [],
      contactMethod: [],
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-cream">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-accent tracking-widest uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-gradient-gold">Extraordinary</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Share your vision and let our experts craft a profitable culinary
              business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif font-bold mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent"
                />

                <div className="grid sm:grid-cols-2 gap-6">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent"
                  />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent"
                  />
                </div>

                {/* Service Type */}
                <div>
                  <p className="font-medium mb-3">
                    Kindly select the service type
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                     "Premium Café Opening",
"Restaurant Setup",
"Kitchen Consultancy",
"QSR Opening",
"Hotel Kitchen Consultancy",
"Menu Planning & Costing",
"Recipe Development & Food Trials",
"SOP Creation",
"Staff Hiring & Training",
"Pre-opening Support",
"Post-opening Support",
"Global & Premium Cuisine Consulting",
"Restaurant Photoshoot & Food Photography",
"Brand Positioning & Online Presence",


                    ].map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={formData.serviceType.includes(service)}
                          onChange={() =>
                            handleCheckboxChange("serviceType", service)
                          }
                          className="accent-accent"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Contact Method */}
                <div>
                  <p className="font-medium mb-3">
                    Preferred Contact Method 
                  </p>
                  <div className="flex gap-6">
                    {["Email", "Call", "Text"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={formData.contactMethod.includes(method)}
                          onChange={() =>
                            handleCheckboxChange("contactMethod", method)
                          }
                          className="accent-accent"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Additional details (optional)"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-accent resize-none"
                />

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                subtitle="Reach Us"
                title="Get in Touch"
                description="Pan India consultancy with fast response time."
              />

              <div className="space-y-6 mt-8">
                {[
                  { icon: Phone, text: "+91 98781 02714" },
                  { icon: MessageCircle, text: "+91 98781 02714" },
                  { icon: Mail, text: "contact@arfoods.in" },
                  { icon: Instagram, text: "@arjuncheff" },
                  { icon: MapPin, text: "Pan India Operations" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

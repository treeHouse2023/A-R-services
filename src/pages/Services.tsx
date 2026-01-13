import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  UtensilsCrossed, 
  Coffee, 
  ChefHat, 
  ClipboardList, 
  FlaskConical,
  FileText,
  Users,
  Rocket,
  HeartHandshake,
  Globe,
  Megaphone,
  Instagram,
  Camera,
  Sparkles
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Complete Restaurant Setup",
    description: "End-to-end restaurant launch services including concept development, interior design coordination, kitchen planning, menu creation, and operational setup.",
  },
  {
    icon: Coffee,
    title: "Premium Café Setup",
    description: "Specialized café consultancy covering ambiance design, coffee program development, bakery integration, and unique positioning strategies.",
  },
  {
    icon: ChefHat,
    title: "Hotel Kitchen Consultancy",
    description: "Commercial kitchen design for hotels, workflow optimization, equipment selection, and multi-outlet F&B management systems.",
  },
  {
    icon: ClipboardList,
    title: "Menu Planning & Costing",
    description: "Strategic menu engineering for maximum profitability, food cost analysis, pricing strategies, and seasonal menu development.",
  },
  {
    icon: FlaskConical,
    title: "Recipe Development & Food Trials",
    description: "Custom recipe creation, standardization, taste testing, and refinement to ensure consistent quality and unique offerings.",
  },
  {
    icon: FileText,
    title: "SOP Creation",
    description: "Comprehensive standard operating procedures covering all aspects of restaurant operations, ensuring consistency and efficiency.",
  },
  {
    icon: Users,
    title: "Staff Hiring & Training",
    description: "Recruitment assistance, comprehensive training programs for kitchen and service staff, and ongoing skill development.",
  },
  {
    icon: Rocket,
    title: "Pre-opening Support",
    description: "Complete launch preparation including soft opening coordination, systems testing, staff alignment, and operational readiness.",
  },
  {
    icon: HeartHandshake,
    title: "Post-opening Support",
    description: "Ongoing operational support, performance monitoring, quality audits, and continuous improvement recommendations.",
  },
  {
    icon: Globe,
    title: "Global & Premium Cuisine Consulting",
    description: "Expertise in international cuisines including Italian, Asian, Continental, and authentic regional Indian specialties.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing for Restaurants",
    description: "Strategic digital marketing campaigns, online presence optimization, and customer acquisition strategies for F&B brands.",
  },
  {
    icon: Instagram,
    title: "Social Media & Content Marketing",
    description: "Engaging social media management, content strategy, influencer collaborations, and community building for restaurants.",
  },
  {
    icon: Camera,
    title: "Restaurant Photoshoot & Food Photography",
    description: "Professional food photography, ambiance shoots, and visual content creation for marketing and menu purposes.",
  },
  {
    icon: Sparkles,
    title: "Brand Positioning & Online Presence",
    description: "Brand identity development, positioning strategy, website development, and comprehensive online presence setup.",
  },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-cream">
        <div className="container mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Comprehensive Hospitality <span className="text-gradient-gold">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From concept to launch and beyond, we provide end-to-end consultancy services tailored to your unique vision and market positioning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work"
            description="A structured approach to deliver exceptional results for your hospitality project."
          />
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision, market, and goals" },
              { step: "02", title: "Strategy", desc: "Developing comprehensive plans and solutions" },
              { step: "03", title: "Execution", desc: "Implementing with precision and attention" },
              { step: "04", title: "Launch & Support", desc: "Successful opening and ongoing guidance" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-accent">{item.step}</span>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Every project is unique. Let's discuss your specific requirements and create a tailored plan for success.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-all shadow-gold"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;

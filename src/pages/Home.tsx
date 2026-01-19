import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Coffee, ChefHat, ClipboardList, Users, Headphones } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import projectRestaurant5 from "@/assets/Restaurants/brewman coffee.jpg";
import projectRestaurant18 from "@/assets/Restaurants/Coffee Culture (Cafe).jpg";
import projectRestaurant11 from "@/assets/Restaurants/panagota 1.jpg";
import SectionHeading from "@/components/SectionHeading";
import projectRestaurant from "@/assets/project-restaurant.jpg";
const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Setup",
    description: "Complete end-to-end restaurant launch services from concept to opening day.",
  },
  {
    icon: Coffee,
    title: "Café Consultancy",
    description: "Premium café design, menu development, and operational excellence.",
  },
  {
    icon: ChefHat,
    title: "Hotel Kitchen Planning",
    description: "Commercial kitchen design and workflow optimization for hotels.",
  },
  {
    icon: ClipboardList,
    title: "Menu Engineering",
    description: "Strategic menu design for maximum profitability and guest satisfaction.",
  },
  {
    icon: Users,
    title: "SOP & Staff Training",
    description: "Comprehensive training programs and standard operating procedures.",
  },
  {
    icon: Headphones,
    title: "Pre & Post Opening Support",
    description: "Continuous support before, during, and after your launch.",
  },
];
const featuredProjects = [

  {
    image: projectRestaurant18,
    name: "The Coffee Culture",
    location: "Ludhiana, Punjab",
    type: "Cafe and Bakery",
    role: "Complete Setup",
  }, {
   image: projectRestaurant5,
    name: "Brew man Coffee",
    location: "Jalandhar, Punjab",
    type: "Cafe",
    role: "Full Setup",
  },
  {
    image: projectRestaurant11,
    name: "Pannacottas",
    location: "Chandigarh, Punjab",
    type: "Cafe cum Restaurant",
    role: "Complete F&B",
  },
];
const Home = () => {
  return (
    <>
      {/* Hero */}
      <HeroSection />
      {/* About Snapshot */}
      <section className="section-padding bg-gradient-cream">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Transforming Culinary Visions Into Successful Ventures
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A.R FOODS – Culinary Solutions is a premier hospitality consultancy firm with over a decade of experience in building profitable restaurants, cafés, and hotel kitchens across India. Our expertise spans from concept development to full operational launch.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-serif font-bold text-accent">10+</p>
                  <p className="text-muted-foreground text-sm">Years of Excellence</p>
                </div>
                <div>
                  <p className="text-3xl font-serif font-bold text-accent">Pan India</p>
                  <p className="text-muted-foreground text-sm">Operations Network</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={projectRestaurant}
                alt="Premium restaurant interior"
                className="rounded-lg shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-gold">
                <p className="text-3xl font-serif font-bold">50+</p>
                <p className="text-sm">Outlets Launched</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Services Overview */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Hospitality Solutions"
            description="From concept to launch, we provide end-to-end consultancy services tailored to your unique vision."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-all"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Stats */}
      <StatsSection />
      {/* Featured Projects */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Our Work"
            title="Featured Projects"
            description="Explore some of our successful restaurant and hospitality projects across India."
          />       
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.name} {...project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
            >
              View All Projects
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
{/* Client Brands Section */}
<section className="pt-12 pb-24 bg-secondary overflow-hidden">
  <div className="container mx-auto container-padding">
    {/* Heading (reused style from Featured Projects) */}
    <SectionHeading
      subtitle="Our Clients"
      title="Brands We’ve Worked With"
      description="Proudly partnering with leading restaurants, cafés, and hospitality brands across India."
    />
    {/* Logos Marquee */}
    <div className="mt-16 space-y-16">
      {/* ROW 1 — Right to Left */}
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: [0, -2600] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[
          "logo1.png","logo2.png","logo3.png","logo4.png","logo5.png",
          "logo6.png","logo7.png","logo8.png","logo9.png","logo10.png",
          "logo11.png","logo12.png","logo13.png","logo14.png","logo15.png",
          "logo16.png","logo17.png","logo18.png",
          
          "logo1.png","logo2.png","logo3.png","logo4.png","logo5.png",
          "logo6.png","logo7.png","logo8.png","logo9.png","logo10.png",
          "logo11.png","logo12.png","logo13.png","logo14.png","logo15.png",
          "logo16.png","logo17.png","logo18.png",
        ].map((logo, i) => (
          <div
            key={`row1-${i}`}
            className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#b25a32] flex items-center justify-center shadow-lg shrink-0"
          >
            <img
              src={`/logos/${logo}`}
              alt="Client Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* ROW 2 — Left to Right */}
      <motion.div
        className="flex items-center gap-12"
        animate={{ x: [-2600, 0] }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[
          ...[
            "logo1.png","logo2.png","logo3.png","logo4.png","logo5.png",
            "logo6.png","logo7.png","logo8.png","logo9.png","logo10.png",
            "logo11.png","logo12.png","logo13.png","logo14.png","logo15.png",
            "logo16.png","logo17.png","logo18.png",
          ].reverse(),
          ...[
            "logo1.png","logo2.png","logo3.png","logo4.png","logo5.png",
            "logo6.png","logo7.png","logo8.png","logo9.png","logo10.png",
            "logo11.png","logo12.png","logo13.png","logo14.png","logo15.png",
            "logo16.png","logo17.png","logo18.png",
          ].reverse(),
        ].map((logo, i) => (
          <div
            key={`row2-${i}`}
            className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#b25a32] flex items-center justify-center shadow-md shrink-0 opacity-95"
          >
            <img
              src={`/logos/${logo}`}
              alt="Client Logo"
              className="w-[80%] h-[80%] object-contain"
            />
          </div>
        ))}
      </motion.div>

    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Let's Build Your Next{" "}
              <span className="text-gradient-gold">Restaurant</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Ready to transform your culinary vision into a thriving business? Let's discuss your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-all shadow-gold"
            >
              Book a Consultation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
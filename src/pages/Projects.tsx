import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

import projectCafe from "@/assets/project-cafe.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";

const projects = [
  {
    image: projectRestaurant,
    name: "The Golden Fork",
    location: "Mumbai, Maharashtra",
    type: "Fine Dining",
    role: "Full Setup",
  },
  {
    image: projectCafe,
    name: "Brew & Bean Café",
    location: "Bangalore, Karnataka",
    type: "Premium Café",
    role: "Menu & SOP",
  },
  {
    image: projectHotel,
    name: "Grand Orchid Hotel",
    location: "Delhi NCR",
    type: "Hotel Kitchen",
    role: "Kitchen Planning",
  },
  {
    image: projectRestaurant,
    name: "Spice Symphony",
    location: "Hyderabad, Telangana",
    type: "Multi-Cuisine",
    role: "Full Setup",
  },
  {
    image: projectCafe,
    name: "The Urban Grind",
    location: "Pune, Maharashtra",
    type: "Specialty Café",
    role: "Concept & Launch",
  },
  {
    image: projectHotel,
    name: "Horizon Resort",
    location: "Goa",
    type: "Resort F&B",
    role: "Kitchen Design",
  },
  {
    image: projectCafe,
    name: "Artisan Bakehouse",
    location: "Chennai, Tamil Nadu",
    type: "Bakery Café",
    role: "Full Setup",
  },
  {
    image: projectRestaurant,
    name: "Saffron Tales",
    location: "Jaipur, Rajasthan",
    type: "Indian Fine Dining",
    role: "Menu & Training",
  },
  {
    image: projectHotel,
    name: "Metropolitan Suites",
    location: "Kolkata, West Bengal",
    type: "Hotel Restaurant",
    role: "Complete F&B",
  },
];

const Projects = () => {
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
              Our Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Projects That <span className="text-gradient-gold">Inspire</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our portfolio of successful restaurant, café, and hotel kitchen projects across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">50+</p>
              <p className="text-primary-foreground/70 text-sm">Outlets Launched</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">20+</p>
              <p className="text-primary-foreground/70 text-sm">Cities Covered</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">100%</p>
              <p className="text-primary-foreground/70 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={`${project.name}-${index}`} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Client Success"
            title="Trusted by Restaurant Owners"
            description="Our clients trust us to bring their culinary visions to life with excellence and professionalism."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-card p-8 md:p-12 rounded-lg shadow-elegant text-center"
          >
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-6">
              "A.R FOODS transformed our vision into reality. Their expertise in kitchen planning and menu engineering was invaluable. Our restaurant has been successful since day one."
            </p>
            <div>
              <p className="font-semibold text-foreground">Vikram Sharma</p>
              <p className="text-muted-foreground text-sm">Owner, The Golden Fork - Mumbai</p>
            </div>
          </motion.div>
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
              Your Project Could Be Next
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Join our portfolio of successful hospitality ventures. Let's create something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-all shadow-gold"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

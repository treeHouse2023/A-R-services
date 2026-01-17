import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";

import projectRestaurant from "@/assets/Restaurants/Coming soon.jpg";
import projectHotel from "@/assets/Restaurants/Coming soon.jpg";
import projectHotel5 from "@/assets/Restaurants/Coming soon.jpg";
import projectRestaurant2 from "@/assets/Restaurants/reffer cafe.jpg";
import projectRestaurant3 from "@/assets/Restaurants/chatterbox.jpg";
import projectRestaurant4 from "@/assets/Restaurants/angan.jpg";
import projectRestaurant5 from "@/assets/Restaurants/brewman coffee.jpg";
import projectRestaurant6 from "@/assets/Restaurants/hungry owl 1.jpg";
import projectRestaurant7 from "@/assets/Restaurants/forever foodie 1.jpg";
import projectRestaurant8 from "@/assets/Restaurants/Tummy Drive 1.jpg";
import projectRestaurant9 from "@/assets/Restaurants/butcher grill 1.jpg";
import projectRestaurant10 from "@/assets/Restaurants/turger Burger.jpg";
import projectRestaurant11 from "@/assets/Restaurants/panagota 1.jpg";
import projectRestaurant12 from "@/assets/Restaurants/California Cafe House 1.jpg";
import projectRestaurant13 from "@/assets/Restaurants/Dana Cafe -1.jpg";
import projectRestaurant14 from "@/assets/Restaurants/lo-rowa pizzaria 1.jpg";
import projectRestaurant15 from "@/assets/Restaurants/Amber resturant and Sweat shop.jpg";
import projectRestaurant16 from "@/assets/Restaurants/falvoraista 2.jpg";
import projectRestaurant17 from "@/assets/Restaurants/East Punjab 1.jpg";
import projectRestaurant18 from "@/assets/Restaurants/Coffee Culture (Cafe).jpg";

const projects = [
  {
    image: projectRestaurant,
    name: "Trip Society",
    location: "Hisar, Haryana",
    type: "Coming Soon",
    role: "Complete F&B",
  },
  {
    image: projectHotel,
    name: "Boutique and Emporio Cafe",
    location: "Jalandhar, Punjab",
    type: "Coming Soon",
    role: "Complete F&B",
  },
  {
    image: projectHotel5,
    name: "Khass Cafe",
    location: "Jalandhar, Punjab",
    type: "Coming Soon",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant2,
    name: "Reffer Cafe",
    location: "Jalandhar, Punjab",
    type: "Cafe",
    role: "Full Setup",
  },
  {
    image: projectRestaurant3,
    name: "ChatterBox",
    location: "Jalandhar, Punjab",
    type: "Premium Café",
    role: "Menu & SOP",
  },
  {
    image: projectRestaurant4,
    name: "Angan",
    location: "Jalandhar, Punjab",
    type: "Cafe",
    role: "Kitchen Planning",
  },
  {
    image: projectRestaurant5,
    name: "Brew Man Coffee",
    location: "Jalandhar, Punjab",
    type: "Cafe",
    role: "Full Setup",
  },
  {
    image: projectRestaurant6,
    name: "Hungry Owl",
    location: "Jalandhar, Punjab",
    type: "Cafe",
    role: "Concept & Launch",
  },
  {
    image: projectRestaurant7,
    name: "Forever Foodie",
    location: "Jalandhar, Punjab",
    type: "QSR Outlet",
    role: "Kitchen Design",
  },
  {
    image: projectRestaurant8,
    name: "Tummy Drive",
    location: "Jalandhar, Punjab",
    type: "Premium QSR",
    role: "Full Setup",
  },
  {
    image: projectRestaurant9,
    name: "Butcher Grill",
    location: "Jalandhar, Punjab",
    type: "QSR Outlet",
    role: "Menu & Training",
  },
  {
    image: projectRestaurant10,
    name: "Turger Burger",
    location: "Chandigarh, Punjab",
    type: "Cafe",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant11,
    name: "Panagotas",
    location: "Chandigarh, Punjab",
    type: "Cafe cum Restaurant",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant12,
    name: "California Coffee House",
    location: "Chandigarh, Punjab",
    type: "Cafe cum Restaurant",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant13,
    name: "Dahan",
    location: "Amritsar, Punjab",
    type: "Cafe",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant14,
    name: "La Rowan Pizzaria",
    location: "Amritsar, Punjab",
    type: "Premium Cafe",
    role: "Full Setup",
  },
  {
    image: projectRestaurant15,
    name: "Amber",
    location: "Gurdaspur, Punjab",
    type: "Restaurant & Sweet Shop",
    role: "Full Setup",
  },
  {
    image: projectRestaurant16,
    name: "Flavorrista",
    location: "Tanda, Punjab",
    type: "Premium Restaurant",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant17,
    name: "East Punjab",
    location: "Tanda, Punjab",
    type: "Cafe & Restaurant",
    role: "Complete F&B",
  },
  {
    image: projectRestaurant18,
    name: "Coffee Culture",
    location: "Ludhiana, Punjab",
    type: "Cafe",
    role: "Complete F&B",
  },
];

const Projects = () => {
  const controls = useAnimation();

  const startMarquee = () => {
    controls.start({
      x: "-100%",
      transition: {
        duration: 45,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    startMarquee();
  }, []);

  return (
    <>
      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.name}-${index}`}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary overflow-hidden">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Client Success"
            title="Trusted by Restaurant Owners"
            description="Our clients trust us to bring their culinary visions to life with excellence and professionalism."
          />

          <div className="relative mt-12 overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={{ x: "100%" }}
              animate={controls}
              onMouseLeave={startMarquee}
            >
              {[...Array(2)].flatMap(() =>
                [
                  {
                    quote:
                      "A.R FOODS transformed our vision into reality. Their expertise in kitchen planning and menu engineering was invaluable.",
                    name: "Vikram Sharma",
                    role: "Owner, The Golden Fork – Mumbai",
                  },
                  {
                    quote:
                      "From concept to execution, everything was seamless. Our kitchen operations are now highly efficient.",
                    name: "Rohit Mehta",
                    role: "Founder, Spice Route – Delhi",
                  },
                  {
                    quote:
                      "Professional team with deep industry knowledge. Their consultancy helped us avoid costly mistakes.",
                    name: "Ananya Kapoor",
                    role: "Co-Owner, Urban Plate – Bengaluru",
                  },
                  {
                    quote:
                      "Menu planning and workflow design were executed perfectly. We saw results from day one.",
                    name: "Suresh Iyer",
                    role: "Owner, Coastal Flavours – Chennai",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={`${item.name}-${i}`}
                    onMouseEnter={() => controls.stop()}
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 18,
                    }}
                    className="min-w-[320px] md:min-w-[420px] bg-card p-8 md:p-10 rounded-lg shadow-elegant text-center cursor-pointer"
                  >
                    <p className="text-lg md:text-xl font-serif mb-6">
                      “{item.quote}”
                    </p>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </motion.div>
                ))
              )}
            </motion.div>
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
              Your Project Could Be Next
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Join our portfolio of successful hospitality ventures. Let's create
              something exceptional together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md shadow-gold"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Target, Eye, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";
import founderImage from "@/assets/founder-portrait.jpg";

const whyChooseUs = [
  "Over a decade of hands-on hospitality experience",
  "Complete end-to-end project management",
  "Expertise in global & premium cuisines",
  "Pan India operational network",
  "Proven track record with 50+ successful outlets",
  "Customized solutions for every project",
];

const About = () => {
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
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              Crafting Culinary <span className="text-gradient-gold">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A.R FOODS – Culinary Solutions is a premier hospitality consultancy firm dedicated to transforming culinary visions into thriving businesses across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a passion for culinary excellence and hospitality innovation, A.R FOODS – Culinary Solutions has grown to become one of India's trusted hospitality consultancy firms. We specialize in creating and launching successful restaurants, premium cafés, and hotel kitchens that deliver exceptional experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our comprehensive approach covers every aspect of the hospitality business – from initial concept development and kitchen design to menu engineering, staff training, and post-launch support. We believe in building lasting partnerships with our clients, ensuring their success is our success.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With operations spanning across 20+ cities in India, we bring local market insights combined with global hospitality standards to every project we undertake.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="p-6 bg-secondary rounded-lg">
                  <Target className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif font-semibold text-lg mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    To empower restaurateurs with expert guidance and support for building profitable ventures.
                  </p>
                </div>
                <div className="p-6 bg-primary rounded-lg">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif font-semibold text-lg text-primary-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-primary-foreground/70">
                    Uncompromising quality in every aspect of hospitality consultancy.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-primary rounded-lg">
                  <Eye className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif font-semibold text-lg text-primary-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-primary-foreground/70">
                    To be India's most trusted hospitality consultancy partner.
                  </p>
                </div>
                <div className="p-6 bg-secondary rounded-lg">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-serif font-semibold text-lg mb-2">10+ Years</h3>
                  <p className="text-sm text-muted-foreground">
                    Of industry experience and proven track record.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Founder Section */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={founderImage}
                alt="Founder - Chef & Culinary Consultant"
                className="rounded-lg shadow-elegant w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-accent text-accent-foreground p-4 md:p-6 rounded-lg shadow-gold">
                <p className="font-serif font-bold text-lg md:text-xl">Chef & Founder</p>
                <p className="text-sm opacity-90">A.R FOODS</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
                Meet Our Founder
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Passion for Culinary Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 15 years of experience in the hospitality industry, our founder brings a unique blend of culinary expertise and business acumen to every project. Having worked with premium hotels and Michelin-starred restaurants, he understands what it takes to create memorable dining experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                His expertise spans global cuisines – from authentic Indian regional specialties to international fine dining. This diverse culinary background enables A.R FOODS to cater to a wide range of restaurant concepts and client visions.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Global Cuisines", "Fine Dining", "Café Culture", "Hotel F&B"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <SectionHeading
            subtitle="Why Choose Us"
            title="The A.R FOODS Advantage"
            description="We bring together experience, expertise, and passion to deliver exceptional results."
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8">
              Let's discuss how we can help bring your culinary vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-md hover:opacity-90 transition-all shadow-gold"
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

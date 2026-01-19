import { motion } from "framer-motion";
import indiaMap from "@/assets/India Map.png";

const stats = [
  { value: "50+", label: "Projects Launched" },
  { value: "45+", label: "Districts Covered" },
  { value: "45+", label: "Cafés & Restaurants" },
  { value: "15+", label: "Hotels" },
  { value: "96%", label: "Success Rate" },
  { value: "8+", label: "Years Experience" },
];

/**
  * Coordinates for dots on the map (as percentages)
 */
const mapDots = [
 
  { x: 27.2, y: 28.6 }, 
  { x: 28.0, y: 28.0 }, 
  { x: 29.0, y: 29.6 }, 
  { x: 30.0, y: 30.6 }, 
  { x: 31.0, y: 32.2 }, 
  { x: 28.6, y: 32.0 },
  { x: 29.6, y: 31.2 }, 
  { x: 27.8, y: 30.8 }, 
  { x: 31.6, y: 29.4 }, 
  { x: 28.8, y: 22.2 }, 
  { x: 28.8, y: 18.2 },   
  { x: 32.8, y: 35.8 },
  { x: 31.4, y: 25.2 }, 
];
const StatsSection = () => {
  return (
    <section className="pt-4 pb-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-[520px]"
          >
            {/* Aspect ratio wrapper */}
            <div className="relative w-full aspect-[3/4]">
              {/* Map Image */}
              <img
                src={indiaMap}
                alt="India Coverage Map"
                className="absolute inset-0 w-full h-full object-contain"
              />

              {/* Dots */}
              {mapDots.map((dot, index) => (
                <span
                  key={index}
                  className="absolute w-2.5 h-2.5 rounded-full bg-accent"
                  style={{
                    left: `${dot.x}%`,
                    top: `${dot.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Glow */}
                  <span className="absolute inset-0 rounded-full bg-accent opacity-60 blur-md animate-pulse" />
                </span>
              ))}
            </div>
          </motion.div>

          {/* TEXT + STATS */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-accent uppercase tracking-widest text-sm mb-3">
                Our Reach
              </p>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold mb-3">
                Where We Are
              </h3>

              <p className="text-primary-foreground/60 text-lg max-w-md">
                Delivering premium hospitality and culinary solutions across
                multiple cities and formats in India.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center backdrop-blur"
                >
                  <p className="text-3xl md:text-4xl font-serif font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70 text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;

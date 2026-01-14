import { motion } from "framer-motion";
import indiaMap from "@/assets/India Map.png";

const stats = [
  { value: "50+", label: "Projects Launched" },
  { value: "25+", label: "Cities Covered" },
  { value: "40+", label: "Cafés & Restaurants" },
  { value: "23+", label: "Hotels" },
  { value: "96%", label: "Success Rate" },
  { value: "12+", label: "Years Experience" },
];


const mapDots = [
   { top: "29%", left: "23%" },
  { top: "28%", left: "24%" },
  { top: "27%", left: "23%" },
  { top: "27%", left: "20%" },
  { top: "30%", left: "20%" },
  { top: "30%", left: "21%" },
  { top: "31%", left: "23%" },
  { top: "31%", left: "20%" },
  { top: "30%", left: "21%" },
];

const StatsSection = () => {
  return (
    <section className="pt-1 pb-12 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">

          {/* MAP WITH DOTS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-start"
          >
            {/* MAP IMAGE */}
            <img
              src={indiaMap}
              alt="India Coverage Map"
              className="w-full max-w-[520px] object-contain"
            />

            {/* GOLD DOTS */}
            {mapDots.map((dot, index) => (
              <span
                key={index}
                className="absolute w-2.5 h-2.5 rounded-full bg-accent"
                style={{ top: dot.top, left: dot.left }}
              >
                {/* Glow */}
                <span className="absolute inset-0 rounded-full bg-accent opacity-60 blur-md animate-pulse" />
              </span>
            ))}
          </motion.div>

          {/* STATS + HEADING */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <p className="text-accent uppercase tracking-widest text-sm md:text-base mb-3">
                Our Reach
              </p>

              <h3 className="text-4xl md:text-5xl font-serif font-semibold mb-3">
                Where We Are
              </h3>

              <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed max-w-md">
                Delivering premium hospitality and culinary solutions across
                multiple cities and formats in India.
              </p>
            </motion.div>

            {/* STATS GRID */}
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

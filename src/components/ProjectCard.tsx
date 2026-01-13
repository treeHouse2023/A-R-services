import { motion } from "framer-motion";
import { MapPin, Tag } from "lucide-react";

interface ProjectCardProps {
  image: string;
  name: string;
  location: string;
  type: string;
  role: string;
  index?: number;
}

const ProjectCard = ({ image, name, location, type, role, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-elegant"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
          {type}
        </span>
        <h3 className="text-xl font-serif font-semibold text-primary-foreground mb-2">
          {name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            {location}
          </span>
          <span className="flex items-center gap-1.5">
            <Tag size={14} />
            {role}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

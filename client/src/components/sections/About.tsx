import { motion } from "framer-motion";
import profilePic from "@assets/MATRIC-320_1767402764655.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src={profilePic} 
                alt="Julia Okeyode" 
                className="relative rounded-2xl w-full max-w-sm object-cover shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 space-y-6"
          >
            <h2 className="text-3xl font-bold font-display">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hi, I’m Julia Okeyode — a dynamic nursing student, certified RN, photographer, content creator, and dancer. 
                I create content that inspires, engages, and tells a story. 
                This portfolio showcases my photography, choreography, social media campaigns, and creative projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Scissors, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80')`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-gold/20 rounded-full z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-gold/10 rounded-full z-10 hidden lg:block" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <Scissors className="w-12 h-12 text-gold mx-auto mb-4 rotate-[-30deg]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Salon de coiffure premium
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight"
        >
          R'<span className="text-gold">Coiff</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-xl md:text-2xl text-white/80 font-display italic mb-4"
        >
          L'excellence au service de votre style
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-base md:text-lg text-white/60 font-body mb-10 max-w-2xl mx-auto"
        >
          Découvrez une expérience capillaire unique à Villeneuve-le-Roi.
          Expertise, élégance et attention personnalisée.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#reservation"
            className="bg-gold text-white px-8 py-4 rounded-full font-body font-semibold text-base tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-2xl hover:shadow-gold/30 hover:scale-105"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#prestations"
            className="border border-white/30 text-white px-8 py-4 rounded-full font-body font-medium text-base tracking-wide hover:bg-white/10 transition-all duration-300"
          >
            Nos prestations
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-gold transition-colors cursor-pointer animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </section>
  );
}

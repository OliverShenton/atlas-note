"use client";

import SectionTitle from "@/components/global/SectionTitle";
import SectionContainer from "../../global/SectionContainer";
import { featuresData } from "@/data/landing/featuresData";
import FeaturesSectionBackground from "@/components/backgrounds/FeaturesSectionBackground";
import { motion, Variants } from "motion/react";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

const FeaturesSection = () => {
  return (
    <SectionContainer id="features-section" width="max-w-7xl">
      <FeaturesSectionBackground />
      <SectionTitle
        section="Features"
        sectionType="features"
        title="Powerful features built for modern teams"
        subtitle="AtlasNote combines a real-time collaborative editor, offline-first resilience, and built-in AI answers into ine streamlined workspace - so your team can capture ideas, find knowledge instantly, and keep moving without friction."
      />
      {/* <GridContainer data={[featuresData[0]]} /> */}
      <motion.div
        className="grid grid-cols-3 gap-8 10"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        {featuresData.map((f) => (
          <motion.article
            key={f.title}
            className="border border-slate-300 p-8 bg-white transition-all duration-300 shadow-black/5 hover:-translate-y-1 hover:shadow-md group z-10"
            variants={cardVariant}>
            <div className="space-y-6">
              <motion.div
                className={`text-xl w-fit p-4 text-white rounded-full group-hover:scale-110 transition-all duration-300 ${f.background}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.3, ease: "easeOut" }}>
                {f.icon}
              </motion.div>
              <h3 className="text-slate-900 font-bold text-2xl pointer-events-none">{f.title}</h3>
              <p className="text-slate-700 leading-relaxed pointer-events-none">{f.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionContainer>
  );
};

export default FeaturesSection;

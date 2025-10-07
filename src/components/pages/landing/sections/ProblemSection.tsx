"use client";

import ProblemSectionBackground from "@/components/backgrounds/ProblemSectionbackground";
import SectionContainer from "../../../global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import { Variants } from "motion";
import { motion } from "motion/react";
import { ProblemsData } from "@/data/landing/problemsData";
import { LinkButton } from "@/components/global/Button";
import ProblemToFeatureArrow from "@/components/animations/ProblemToFeatureArrow";

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const ProblemSection = () => {
  return (
    <SectionContainer id="problems-section" width="max-w-7xl">
      <ProblemSectionBackground />
      <SectionTitle
        section="The Problem"
        sectionType="problem"
        title="Knowledge is scattered. Work slows down."
        subtitle="Teams lose momentum when information splinters across tools, search can't keep up with context, and versions drift out of sync. Onboarding drags, decisions stall, and the same questions keep resurfacing."
      />
      <motion.div
        className="grid grid-cols-3 gap-12 z-10"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        {ProblemsData.map((p) => (
          <motion.article
            key={p.title}
            className={`border border-slate-300 p-8 bg-gradient-to-br from-white to-slate-neutral-50 transition-all duration-300 shadow-black/5 hover:shadow-md group z-10 ${p.crazyFactor} hover:rotate-0 hover:y:0 hover:scale-105 hover:bg-white`}
            variants={cardVariant}>
            <div className="space-y-4">
              <motion.div
                className={`text-xl w-fit p-4 text-white rounded-full ${p.background}`}
                whileHover={{ scale: [1, 0.9, 1.05, 0.95, 1] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}>
                {p.icon}
              </motion.div>
              <h3 className="text-slate-900 font-bold text-2xl pointer-events-none">{p.title}</h3>
              <p className="text-slate-700 leading-relaxed pointer-events-none">{p.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
      <div className="w-fit mx-auto">
        <LinkButton
          id="go-to-features-section"
          href="#features-section"
          title="Features"
          target="_parent"
          className="w-fit border border-slate-300 hover:border-slate-500 bg-slate-50 hover:bg-white hover:scale-105 transition-all duration-100 shadow-sm hover:shadow-md shadow-black/5 hover:shadow-black/20 px-6 py-3">
          How we can Help!
        </LinkButton>
      </div>
      <ProblemToFeatureArrow className="absolute bottom-0 right-0 h-60 w-70" />
    </SectionContainer>
  );
};

export default ProblemSection;

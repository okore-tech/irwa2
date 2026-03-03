"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const timeline = [
  {
    year: "2011",
    title: "Research",
    desc: "Academic research at University of Northampton, UK.",
  },
  {
    year: "2012",
    title: "Measurement",
    desc: "Launch of Social Earnings Ratio® to measure intangible value.",
  },
  {
    year: "2013",
    title: "Focus",
    desc: "University spin-out: Centre for Citizenship, Enterprise & Governance.",
  },
  {
    year: "2014",
    title: "Publicity",
    desc: "Vatican speech — described as the 'God Metric'.",
  },
  {
    year: "2015",
    title: "Procurement",
    desc: "Adopted across procurement systems in 9 countries.",
  },
  {
    year: "2017",
    title: "Finance",
    desc: "ICO compliant with FCA.",
  },
  {
    year: "2018",
    title: "Recognition",
    desc: "Extended academic recognition (University of Birmingham City, UK).",
  },
  {
    year: "2020",
    title: "Applications",
    desc: "16 sectors — 16 whitepapers.",
  },
  {
    year: "2024",
    title: "Retail",
    desc: "Launch of BeanYou.com.",
  },
  {
    year: "2025",
    title: "iRWA",
    desc: "Intangible Real World Assets framework.",
  },
];

export default function EvolutionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-6 lg:px-24 py-24">

      <div className="max-w-4xl mx-auto">

        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Evolution
          </h1>
          <p className="text-slate-600 text-lg">
            From academic research to a new asset class.
          </p>

          <Link
            href="/"
            className="inline-block mt-4 text-indigo-600 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="relative border-l border-slate-200 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-12 ml-6 relative"
            >
              <div className="absolute -left-[13px] top-1 w-6 h-6 rounded-full bg-indigo-600 shadow-md" />

              <div className="bg-white/70 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 shadow-lg">
                <div className="text-sm text-indigo-600 font-semibold">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold mt-1">
                  {item.title}
                </h3>
                <p className="text-slate-600 mt-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}
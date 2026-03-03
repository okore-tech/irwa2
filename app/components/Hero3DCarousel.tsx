"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Mouse = { x: number; y: number };

const items = [
  {
    title: "BeanYou",
    subtitle: "Coffee participation economy",
    metric: "Retail Layer",
    img: "/assets/bean-you.jpg",
  },
  {
    title: "National Treasures",
    subtitle: "Art & cultural identity",
    metric: "Belief Economy",
    img: "/assets/Persistence.jpeg",
  },
  {
    title: "Zut Island",
    subtitle: "Mediterranean impact ecosystem",
    metric: "Island Culture",
    img: "/assets/4bc9574431d9787ae40236108382b161a5adf868.png",
  },
  {
    title: "EV Batteries",
    subtitle: "Future of transport",
    metric: "Energy Transition",
    img: "/assets/ev-mineral.jpg",
  },
  {
    title: "Whiskey",
    subtitle: "Aged assets & loyalty",
    metric: "Experience-Based",
    img: "/assets/50ba58402031d878c19b9f7ed60c649eae10e7de.png",
  },
  {
    title: "Petroleum Fields",
    subtitle: "Energy identity markets",
    metric: "Extraction Economy",
    img: "/assets/53f0693371c99d212f514ffc95fb1d917115545c.png",
  },
  {
    title: "Natural Ecosystem",
    subtitle: "Rewilding & biodiversity",
    metric: "Environmental",
    img: "/assets/8b1a92cef097201939f3c54d05109a9eb865b3e5.png",
  },
  {
    title: "Spiritual Journeys",
    subtitle: "Pilgrimage economies",
    metric: "Faith-Based",
    img: "/assets/a4c5131ae8219ac19c24047be967a2d3c822f1ad.png",
  },
  {
    title: "Race Tracks",
    subtitle: "Mobility brands",
    metric: "Sports Economy",
    img: "/assets/a66a47c36d7207e9df02414e897290bdf14b3310.png",
  },
  {
    title: "Religious Temples",
    subtitle: "Faith ecosystems",
    metric: "Community Belief",
    img: "/assets/b170ca6fdee988b2dc9887b841d001a7bdd1dfce.png",
  },
];

const VISIBLE_SIDE_CARDS = 2;

function getSignedDistance(index: number, activeIndex: number, total: number) {
  const wrapped = (index - activeIndex + total) % total;
  return wrapped > total / 2 ? wrapped - total : wrapped;
}

export default function Hero3DCarousel({
  mouse = { x: 0, y: 0 },
}: {
  mouse?: Mouse;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[340px] lg:max-w-[380px] h-[280px] sm:h-[320px] md:h-[340px] lg:h-[380px] mx-auto lg:mx-0 [perspective:1600px]">
      <motion.div
        animate={{
          rotateY: mouse.x * 0.08,
          rotateX: -mouse.y * 0.08,
        }}
        transition={{ type: "spring", stiffness: 70, damping: 16 }}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {items.map((item, i) => {
          const distance = getSignedDistance(i, activeIndex, items.length);
          const absDistance = Math.abs(distance);

          if (absDistance > VISIBLE_SIDE_CARDS) return null;

          const translateX = distance * 46;
          const translateZ = 220 - absDistance * 95;
          const rotateY = -distance * 26;
          const scale = 1 - absDistance * 0.1;
          const opacity = absDistance === 0 ? 1 : absDistance === 1 ? 0.82 : 0.52;

          return (
            <div
              key={i}
              className="absolute inset-0 transition-[transform,opacity] duration-700 ease-out"
              style={{
                transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                opacity,
                zIndex: 30 - absDistance,
                transformStyle: "preserve-3d",
                pointerEvents: absDistance === 0 ? "auto" : "none",
              }}
            >
              <div
                className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                />

                {/* Gloss reflection */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${50 + mouse.x}% ${50 + mouse.y}%, rgba(255,255,255,0.3), transparent 60%)`,
                    mixBlendMode: "overlay",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25" />

                <div className="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black/40 via-black/20 to-transparent">
                  <div className="space-y-1">
                    <div className="text-sm font-semibold shimmer-text">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/70">
                      {item.subtitle}
                    </div>
                    <div className="text-xs text-indigo-300 font-medium">
                      {item.metric}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </motion.div>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Show ${item.title}`}
            className={`h-1.5 rounded-full transition-all ${
              i === activeIndex ? "w-5 bg-slate-700" : "w-1.5 bg-slate-400/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

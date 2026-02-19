import React, { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  className?: string;
  /**
   * If you render this behind everything, set `fixed` true.
   * If you render it inside a section container, keep it false.
   */
  fixed?: boolean;
  /**
   * Extra opacity control for the whole background layer.
   */
  opacity?: number; // 0..1
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    onChange();
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);
  return reduced;
}

/**
 * Background
 * - Works as an app-wide background layer OR section background
 * - Uses GPU-friendly transforms
 * - Honors prefers-reduced-motion
 * - Avoids heavy canvas while still feeling rich/organic
 */
export default function Background({ className = "", fixed = true, opacity = 1 }: Props) {
  const reducedMotion = usePrefersReducedMotion();

  // Smooth scroll progress 0..1 with rAF throttling
  const [p, setP] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (reducedMotion) return;

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop || 0;
        const scrollMax = (doc.scrollHeight || 1) - (doc.clientHeight || 1);
        const prog = scrollMax > 0 ? scrollTop / scrollMax : 0;
        setP(clamp(prog, 0, 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  // Seeded-ish positions (stable between renders)
  const blobs = useMemo(
    () => [
      { id: "b1", x: "8%", y: "10%", s: 520, blur: 40 },
      { id: "b2", x: "78%", y: "18%", s: 460, blur: 44 },
      { id: "b3", x: "18%", y: "72%", s: 600, blur: 48 },
      { id: "b4", x: "82%", y: "78%", s: 560, blur: 52 },
    ],
    []
  );

  // Parallax offsets (keep them subtle)
  const parallaxA = reducedMotion ? 0 : (p - 0.5) * 40; // -20..20
  const parallaxB = reducedMotion ? 0 : (p - 0.5) * -55; // 27..-27
  const parallaxC = reducedMotion ? 0 : (p - 0.5) * 70;

  return (
    <div
      aria-hidden="true"
      className={[
        fixed ? "fixed inset-0" : "absolute inset-0",
        "pointer-events-none -z-10 overflow-hidden",
        className,
      ].join(" ")}
      style={{ opacity }}
    >
      {/* Base gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a0b0b] via-[#140707] to-black" />

      {/* Animated gradient wash */}
      <div
        className={[
          "absolute -inset-[35%] opacity-70",
          reducedMotion ? "" : "animate-[bgShift_18s_ease-in-out_infinite]",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(closest-side at 20% 30%, rgba(255,122,24,0.42), transparent 60%)," +
            "radial-gradient(closest-side at 80% 20%, rgba(255,40,90,0.34), transparent 55%)," +
            "radial-gradient(closest-side at 30% 85%, rgba(153,88,45,0.36), transparent 58%)," +
            "radial-gradient(closest-side at 75% 80%, rgba(255,160,70,0.26), transparent 62%)",
          transform: `translate3d(${parallaxA}px, ${parallaxB}px, 0)`,
          willChange: reducedMotion ? undefined : "transform",
        }}
      />

      {/* Organic blobs */}
      {blobs.map((b, idx) => {
        const t = idx % 2 === 0 ? parallaxC : -parallaxC;
        const rot = reducedMotion ? 0 : (p * 80 + idx * 25) % 360;

        return (
          <div
            key={b.id}
            className="absolute"
            style={{
              left: b.x,
              top: b.y,
              width: b.s,
              height: b.s,
              filter: `blur(${b.blur}px)`,
              transform: `translate3d(-50%, -50%, 0) translate3d(${t}px, ${t * 0.6}px, 0) rotate(${rot}deg)`,
              willChange: reducedMotion ? undefined : "transform",
              opacity: 0.9,
            }}
          >
            <div
              className={[
                "h-full w-full",
                reducedMotion ? "" : "animate-[blobWobble_14s_ease-in-out_infinite]",
              ].join(" ")}
              style={{
                borderRadius: "36% 64% 53% 47% / 44% 40% 60% 56%",
                background:
                  idx === 0
                    ? "radial-gradient(circle at 30% 30%, rgba(255,122,24,0.65), rgba(255,122,24,0.05) 55%, transparent 70%)"
                    : idx === 1
                      ? "radial-gradient(circle at 60% 30%, rgba(255,40,90,0.55), rgba(255,40,90,0.06) 55%, transparent 72%)"
                      : idx === 2
                        ? "radial-gradient(circle at 35% 60%, rgba(153,88,45,0.55), rgba(153,88,45,0.06) 55%, transparent 72%)"
                        : "radial-gradient(circle at 55% 55%, rgba(255,160,70,0.48), rgba(255,160,70,0.06) 55%, transparent 72%)",
              }}
            />
          </div>
        );
      })}

      {/* Soft vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.45)_70%,rgba(0,0,0,0.85)_100%)]" />

      {/* Subtle texture/noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Tiny floating specks (optional, lightweight) */}
      <div
        className={[
          "absolute inset-0 opacity-40",
          reducedMotion ? "" : "animate-[specks_22s_linear_infinite]",
        ].join(" ")}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.12) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 40% 60%, rgba(255,255,255,0.08) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 75% 35%, rgba(255,255,255,0.10) 0 1px, transparent 2px)," +
            "radial-gradient(circle at 85% 80%, rgba(255,255,255,0.07) 0 1px, transparent 2px)",
          backgroundSize: "520px 520px",
        }}
      />

      {/* Keyframes */}
      <style>{`
        @keyframes bgShift {
          0%   { transform: translate3d(${parallaxA - 10}px, ${parallaxB + 10}px, 0) scale(1); }
          50%  { transform: translate3d(${parallaxA + 12}px, ${parallaxB - 8}px, 0) scale(1.03); }
          100% { transform: translate3d(${parallaxA - 10}px, ${parallaxB + 10}px, 0) scale(1); }
        }
        @keyframes blobWobble {
          0%   { border-radius: 36% 64% 53% 47% / 44% 40% 60% 56%; transform: scale(1) }
          33%  { border-radius: 55% 45% 38% 62% / 49% 58% 42% 51%; transform: scale(1.03) }
          66%  { border-radius: 40% 60% 62% 38% / 60% 42% 58% 40%; transform: scale(0.99) }
          100% { border-radius: 36% 64% 53% 47% / 44% 40% 60% 56%; transform: scale(1) }
        }
        @keyframes specks {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-120px,-120px,0); }
        }
      `}</style>
    </div>
  );
}

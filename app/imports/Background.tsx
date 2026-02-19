"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type BackgroundProps = {
  children?: React.ReactNode;
  className?: string;

  /** Optional: override the three main brand colors used in gradients/blobs */
  colors?: {
    a: string; // e.g. "#F97316" (orange)
    b: string; // e.g. "#7C2D12" (brown)
    c: string; // e.g. "#DC2626" (red)
  };

  /** Optional: intensity of scroll parallax (0.6 is a nice default) */
  parallax?: number;

  /** Optional: enable/disable decorative grid */
  showGrid?: boolean;

  /** Optional: enable/disable noise overlay */
  showNoise?: boolean;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(!!mq.matches);

    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function Background({
  children,
  className = "",
  colors,
  parallax = 0.6,
  showGrid = true,
  showNoise = true,
}: BackgroundProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Brand defaults (orange/brown/red) — you can override via props.
  const palette = useMemo(
    () => ({
      a: colors?.a ?? "#F97316", // orange-500
      b: colors?.b ?? "#7C2D12", // amber-950-ish / deep brown
      c: colors?.c ?? "#DC2626", // red-600
    }),
    [colors]
  );

  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastYRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion) return;

    const el = wrapRef.current;
    if (!el) return;

    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

    const tick = () => {
      rafRef.current = null;

      const y = window.scrollY || 0;
      // Smooth updates without requiring heavy spring libs:
      const prev = lastYRef.current;
      const next = prev + (y - prev) * 0.12;
      lastYRef.current = next;

      // Normalize scroll to a small range, then convert to CSS vars
      const n = clamp(next / 1200, 0, 1);
      el.style.setProperty("--bg-scroll", `${n}`);
      el.style.setProperty("--bg-parallax", `${next * parallax}px`);
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    // Init
    lastYRef.current = window.scrollY || 0;
    tick();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [parallax, prefersReducedMotion]);

  return (
    <div
      ref={wrapRef}
      className={[
        "relative min-h-screen w-full overflow-hidden",
        // Base background — keep it dark/warm so orange/red pop
        "bg-[#0b0a09]",
        className,
      ].join(" ")}
      style={
        {
          // CSS vars used by layers below
          "--c-a": palette.a,
          "--c-b": palette.b,
          "--c-c": palette.c,
          "--bg-scroll": 0,
          "--bg-parallax": "0px",
        } as React.CSSProperties
      }
    >
      {/* Layer: animated gradient wash */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute inset-0",
          "opacity-90",
          prefersReducedMotion ? "" : "bg-anim-wash",
        ].join(" ")}
      />

      {/* Layer: soft vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.92)_100%)]"
      />

      {/* Layer: floating blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={[
            "absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-3xl",
            prefersReducedMotion ? "" : "blob-float-1",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(circle at 30% 30%, color-mix(in srgb, var(--c-a) 85%, transparent), transparent 60%)," +
              "radial-gradient(circle at 70% 60%, color-mix(in srgb, var(--c-c) 70%, transparent), transparent 62%)",
            transform: "translate3d(0, calc(var(--bg-parallax) * 0.06), 0)",
            opacity: 0.55,
          }}
        />
        <div
          className={[
            "absolute top-1/3 -right-48 h-[640px] w-[640px] rounded-full blur-3xl",
            prefersReducedMotion ? "" : "blob-float-2",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(circle at 35% 40%, color-mix(in srgb, var(--c-b) 85%, transparent), transparent 60%)," +
              "radial-gradient(circle at 75% 70%, color-mix(in srgb, var(--c-a) 60%, transparent), transparent 62%)",
            transform: "translate3d(0, calc(var(--bg-parallax) * 0.08), 0)",
            opacity: 0.45,
          }}
        />
        <div
          className={[
            "absolute -bottom-56 left-1/4 h-[720px] w-[720px] rounded-full blur-3xl",
            prefersReducedMotion ? "" : "blob-float-3",
          ].join(" ")}
          style={{
            background:
              "radial-gradient(circle at 40% 35%, color-mix(in srgb, var(--c-c) 75%, transparent), transparent 60%)," +
              "radial-gradient(circle at 70% 65%, color-mix(in srgb, var(--c-b) 55%, transparent), transparent 62%)",
            transform: "translate3d(0, calc(var(--bg-parallax) * 0.1), 0)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Layer: subtle grid (optional) */}
      {showGrid && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)," +
              "linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            transform: "translate3d(0, calc(var(--bg-parallax) * 0.03), 0)",
            maskImage: "radial-gradient(circle at 50% 30%, black 0%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black 0%, transparent 65%)",
          }}
        />
      )}

      {/* Layer: noise (optional) */}
      {showNoise && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
            backgroundSize: "160px 160px",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* CSS animations */}
      <style jsx global>{`
        /* Animated gradient wash */
        .bg-anim-wash {
          background: radial-gradient(
              1200px 700px at 15% 15%,
              color-mix(in srgb, var(--c-a) 42%, transparent) 0%,
              transparent 60%
            ),
            radial-gradient(
              900px 650px at 85% 35%,
              color-mix(in srgb, var(--c-b) 38%, transparent) 0%,
              transparent 62%
            ),
            radial-gradient(
              1000px 700px at 55% 95%,
              color-mix(in srgb, var(--c-c) 30%, transparent) 0%,
              transparent 62%
            ),
            linear-gradient(
              120deg,
              rgba(8, 7, 6, 0.96),
              rgba(10, 9, 8, 0.92),
              rgba(8, 7, 6, 0.96)
            );
          background-size: 140% 140%;
          animation: washShift 14s ease-in-out infinite;
          transform: translate3d(0, calc(var(--bg-parallax) * 0.02), 0);
        }

        @keyframes washShift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Blob floats: keep motion subtle to avoid nausea */
        .blob-float-1 {
          animation: blob1 12s ease-in-out infinite;
        }
        .blob-float-2 {
          animation: blob2 16s ease-in-out infinite;
        }
        .blob-float-3 {
          animation: blob3 18s ease-in-out infinite;
        }

        @keyframes blob1 {
          0% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.06), 0) scale(1);
          }
          50% {
            transform: translate3d(30px, calc(var(--bg-parallax) * 0.06 - 20px), 0)
              scale(1.08);
          }
          100% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.06), 0) scale(1);
          }
        }

        @keyframes blob2 {
          0% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.08), 0) scale(1);
          }
          50% {
            transform: translate3d(-34px, calc(var(--bg-parallax) * 0.08 + 18px), 0)
              scale(1.06);
          }
          100% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.08), 0) scale(1);
          }
        }

        @keyframes blob3 {
          0% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.1), 0) scale(1);
          }
          50% {
            transform: translate3d(24px, calc(var(--bg-parallax) * 0.1 - 16px), 0)
              scale(1.1);
          }
          100% {
            transform: translate3d(0, calc(var(--bg-parallax) * 0.1), 0) scale(1);
          }
        }

        /* Extra safety for users who reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .bg-anim-wash,
          .blob-float-1,
          .blob-float-2,
          .blob-float-3 {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

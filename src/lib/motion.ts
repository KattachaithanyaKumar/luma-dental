export const motion = {
  duration: {
    fast: 0.22,
    base: 0.5,
    slow: 0.7,
  },
  ease: {
    out: "power2.out",
    soft: "power3.out",
    inOut: "power2.inOut",
  },
  reveal: {
    y: 16,
    stagger: 0.06,
  },
} as const;

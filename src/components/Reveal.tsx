import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type ElementType,
  type CSSProperties,
} from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  /** translateY in px when hidden */
  y?: number;
  /** trigger once (default true) */
  once?: boolean;
};

/**
 * Scroll-triggered fade + rise. Uses IntersectionObserver.
 * Falls back to visible if observer is unavailable (SSR safe).
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  style,
  y = 28,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const composed: CSSProperties = {
    transition:
      "opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)",
    transitionDelay: `${delay}ms`,
    opacity: shown ? 1 : 0,
    transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    <Tag ref={ref as never} className={className} style={composed}>
      {children}
    </Tag>
  );
}

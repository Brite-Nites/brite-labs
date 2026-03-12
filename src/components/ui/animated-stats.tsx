"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: Stat[];
  /** Base duration for all animations in seconds. All stats finish at the same time. */
  duration?: number;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Visual variant - affects colors and styling */
  variant?: "dark" | "light";
  /** Custom class for the container */
  className?: string;
  /** Whether to show border dividers between stats */
  showDividers?: boolean;
  /** Custom trigger for animation - if not provided, uses internal useInView */
  isInView?: boolean;
}

// Single digit component that only animates when its value changes
function AnimatedDigit({
  digit,
  transitionDuration,
}: {
  digit: string;
  transitionDuration: number;
}) {
  return (
    <span className="relative inline-block tabular-nums overflow-hidden h-[1em]">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: transitionDuration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Smooth scrolling counter with per-digit transitions
function SmoothCounter({
  value,
  duration,
  delay,
  isInView,
}: {
  value: string;
  duration: number;
  delay: number;
  isInView: boolean;
}) {
  const [digits, setDigits] = useState<string[]>([]);
  const [transitionDuration, setTransitionDuration] = useState(0.15);
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const prevValueRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);

  // Extract numeric part and suffix (like + or %)
  const match = value.match(/^(\d+)(.*)$/);
  const targetNum = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  /**
   * Auto-calculate starting number based on target value
   * Larger numbers start at a higher percentage to ensure similar step counts
   */
  const getStartingNumber = (target: number): number => {
    if (target >= 10000) return Math.floor(target * 0.85);
    if (target >= 1000) return Math.floor(target * 0.8);
    if (target >= 100) return Math.floor(target * 0.7);
    if (target >= 50) return Math.floor(target * 0.5);
    return 0;
  };

  /**
   * Auto-calculate increment based on target and start values
   * Aims for consistent number of visual steps regardless of the number magnitude
   */
  const getIncrement = (target: number, start: number): number => {
    const range = target - start;
    // Target roughly 20-25 steps for smooth animation
    const targetSteps = 22;
    const increment = Math.max(1, Math.round(range / targetSteps));

    // For very large numbers, round to nice increments
    if (range >= 1000) {
      // Round to nearest 50 or 100 for large ranges
      const magnitude = Math.pow(10, Math.floor(Math.log10(increment)));
      return Math.max(1, Math.round(increment / magnitude) * magnitude);
    }

    return increment;
  };

  useEffect(() => {
    if (!isInView || hasStarted) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
      const startTime = Date.now();
      prevTimeRef.current = startTime;

      const startNum = getStartingNumber(targetNum);
      const increment = getIncrement(targetNum, startNum);
      prevValueRef.current = startNum;

      // Initialize digits with starting number
      const startDigits = startNum.toString().padStart(targetNum.toString().length, " ").split("");
      setDigits(startDigits);

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Smooth easeOutQuart for deceleration at the end
        const eased = 1 - Math.pow(1 - progress, 4);

        // Calculate current value - interpolate from start to target
        const range = targetNum - startNum;
        let currentNum = Math.round(startNum + eased * range);

        // Snap to increment steps for smoother counting
        if (currentNum < targetNum) {
          currentNum = startNum + Math.floor((currentNum - startNum) / increment) * increment;
        }

        // Ensure we hit the target at the end
        if (progress >= 1) {
          currentNum = targetNum;
          setIsComplete(true);
        }

        if (currentNum !== prevValueRef.current) {
          // Calculate time since last value change to determine transition speed
          const timeSinceLastChange = now - prevTimeRef.current;

          // Map the time between changes to transition duration
          // Clamp between 0.08s (fast) and 0.35s (slow/final)
          const dynamicDuration = Math.min(
            0.35,
            Math.max(0.08, timeSinceLastChange / 1000 * 1.2)
          );

          prevTimeRef.current = now;
          prevValueRef.current = currentNum;
          setTransitionDuration(dynamicDuration);

          // Pad to consistent length and split into digits
          const targetLength = targetNum.toString().length;
          const newDigits = currentNum.toString().padStart(targetLength, " ").split("");
          setDigits(newDigits);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [isInView, hasStarted, targetNum, duration, delay]);

  // Pad initial display
  const targetLength = targetNum.toString().length;
  const displayDigits = hasStarted
    ? digits
    : "0".padStart(targetLength, " ").split("");

  return (
    <span className="font-heading text-[32px] font-semibold tracking-[-1.28px] leading-none inline-flex items-baseline">
      {displayDigits.map((digit, index) => (
        <AnimatedDigit
          key={`${index}-${digit}`}
          digit={digit}
          transitionDuration={isComplete ? 0.3 : transitionDuration}
        />
      ))}
      {suffix && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: hasStarted ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="inline-block"
        >
          {suffix}
        </motion.span>
      )}
    </span>
  );
}

export function AnimatedStats({
  stats,
  duration = 2.0,
  delay = 0.3,
  variant = "dark",
  className,
  showDividers = true,
  isInView: externalIsInView,
}: AnimatedStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const internalIsInView = useInView(containerRef, { once: true, amount: 0.5 });

  // Use external isInView if provided, otherwise use internal
  const isInView = externalIsInView !== undefined ? externalIsInView : internalIsInView;

  // Style variants
  const valueStyles = variant === "light"
    ? "text-[#fdfdfd]"
    : "text-[#616161]";

  const labelStyles = variant === "light"
    ? "text-[#fdfdfd]"
    : "text-[#616161]";

  const dividerStyles = variant === "light"
    ? "border-[#fdfdfd]"
    : "border-[#616161]";

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex gap-[20px] items-center uppercase",
        className
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={index}
          className={cn(
            "flex flex-col gap-[5px] items-start pr-[20px]",
            showDividers && index < stats.length - 1 && `border-r ${dividerStyles}`
          )}
        >
          <div className={valueStyles}>
            <SmoothCounter
              value={stat.value}
              duration={duration}
              delay={delay}
              isInView={isInView}
            />
          </div>
          <span className={cn(
            "font-body text-[12px] tracking-[0.96px] whitespace-nowrap leading-none",
            labelStyles
          )}>
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export default function CounterItem({
  end,
  label,
  icon,
}: {
  end: number;
  label: string;
  icon: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let current = 0;
          const step = end / 120;

          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <img src={icon} alt="" />
      <p className="text-white text-[33px]">+{count}</p>
      <p className="text-white">{label}</p>
    </div>
  );
}

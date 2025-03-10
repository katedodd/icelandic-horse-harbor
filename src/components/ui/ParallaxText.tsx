
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ParallaxTextProps {
  baseVelocity?: number;
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxText({
  children,
  baseVelocity = 5,
  className = ""
}: ParallaxTextProps) {
  const isMobile = useIsMobile();
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Disable parallax effect on mobile to optimize performance
  if (isMobile) {
    return (
      <div className={`parallax ${className}`}>
        <div className="scroller">{children}</div>
      </div>
    );
  }

  return (
    <div className={`parallax ${className}`}>
      <div ref={scrollerRef} className="scroller animate-marquee">
        {children}
        {children}
      </div>
    </div>
  );
}

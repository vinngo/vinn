"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExpandableContext, useExpandable } from "./expandable-context";

interface ExpandableProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Expandable({ trigger, children, className }: ExpandableProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <ExpandableContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(isMobile ? "cursor-pointer" : "", className)}
      >
        {trigger}
        {children}
      </div>
    </ExpandableContext.Provider>
  );
}

interface ExpandableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

function ExpandableContent({
  className,
  children,
  ...props
}: ExpandableContentProps) {
  const { isOpen } = useExpandable();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);
  const peekHeight = 40; // Show ~24px of content as a hint

  React.useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          setHeight(entry.contentRect.height);
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? height : peekHeight,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="overflow-hidden relative"
    >
      <div
        ref={contentRef}
        className={cn("border-l pl-3 transition-shadow", className)}
        {...props}
      >
        {children}
      </div>
      {!isOpen && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      )}
    </motion.div>
  );
}

export { Expandable, ExpandableContent };

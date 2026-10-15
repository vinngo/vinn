"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ExpandableContext, useExpandable } from "./expandable-context";

interface ExpandableProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

// Only a thin line across the middle of the viewport counts as "in view", so
// the entry the reader is focused on opens and entries scrolled past or not
// yet reached close. Keeping it thin means one entry opening can't push its
// neighbours in and out of view and make them flicker.
const IN_VIEW_MARGIN = "-49% 0px -50% 0px";

function Expandable({ trigger, children, className }: ExpandableProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: IN_VIEW_MARGIN });
  const isMobile = useMediaQuery("(max-width: 767px)"); // below Tailwind's md breakpoint
  const [isOpen, setIsOpen] = React.useState(false);

  // Scrolling drives open/close; hover and tap only override it until the
  // next time the entry enters or leaves the viewport band.
  React.useEffect(() => {
    setIsOpen(inView);
  }, [inView]);

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
      setIsOpen(inView);
    }
  };

  return (
    <ExpandableContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        ref={ref}
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
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden relative"
    >
      <div
        ref={contentRef}
        className={cn("border-l pl-3 transition-shadow", className)}
        {...props}
      >
        {children}
      </div>
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none"
      />
    </motion.div>
  );
}

export { Expandable, ExpandableContent };

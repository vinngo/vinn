import * as React from "react";

export const ExpandableContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
} | null>(null);

export function useExpandable() {
  const context = React.useContext(ExpandableContext);
  if (!context) {
    throw new Error("Expandable components must be used within an Expandable");
  }
  return context;
}

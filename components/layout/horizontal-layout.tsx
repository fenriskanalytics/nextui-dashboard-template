import React from "react";

interface HorizontalLayoutProps {
  slotComponents: React.ReactNode[]; // Change prop type to React.ReactNode[]
  slotWidth: string;
  gap: string;
}

export function HorizontalLayout({
  slotComponents,
  slotWidth,
  gap,
}: HorizontalLayoutProps) {
  const totalSlots = slotComponents.length;
  const slotStyle = {
    flex: `0 0 calc(${slotWidth} - ${gap})`,
    marginRight: gap,
  };

  return (
    <div style={{ display: "flex" }}>
      {slotComponents.map((SlotComponent, index) => (
        <div
          key={index}
          style={index === totalSlots - 1 ? { flex: "0 0 auto" } : slotStyle}
        >
          {SlotComponent} {/* Render the SlotComponent directly */}
        </div>
      ))}
    </div>
  );
}

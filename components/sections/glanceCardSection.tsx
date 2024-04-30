import React from "react";
import { HorizontalLayout } from "../layout/horizontal-layout";
import { CardBalance1 } from "../home/card-balance1";
import { CardBalance2 } from "../home/card-balance2";
import { CardBalance3 } from "../home/card-balance3";
import { CardBalance4 } from "../home/card-balance4";
import { CardBalance5 } from "../home/card-balance5";

export function GlanceCardSection() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <HorizontalLayout
        slotComponents={[
          <CardBalance1 key="balance1" />,
          <CardBalance2 key="balance2" />,
          <CardBalance3 key="balance3" />,
          <CardBalance4 key="balance4" />,
          <CardBalance5 key="balance5" />,
        ]}
        slotWidth="20%"
        gap="2.5%"
      />
    </div>
  );
}

export default GlanceCardSection;

import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import React from "react";

const ReadOnlyInput = ({ data }) => (
  <Input
    readOnly
    fullWidth
    value={data}
    css={{ maxWidth: "200px", fontWeight: "$bold", bg: "$backgroundContrast" }}
  />
);

export const FinancialStatementCard = () => {
  return (
    <Card className="m-5 p-5 bg-white rounded-lg shadow-xl">
      <div className="grid grid-cols-3 gap-4">
        {/* Assets Column */}
        <div>
          <h3 className="text-lg font-bold mb-2">Assets</h3>
          <div className="mb-3">
            <p className="font-semibold">Real Estate</p>
            <ReadOnlyInput value="$1,203,100.00" />
            <ReadOnlyInput value="$804,000.00" />
          </div>
          {/* Additional Asset Categories */}
        </div>

        {/* Liabilities Column */}
        <div>
          <h3 className="text-lg font-bold mb-2">Liabilities</h3>
          <div className="mb-3">
            <p className="font-semibold">Mortgage</p>
            <ReadOnlyInput value="$0.00" />
          </div>
          {/* Additional Liability Categories */}
        </div>

        {/* Ownership Column (Placeholder for now) */}
        <div>
          <h3 className="text-lg font-bold mb-2">Ownership</h3>
          {/* This section will depend on how you want to present ownership info */}
        </div>
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
      </div>
    </Card>
  );
};

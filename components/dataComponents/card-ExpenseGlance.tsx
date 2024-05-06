import { Card, CardBody } from "@nextui-org/card";
import React from "react";

export const ExpenseGlanceCard = () => {
  return (
    <Card className="xl:max-w-sm bg-white rounded-xl shadow-md px-3 w-full">
      <CardBody className="py-5 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-gray-900 text-sm">ANNUAL EXPENSES</span>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-sm">3.48%</span>
            <span className="ml-1 text-sm text-gray-600">Since last month</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">$243,000</span>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600 text-sm">Fixed Expenses</span>
            <span className="text-sm font-semibold">$201,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Lifestyle Expenses</span>
            <span className="text-sm font-semibold">$21,000</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

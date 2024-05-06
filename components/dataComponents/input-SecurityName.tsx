"use client";

import React from 'react';
import { Input } from "@nextui-org/input";

interface SecurityNameInputProps {
  value: string;
}

const SecurityNameInput: React.FC<SecurityNameInputProps> = ({ value }) => {
  return (
    <Input value={value} />
  );
};

export default SecurityNameInput;

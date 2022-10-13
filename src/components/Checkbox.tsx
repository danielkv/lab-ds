import React, { ReactNode } from "react";
import { Check } from "phosphor-react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Text } from "./Text";

export interface CheckboxProps {
  id?: string;
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPrimitive.Root
        id={id}
        className="w-6 h-6 p-[2px] bg-gray-800 rounded "
      >
        <CheckboxPrimitive.Indicator asChild>
          <Check className="h-5 w-5 text-cyan-500" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <Text size="sm" asChild>
          <label htmlFor={id}>{label}</label>
        </Text>
      )}
    </div>
  );
};

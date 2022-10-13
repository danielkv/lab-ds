import React, { Fragment, InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot: React.FC<TextInputRootProps> = ({ children }) => {
  return (
    <div className="flex items-center h-12 gap-3 py-4 px-3 rounded text-gray-100 bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
};

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput: React.FC<TextInputProps> = (props) => {
  return (
    <input
      className="flex-1 text-xs font-sans placeholder:text-gray-400 outline-none bg-transparent"
      {...props}
    />
  );
};

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon: React.FC<TextInputIconProps> = ({ children }) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextInputRoot.displayName = "TextInput.Root";
TextInputInput.displayName = "TextInput.Input";
TextInputIcon.displayName = "TextInput.Icon";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

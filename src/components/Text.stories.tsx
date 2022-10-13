import { Text, TextProps } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Text",
  component: Text,
  args: {
    children: "Lorem ipsum",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      defaultValue: "md",
      control: {
        type: "radio",
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with paragraph</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

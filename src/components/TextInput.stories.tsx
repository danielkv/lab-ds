import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your text" />,
  },
};

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email address" />,
    ],
  },
};

import { Checkbox, CheckboxProps } from "./Checkbox";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    id: "checkbox",
    label: "Lembrar de mim por 30 dias",
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

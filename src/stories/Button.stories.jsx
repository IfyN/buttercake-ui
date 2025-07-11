import React from "react";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
  size: "md",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Button",
  variant: "outline",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  label: "Large Button",
  variant: "primary",
  size: "lg",
};

export const Small = Template.bind({});
Small.args = {
  label: "Small Button",
  variant: "primary",
  size: "sm",
};

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: "Disabled Button",
//   variant: "primary",
//   size: "md",
//   disabled: true,
// };
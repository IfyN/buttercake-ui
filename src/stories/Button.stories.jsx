import React from "react";
import Button from "../components/Button";

//storybook metadataimport Button from '../components/Button';
// export default {
//   title: "Components/Button",
//   component: Button,
// };

// export const Primary = () => (
//   <Button label="Primary Button" variant="primary" />
// );

// export const Secondary = () => (
//   <Button label="Secondary Button" variant="secondary" />
// );


// Storybook metadata
export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  variant: "secondary",
};



// export const Outline = () => (
//   <Button label="Outline Button" variant="outline" />
// );

import Input from "../components/Input";

export default {
  title: "Components/Input",
  component: Input,
};

export const Outline = {
  args: {
    variant: "outline",
    size: "md",
    placeholder: "Outline input",
  },
};

export const Filled = {
  args: {
    variant: "filled",
    size: "md",
    placeholder: "Filled input",
  },
};

export const Flushed = {
  args: {
    variant: "flushed",
    size: "md",
    placeholder: "Flushed input",
  },
};

export const Large = {
  args: {
    variant: "outline",
    size: "lg",
    placeholder: "Large input",
  },
};

export const Small = {
  args: {
    variant: "outline",
    size: "sm",
    placeholder: "Small input",
  },
};

export const Disabled = {
  args: {
    variant: "outline",
    size: "md",
    placeholder: "Disabled input",
    disabled: true,
  },
};

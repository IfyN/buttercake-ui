// import Button from "../components/Button";

// export default {
//   title: "Components/Button",
//   component: Button,
//   tags: ['autodocs']
// };

// export const Primary = {
//   args: {
//     label: "Primary Button",
//     variant: "primary",
//     size: "md",
//   },
// };

// export const Secondary = {
//   args: {
//     label: "Secondary Button",
//     variant: "secondary",
//     size: "md",
//   },
// };

// export const Outline = {
//   args: {
//     label: "Outline Button",
//     variant: "outline",
//     size: "md",
//   },
// };

// export const Large = {
//   args: {
//     label: "Large Button",
//     variant: "primary",
//     size: "lg",
//   },
// };

// export const Small = {
//   args: {
//     label: "Small Button",
//     variant: "primary",
//     size: "sm",
//   },
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   label: "Disabled Button",
//   variant: "primary",
//   size: "md",
//   disabled: true,
// };

import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Text displayed on the button.",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline",],
      description: "Visual style of the button.",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the button.",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled.",
    },
    onClick: { action: "clicked", description: "Button click event." },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Button** component supports multiple variants, sizes, and a disabled state.

**Props:**
- \`label\` (string, required): Text displayed on the button.
- \`variant\` (string, optional): One of \`primary\`, \`secondary\`, \`outline\`, \`ghost\`.
- \`size\` (string, optional): One of \`sm\`, \`md\`, \`lg\`.
- \`disabled\` (boolean, optional): Disables the button.
- \`onClick\` (function, optional): Called when the button is clicked.

**Usage:**
\`\`\`jsx
<Button label="Click Me" variant="primary" size="md" onClick={() => {}} />
\`\`\`
        `,
      },
    },
  },
};

export const Primary = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "md",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "md",
    disabled: false,
  },
};

export const Outline = {
  args: {
    label: "Outline Button",
    variant: "outline",
    size: "md",
    disabled: false,
  },
};

export const Ghost = {
  args: {
    label: "Ghost Button",
    variant: "ghost",
    size: "md",
    disabled: false,
  },
};

export const Large = {
  args: {
    label: "Large Button",
    variant: "primary",
    size: "lg",
    disabled: false,
  },
};

 export const Small = {
  args: {
    label: "Small Button",
    variant: "primary",
    size: "sm",
  },
 }
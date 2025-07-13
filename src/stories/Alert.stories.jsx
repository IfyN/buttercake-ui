import React from "react";
import Alert from "../components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "The style of the alert.",
    },
    message: {
      control: { type: "text" },
      description: "The message to display in the alert.",
    },
    onClose: { action: "closed", description: "Called when the alert is closed." },
  },
  parameters: {
    docs: {
      description: {
        component: `
The **Alert** component displays important messages to users.  
It supports four types: \`info\`, \`success\`, \`warning\`, and \`error\`.

**Props:**
- \`message\` (string, required): The message to display.
- \`type\` (string, optional): The alert style. One of \`info\`, \`success\`, \`warning\`, or \`error\`. Defaults to \`info\`.
- \`onClose\` (function, optional): Called when the alert is closed.

**Usage:**
\`\`\`jsx
<Alert type="success" message="Your action was successful!" />
\`\`\`
        `,
      },
    },
  },
};

import Alert from "../components/Alert";


export const Info = {
  args: {
    type: "info",
    message: "This is an info alert.",
  },
};

export const Success = {
  args: {
    type: "success",
    message: "This is a success alert!",
  },
};

export const Warning = {
  args: {
    type: "warning",
    message: "This is a warning alert!",
  },
};

export const Error = {
  args: {
    type: "error",
    message: "This is an error alert!",
  },
}
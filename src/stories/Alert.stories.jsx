import Alert from "../components/Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};


export const Info = {
  args: {
    type: "info",
    message: "This is an info alert.",
  },
}

export const Success = {
  args: {
    type: "success",
    message: "This is a success alert!",
  },
}

export const Warning = {
  args: {
    type: "warning",
    message: "This is a warning alert!",
  },
}

export const Error = {
  args: {
    type: "error",
    message: "This is an error alert!",
  },
};
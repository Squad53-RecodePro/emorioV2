import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    mix: {
      100: "linear-gradient(to right, #f12711, #f5af19)",
    },
    orange: {
      100: "#ee390f",
    },
    gray: {
      100: "#f5f5f5",
      200: "#888888",
      300: "#f0f4f6",
    },
    yellow: {
      100: "#f9b700",
      200: "#fdeae5",
      300: "#fff0e0",
    },
    blue: {
      100: "#0c2e60",
      200: "#007bff",
    },
    green: {
      100: "#38610B",
    },
  },
});
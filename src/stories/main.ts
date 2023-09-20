import { StorybookConfig } from "@storybook/react-webpack5";
// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
// import type { StorybookConfig } from "@storybook/react";

const config: StorybookConfig = {
  framework: "@storybook/react-webpack5",
  stories: ["../my-project/src/components/*.@(js|jsx|ts|tsx|md)"],
};

export default config;

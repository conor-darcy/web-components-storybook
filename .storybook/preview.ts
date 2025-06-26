import type { Preview } from "@storybook/web-components";

// Import the Stencil components
import "../www/build/mycomponents.esm.js";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

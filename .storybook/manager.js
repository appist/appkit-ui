import { addons } from "@storybook/addons";
import theme from "./theme";

addons.setConfig({
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  theme,
});

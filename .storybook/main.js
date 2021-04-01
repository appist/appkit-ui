const svelteConfig = require("../svelte.config");

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    "@storybook/addon-svelte-csf",
  ],
  webpackFinal: async config => {
    const svelteLoader = config.module.rules.find(
      r => r.loader && r.loader.includes("svelte-loader")
    );

    svelteLoader.options = {
      ...svelteLoader.options,
      preprocess: svelteConfig.preprocess,
    };

    return config;
  },
};

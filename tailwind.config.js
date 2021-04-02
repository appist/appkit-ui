const colors = require("tailwindcss/colors");
const { tailwindExtractor } = require("tailwindcss/lib/lib/purgeUnusedStyles");

module.exports = {
  purge: {
    content: ["./src/**/*.svelte", "./stories/**/*.html", "./stories/**/*.svelte"],
    options: {
      defaultExtractor: content => [
        ...tailwindExtractor(content),
        ...[...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
          ([_match, group, ..._rest]) => group
        ),
      ],
      keyframes: true,
    },
  },
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.coolGray,
        success: colors.green,
        info: colors.lightBlue,
        warning: colors.amber,
        danger: colors.red,
        dark: colors.coolGray,
        light: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};

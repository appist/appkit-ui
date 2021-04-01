let plugins = [
  require("postcss-import"),
  require("tailwindcss"),
  require("postcss-preset-env")({
    stage: 1,
    features: {
      "nesting-rules": true,
    },
  }),
];

if (process.env.NODE_ENV !== "development") {
  plugins = [
    ...plugins,
    ...[
      require("cssnano")({
        preset: "default",
      }),
    ],
  ];
}

module.exports = {
  plugins,
};

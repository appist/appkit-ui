let plugins = [
  require("postcss-preset-env")({
    stage: 2,
    features: {
      "nesting-rules": true,
    },
  }),
  require("@tailwindcss/jit")(),
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

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!lit-html)"],
  globals: {
    "ts-jest": {
      tsconfig: {
        allowJs: true,
      },
    },
  },
};

module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: ["src/components/**/*.{js,jsx,ts,tsx,vue}"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$",
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};

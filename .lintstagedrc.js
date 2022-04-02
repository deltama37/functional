const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" ")}`;

const typeCheck = () => `tsc --noEmit`;

const test = () => `jest`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [
    buildPrettierCommand,
    buildEslintCommand,
    typeCheck,
    test,
  ],
};

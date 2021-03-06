import postcssPresetEnv from "postcss-preset-env";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
	input: "./src/index.ts",
	output: [
		{
			file: pkg.main,
			format: "umd",
			name: "FontManager",
		},
		{
			file: pkg.module,
			format: "esm",
		},
	],
	plugins: [
		typescript(),
		postcss({
			plugins: [postcssPresetEnv],
		}),
	],
};

import sveltePreprocess from "svelte-preprocess";
import postcss from "./postcss.config";

export const preprocess = sveltePreprocess({
	postcss,
});

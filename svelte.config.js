import preprocess from "svelte-preprocess";
import postcss from "./postcss.config";

export default {
	preprocess: preprocess({
		postcss,
	}),
};

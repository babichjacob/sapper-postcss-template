<script>
	import { stores } from "@sapper/app";

	const { page } = stores();
	$: path = $page.path.slice(1);
</script>

<style lang="postcss" src="../global.pcss" global></style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<slot />

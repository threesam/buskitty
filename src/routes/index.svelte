<script context="module" lang="ts">
	export const prerender = false;

	import type { IframeSrcOptions } from '$lib/components/Stream/types';

	const IframeSrcOptions: IframeSrcOptions = {
		controls: true,
		muted: true,
		autoplay: true
	};

	const videoEndpoint = 'https://iframe.videodelivery.net/';
	const videoId = '20ba3f262845297e20bfdca3d939bab4';
</script>

<script lang="ts">
	import Stream from '$lib/components/Stream/Stream.svelte';
</script>

<svelte:head>
	<title>Buskitty</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Stream title="my stream" src={videoId} {IframeSrcOptions} />
</section>

<style>
	section {
		min-height: calc(100vh - var(--headerHeight));
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

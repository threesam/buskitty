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
	export async function load({ fetch }) {
		const response = await fetch('https://cloudflarestream.com/' + videoId + '/lifecycle');
		const data = await response.json();
		return {
			props: {
				live: data && data.live
			}
		};
	}
</script>

<script lang="ts">
	export let live: boolean;

	import { onMount, onDestroy } from 'svelte';
	import Stream from '$lib/components/Stream/Stream.svelte';

	$: showStream = live;

	async function checkStreamStatus(interval: number) {
		const response = await fetch('https://cloudflarestream.com/' + videoId + '/lifecycle');
		const data = await response.json();
		showStream = data && data.live;
		return data && data.live;
	}

	// intermittently check if stream is live
	let interval: number;
	onMount(async () => {
		interval = window && window.setInterval(async () => await checkStreamStatus(interval), 5000);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svelte:head>
	<title>Buskitty</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	{#if showStream}
		<Stream title="my stream" src={videoId} {IframeSrcOptions} />
	{:else}
		<h1 class="bigText">No Stream Right Now</h1>
	{/if}
</section>

<style>
	section {
		min-height: calc(100vh - var(--headerHeight));
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	h1 {
		position: absolute;
	}
</style>

<script context="module" lang="ts">
	export const prerender = false;
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	onMount(() => {
		const player = window?.Stream && window.Stream(document.getElementById('stream-player'));
		player.addEventListener('play', () => {
			console.log('playing!');
		});
		player.play().catch(() => {
			console.log('playback failed, muting to try again');
			player.muted = true;
			player.play();
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div style="position: relative; padding-top: 56.25%;">
		<iframe
			src="https://iframe.videodelivery.net/20ba3f262845297e20bfdca3d939bab4"
			style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%;"
			allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
			allowfullscreen
		/>
	</div>
</section>

<style>
	section {
		max-height: calc(100vh - 3em);
	}
	div {
		border: 2px solid var(--primary);
	}
	div,
	iframe {
		max-height: 100%;
	}

	iframe {
		overflow: hidden;
		border: 4px solid black;
	}
</style>

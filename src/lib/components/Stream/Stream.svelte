<script lang="ts">
	import { validSrcUrl } from './validSrcUrl';
	import type { IframeSrcOptions } from './types';

	export let src: string;
	export let title: string;
	export let allowFullscreen: boolean = true;
	export let IframeSrcOptions: IframeSrcOptions;
	// desctructure src options
	const {
		muted,
		preload,
		loop,
		autoplay,
		controls,
		poster,
		primaryColor,
		letterboxColor,
		adUrl,
		startTime,
		defaultTextTrack
	} = IframeSrcOptions;

	const paramString = [
		poster && `poster=${encodeURIComponent(poster)}`,
		adUrl && `ad-url=${encodeURIComponent(adUrl)}`,
		defaultTextTrack && `defaultTextTrack=${encodeURIComponent(defaultTextTrack)}`,
		primaryColor && `primaryColor=${encodeURIComponent(primaryColor)}`,
		letterboxColor && `letterboxColor=${encodeURIComponent(letterboxColor)}`,
		startTime && `startTime=${startTime}`,
		muted && 'muted=true',
		preload && `preload=${preload}`,
		loop && 'loop=true',
		autoplay && 'autoplay=true',
		!controls && 'controls=false'
	]
		.filter(Boolean)
		.join('&');

	const computedSrc = `https://iframe.cloudflarestream.com/${src}?${paramString}`;
	const iframeSrc = validSrcUrl(src) ? src : computedSrc;
</script>

<div>
	<iframe
		src={iframeSrc}
		allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
		allowfullscreen={allowFullscreen}
		{title}
	/>
</div>

<style>
	div {
		display: block;
		position: relative;
		padding-top: 56.25%;
		background: linear-gradient(45deg, var(--purple), var(--orange));
		max-height: 100%;
		width: 100%;
	}

	iframe {
		border: 0.0625rem solid transparent;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		max-height: 100%;
		width: 100%;
		min-width: 100%;
		overflow: hidden;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
</script>

<header>
	<div class="corner">
		<a href="/"><img src={logo} alt="svelte logo" /></a>
	</div>

	<nav>
		<SocialLinks />
	</nav>

	<div class="corner">
		<a href="/"><img src={logo} alt="svelte logo" /></a>
	</div>
</header>

<style>
	header {
		padding: 0 1rem;
		display: flex;
		justify-content: space-between;
		background: var(--headerBackground);
	}

	.corner {
		width: 3em;
		height: 3em;
		filter: grayscale(100%);
	}

	.corner:hover {
		transition: 0.3s all ease-in-out;
		filter: grayscale(0);
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: inherit;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>

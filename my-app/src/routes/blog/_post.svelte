<script>
 let { title, date, children } = $props();
</script>

<svelte:head>
 <title>{ title }</title>
</svelte:head>

<h1>{title}</h1>

<p>Published: {date}</p>

{@render children()}

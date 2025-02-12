<script>
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';

    let { children } = $props();
</script>

<style lang="scss" >
 :global(body) {
   width: 400px;
   margin: 0 auto;
   font-family: sans-serif;
 }
</style>

<h1>Svelte's space</h1>

<Nav className="alt"/>

{@render children()}

<Footer />

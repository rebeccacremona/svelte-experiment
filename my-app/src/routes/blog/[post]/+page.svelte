<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
    let { data } = $props();

    const { title, excerpt, date, updated, categories } =
        data.meta;
    const { PostContent } = data;
</script>

<svelte:head>
    <!-- Be sure to add your image files and un-comment the lines below -->
    <title>{title}</title>
</svelte:head>

<article class="post">
    <h1>{title}</h1>

    <div class="meta">
        <b>Published:</b>
        {date}
    </div>

    <PostContent />

    {#if categories}
        <aside class="post-footer">
            <h2>Posted in:</h2>
            <ul class="post-footer__categories">
                {#each categories as category}
                    <li>
                        {category}
                    </li>
                {/each}
            </ul>
        </aside>
    {/if}
</article>

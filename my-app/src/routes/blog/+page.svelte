<script>
  let { data } = $props();
</script>

<h1>Blog</h1>

{#if data.posts}
  <ul>
   {#each data.posts.reverse() as { path, metadata: { title, date }}}
     <li>
       <a href="/blog/{path}">{title}</a> - { date }
     </li>
   {/each}
  </ul>
{/if}

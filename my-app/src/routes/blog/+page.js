 const blogPosts = import.meta.glob('$lib/posts/*.md');

 let body = [];

 for (let path in blogPosts) {
   body.push(
     blogPosts[path]().then(({ metadata }) => {
       console.log(metadata);
       path = path.substring(path.lastIndexOf('/') + 1).replace(".md", "").replace(".svx", "");
       return { path, metadata };
     })
   );
 }

 export async function load() {
   const posts = await Promise.all(body);
   return {
     posts: posts
   };
 }

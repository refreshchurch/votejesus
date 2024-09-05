// export async function getSitemap() {
//     const baseUrl = "https://votejesus.us/";
  
//     // For a single page, just add the home URL and any other pages you might have
//     const staticPages = [`${baseUrl}/`];
  
//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//         ${staticPages
//           .map((url) => {
//             return `
//               <url>
//                 <loc>${url}</loc>
//                 <lastmod>${new Date().toISOString()}</lastmod>
//                 <changefreq>weekly</changefreq>
//                 <priority>1.0</priority>
//               </url>
//             `;
//           })
//           .join('')}
//       </urlset>`;
  
//     return new Response(sitemap, {
//       headers: {
//         "Content-Type": "application/xml",
//       },
//     });
//   }
  
//   // Explicitly export the renamed function as GET
//   export { getSitemap as GET };
  
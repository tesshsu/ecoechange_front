const sitemap =  require("nextjs-sitemap-generator");

const path =  require("path");

sitemap({
  baseUrl: "https://ecoechange.com/",
  // If you are using Vercel platform to deploy change the route to /.next/serverless/pages
  pagesDirectory: path.resolve(__dirname, '../out/'),
  targetDirectory: path.resolve(__dirname, '../out/'),
  ignoredExtensions: ["js", "map", "json","xml","png","css","jpeg","jpg","icon"],
  ignoredPaths: [
    "404",
    "favison",
    "index",
  ],
});

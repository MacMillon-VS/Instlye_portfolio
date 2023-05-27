const fs = require('fs');

const sitemap = require('sitemap');
const hostname = 'https://instylearchitect.com/';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects/:id', changefreq: 'weekly', priority: 0.9 },
  // Add additional pages here
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});


// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

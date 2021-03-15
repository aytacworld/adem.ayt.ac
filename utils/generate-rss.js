const fs = require('fs');
const rss = require('@aytacworld/rss');
const matter = require('gray-matter');
const marked = require('marked');
const sanitizeHtml = require('sanitize-html');

const path = require('path');

function getArticles(link) {
  const postsFolder = path.relative('.', './posts');

  return fs.readdirSync(postsFolder)
    .filter(i => i.endsWith('.md'))
    .map(f => `./${postsFolder}/${f}`)
    .reverse()
    .map(file => {
      const mdFile = fs.readFileSync(file);
      const mattered = matter(mdFile);

      const markeded = marked(mattered.content);
      const cleaned = sanitizeHtml(markeded);
      const articleLink = `${link}/p/${file.split('/')[2].split('.md')[0]}`;

      return {
        title: mattered.data.title,
        link: articleLink,
        guid: articleLink,
        pubDate: new Date(mattered.data.publishdate),
        description: cleaned,
      };
    });
}

function run() {
  const outFile = path.relative('.', './out/rss');
  const siteConfig = require('../siteconfig.json');

  const channel = {
    title: siteConfig.title,
    link: siteConfig.homepage,
    description: siteConfig.description,
    atomLink: `${siteConfig.homepage}/rss`,
    items: getArticles(siteConfig.homepage),
  };

  fs.writeFileSync(outFile, rss(channel));
}

run();

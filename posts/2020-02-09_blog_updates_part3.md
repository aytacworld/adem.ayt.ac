---
{
  "title": "Blog Updates part 3",
  "tags": ["blog", "git", "refactoring"],
  "publishdate": "2020-02-09 18:45:00"
}
---

Once again, I have changed my blog.
I created a new repo https://git.aytacworld.com/aytacworld/adem.ayt.ac
All my posts(md-files) are on a different private repo. That way, draft versions stays offline.

The setup is simple, I'm using a Debian instance, and installed __git, curl, nginx, certbot, nvm(node+npm+yarn+pm2), ufw__, and added my user. And created 2 script files, 1) `update.sh`, which will update the system, 2) `publish.sh`, which will pull the blog repo and the posts repo and restart the blog.

The structure of the md-files stays the same

```
[//]: # (title: Blog Updates part 3)
[//]: # (tags: blog, git, refactoring)
[//]: # (publishdate: 2020-02-09 18:45:00)
[//]: # (published: true)

text...
...
```

The only difference is that I don't use the `published` meta data, I change the extension of the file instead (eg. 2020-02-09\_blog\_updates\_part3.md.unpublished).
Once the app starts, the initial function will look for all files with __.md__ extension in my other repo. So adding it, will exclude it from the files list.

No commenting system is used. And tags are only displayed, not used, maybe in future I re-enable them as a feature.

As I create the files starting with date, I didn't apply a sorting method. Listing all files will do it automatically, and iterating backwards will put the latest post as first item.

Navigation is also easy to setup:
- previous: files[current - 1]
- current: files[current]
- next: files[current + 1]

So this is the latest version of my blog

Thanks and take care
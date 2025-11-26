---
{
  "title": "Blog Updates",
  "tags": ["en", "blog", "git", "refactor"],
  "publishdate": "2018-08-27"
}
---

On my first post, I mentioned that I wanted to add extra features to my blog. Well, guess what, I'm totally changing it.

One day I wanted to write a post, so I searched a markdown editor, and tried some nice ones. But then, I needed to login, then press "add"-button and fill in the form, copy-paste the markdown. Press save and hope that everything works fine. But it didn't, so I wasn't able to post my own post on my own blogging system...

Ofcourse, you'll say that I have to add some testing to avoid this kind of things. Well, I ignored that part for my blog. And now, I need to debug over and over and fix the app on every fail...

The second thing, that annoyed me, was that I need to fill in the form and refill it if anything goes bad... And copy-pasting from a markdown editor, is not always easy...
So I wanted to bypass that step as well.

I want some changes for my blogging system.

If anything goes bad on the server(mongo crashes or the server dies for whatever reason), I will lose my posts.
Ok, I can solve this with backup, but I need to configure the server again, and this will take time and motivation...

So couple of things came into my head.
Those are:
- Create a docker image, so I can easily redeploy the app on another server.
- Use git to store the posts, so it's backed up and versioned.
- So, if we are using git, why not add the settings/configurations also in git.
- I can also create some pages like this.

How this will work:
1. I will spin up a vps
2. Download docker
3. Run image with my data-git-repo
Yep only this 3 steps
(4.) when I add/update/delete a post, a githook will be fired, and the website will be up-to-date.
(5.) same goes for the settings

What kind of settings can I add?
- Blog title,
- color theme,
- how to create the slug,
- add signature
- set up language
- ...

How does a post look like?
```
[//]: # (keyword: value)
...

hello world
Blablabla...
...
```

The pages can also be created like this.

I also need a folder structure.
```
./settings.js
./posts/some-post-file.md
./pages/about.md
```
This way, I don't need to login to the website, but only commit my changes.

You can follow my updates on my github account about this :). Or just here, when I post it ;)

Thanks and take care

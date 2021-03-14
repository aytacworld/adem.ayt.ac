---
{
  "title": "Blog Updates p2",
  "tags": ["blog", "git", "refactoring"],
  "publishdate": "2018-09-30 17:32:00"
}
---

This is the part 2 of my refactoring journey of my blogging system. You can read [here](https://adem.ayt.ac/p/20180716_StartOver) how it all started, and [here](https://adem.ayt.ac/p/20180827_BlogUpdates), how the refactoring is started.

I'm posting today, because a new version is available(I forget to increase the version, but that's okay).

In my previious post I mentioned this todo list:
- Create a docker image, so I can easily redeploy the app on another server.
- Use git to store the posts, so it's backed up and versioned.
- So, if we are using git, why not add the settings/configurations also in git.
- I can also create some pages like this.

So here I will tell more about, what I did and how it ended, until today.

I skipped the first, third and last, no docker, no settings or other pages for now..., But my posts are now on another git repo, and my application is cloning that repo. And it works, yey :).

To start, I removed the "login" and "edit" pages, and mongo database. So I had an empty webpage. Then I tried git clone operations, with success, expect for pullinga repo... I don't know why it is failing on my server machine...So I fixed it by removing the posts folder and recloning it, this is just a quick fix, and I need to fix the git.pull. And because of that, I even created my own git server with Gogs, I'll write a tutorial on how I did it.

The format of the post is:
```md
[//]: # (title: Blog Updates p2)
[//]: # (tags: blog, git, refactoring)
[//]: # (publishdate: 2018-09-30 17:32:00)
[//]: # (published: true)

text...
...
```

Once the post repo is cloned, it will loop over every file, and extract those 4 meta information, and spill it in an object:

```js
{
  id: string, // fileName
  title: string, // title or fileName
  tags: [string], // split by ,
  pubDate: Date,
  published: boolean,
  body: string,
}
```

This object is saved in a database object(currently in-memory), so every time someone requests the posts, it will be delivered from the database object instead of going through all the files again.

So, what if the server crashes or I upload a new post or update an existing post or delete a post? With current setup, it's easy, but not really performant.
If the server reboots, the database object is empty, and is going through every file again and extract the data.
If the repository is modified(add/edit/delete), again, the process of going through every file and extracting data is performed and de database object is overwritten.

In the future, I'll update this to be more performant and use a real database.

But this is my current setup.


Thanks and take care
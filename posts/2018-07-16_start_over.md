---
{
  "title": "Start over",
  "tags": ["start", "blog"],
  "publishdate": "2018-07-16"
}
---


Finally, I finished my blog, again...

Developing it was the easiest part. So why did it take so long to finish it? There was some obstacles during the way, like most of the development. I will write down my journey on this post :).

Previously, I used Wordpress, Blogger, Scriptogr.am, ... to post, but every tool I used, has it's own ups and downs. And I needed to create an account on this tool, to use that tool and configure it like that to do have this behavior, use this theme, ... you know where it's going.

Some people are using them too, and they put some time and energy in setting the tool on how they want it. And they create a great blog.

Because of that I decided to create my own blogging system, I don't have to configure some settings, I just program it and voila. So my adventure has started.

First I backed up my posts, in [markdown](https://daringfireball.net/projects/markdown/) format, then I start thinking on how I would create it, in the past I developed in C#, Js, little PHP and Java, and currently I'm only developing in Js, so technology was not a problem. I used [NodeJS](https://nodejs.org/en/). Then I had to decide the framework/library to build the front and back-end.

Back-end was kind of simple, I used [ExpressJs](https://expressjs.com/), but there was couple of questions, like should I render the page or just create an API server which will be consumed? Should I store md files or save it in a database? Should I integrate with anything(Twitter, Facebook, Google+, ...)? Should I store user info for commenting or not? ... The questions can go on, but you get the point.

Some of the back-end questions depend on the front-end, so I need to finish that part as well, I wanted to use [Angular](https://angular.io/), for the front-end part, then decided to use React, to build a full application with it. So the back-end was going to be an API server, which will be consumed by my [React](https://reactjs.org/) front-end, but then suddenly I was doing lots of other things, so I put my blog development on the shelf for some time...

Changing my current job, moving to another city, baby is coming, thinking of other projects. It was nearly impossible to find some free time.

During that time I also get more interests in Free Software way of thinking, not that I'm a fully supporter of it, but I bought a Lenovo x200, upgraded it with 8gb RAM, SSD drive, flashed the bios to [libreboot](https://libreboot.org/)(with raspberry instead of a beaglebone), changed the wifi card, installed Trisquel, then changed to Parabola Gnu/Linux(with KDE). And I also use terminal a lot more, my mail client is [mutt](http://www.mutt.org/), calendar app is [khal](https://github.com/pimutils/khal) and rss reader is [newsboat](https://newsboat.org/). I also like to browse using [lynx](https://lynx.browser.org/). So this was a major point on deciding how to build my website, when I was reading some articles using newsboat(rss reader on terminal) and reading a medium article using lynx, I decided to create my blog lynx compatible and I also wanted rss feeds.

Lynx browser is just html, without js or css, so back-end can render those too, I will use pug for that, that's also decided. I created the first pages, but when I open the website on a regular Browser, I decided to add css, as less as possible, but still, it would be minimalist. But without js in the front-end at all.

Next, where to store the data, the options are file storage or database storage, I just decided to use [MongoDB](https://www.mongodb.com/), don't know why, but I also like the idea to store/upload files, and the server will render it, like scriptogr.am does(but it's taken off).

I found a old tutorial about rss page in Jade(old [Pug](https://pugjs.org/api/getting-started.html)), and changed little bits of the page to fully support Pug. You can find the article [here](https://davidwalsh.name/rss-express).
I also used that article for designing my MongoDB Schema, maybe that was the reason I used Mongo.

To create/edit (and delete, not implemented yet) posts, I need a secure section, for that I used [passportjs](http://www.passportjs.org/), which is the easiest way to create a login mechanism in NodeJs, I just used [passport-local](https://www.npmjs.com/package/passport-local). Then I created my secure edit page, the password is plain text, so I need to make it production friendly, but because the server is my own server, and connecting to server is over ssh, for the moment it's not a big deal. But later, I will hash the password and use the hashed version for comparing. Or add OAuth for not managing the login at all, but that's not really what I want, I want to keep that kind of information for my self. So I will create a SSO in the future, and hopefully post the progress of it here on my blog.

I used [marked](https://www.npmjs.com/package/marked) to render the markdown to html and serve it in pug.

So far I had a working blog. Here is a small summary:
- render blog-list, blog-detail, login, add/edit-post
- login using passportjs
- use mongoosejs for MongoDB connection
- model Schema's are done

My todo list contains those things:
- filter posts by tags
- search by keywords
- allow users to comment(simple comment implementation)
- tweet when publishing a post(twitter integration)

Filtering posts was a handy feature, so I added tags to my posts and made it clickable.
Searching was also great to learn how I can use mongoose to do some querying.
For comments feature, I could have used [Disqus](https://disqus.com/), but it also requires javascript and third party integration and configuration. So I created simple as possible commenting system, the user only have to fill 3 fields name, email and message, only message is mandatory, I will still have to fine-tune it, because it's not bug free, and also add localStorage for remembering the name and email, so you don't have to enter that each time, and of course add a "legal" not that I use cookies for only that purpose...
The last one was more of a integration with twitter, so each time I publish a post, it would automatically tweet from my twitter account the url of that post, for that I went to apps.twitter.com, when I entered the application info and agreed on the terms & conditions, Twitter obliged me to enter my phone number, at that point I didn't go further, and stop the integration process, so that's the reason I don't have a twitter integration.

Now I have some other todo's in my head, that I want to add to my blogging system, those are:
- hash the password.
- thinking a way to vote a comment, how to vote anonymously or not?
- replies to comments? maybe? or not necessary?
- search by date?
- create api, so people can get the posts as json, and I can create Angular/React version of my blog, and consume the api.
- create a terminal app to write down my posts, and publish it from it.

So things will get interesting, at least for me :).

Btw, if you are interested in the source code of my blog you can find it [here](https://github.com/aytacworld/blog "Github url yay").
When I started my blog, I already build some expressjs and passportjs applications, so to make it easy for myself, I created npm packages to handle the boilerplate code, I also used those package in my blog, those are [@aytacworld/express](https://www.npmjs.com/package/@aytacworld/express) and [@aytacworld/express-login](https://www.npmjs.com/package/@aytacworld/express-login), I will write down an article about those too, in the future.

Thanks and take care
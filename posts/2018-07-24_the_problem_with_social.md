---
{
  "title": "The problem with third party tools/integration",
  "tags": ["en", "twitter", "facebook", "amazon", "google", "development", "alexa", "google-assistant"],
  "publishdate": "2018-07-24"
}
---

Building an app is great, not only for work, but also as a hobby. Recently, I build my blog using ExpressJs... All went well, I just scrapped one of my todo, Twitter integration.

This feature was going to save me some time. When I'm publishing a new post, it was going to automatically tweet about it. Instead of browsing to [twitter.com](http://twitter.com/), then copy pasting the title and the link to my post manually.

So I went to [apps.twitter.com](http://apps.twitter.com/), clicked on create an account, fill in the form, checked the "Accept conditions" checkbox, then pressed the "create application"-button. But I was blocked, Twitter asked me to enter my phone number to create an application on twitter. In the past I gave my number to various sites, but recently I removed it, and don't want to give it anymore.

For my current project, I'm developing some cool things, like chatbots, voice control, service workers, ... So you need to create an account on those systems to be able to integrate their services. In this post I'll try to explain the difference third parties and what I have encountered and what I found really annoying about it.

## Twitter

This is a bit of a repetition of the intro of this post, but I'll explain more in detail.

It's easy to create a Twitter account, you just give in your "username" and "email". It's up to you to enter your real or pseudo name. And your ready to follow others, post tweets, pm, do whatever Twitter stuff you want to do.
You don't need to enter anything about your privacy, so it is great.

Another great thing about Twitter is that you don't need to install the application to use it on your smartphone. The site is a [PWA](https://en.wikipedia.org/wiki/Progressive_Web_Apps), so you can go to the website using a browser(Chrome on Android and Firefox Beta supports it, I didn't test it using regular Firefox), then create a shortcut of that page, and voila, you "installed" Twitter Lite on your smartphone.

But when you want to develop something for twitter, then you go to [dev.twitter.com](https://dev.twitter.com) but this is the Enterprise development website, you need to register and add your creditcard, ... So this is not really what you want if you just want to test or make some little integrations.

So there is another site, [apps.twitter.com](https://apps.twitter.com), here you can also just login with your twitter account. And you can create an application, this will give you your tokens, endpoints, ... which is needed for the integration part.

But the thing is, if you have created a new account on Twitter and you just entered your username, email and password. You can't create an application. Twitter will ask(demand) you to enter your mobile phone number, and validate it by sending a text message to that number. If you don't want to add your phone number, you can't go further.

So this is the big drawback from Twitter. If there is another way to do it, just let me know.

I found this really annoying, because currently I'm writing a blogpost and publishing it on my blog, once published I'll have to go to Twitter, then copy and paste the title and the url of the blogpost, then tweet. With the integration, it was going to send a tweet automatically, once I publish a blogpost...

## Facebook

In the past I created couple of times a Facebook account, then deleted again, forgot that I had one, then reactivated, ... But after the last time I deleted my Facebook account, I didn't create one and I don't have any intentions of doing it for my own. The previous creations was because of family, friends, ... who at the end convinced me to rejoin, but now I decided not to create an account at all. I will only create one if I need to do my job(integrate some features), but those accounts will only be for that project, and when I finish it, I will delete or never use that account, and while creating, I'll not enter any personal information. But last week I even decided not to do that, Let me explain why...

I created an account because I wanted to create a chatbot and use Messenger for that. I did, then I change from project, so I didn't login on facebook for a couple of days. Meanwhile, I was receiving to many emails from Facebook("Suggestions", "Long time no see, come and log back in", ...), so it was filling in my inbox with that kind of spam. I wanted to disable all notifications. After I logged in, Facebook was forcing me to enter my mobile phone number "for security purposes", and there wasn't any skip button, and there wasn't any "go to settings" link neighter... So I was stuck, I didn't enter my phonenumber, so I couldn't do anything at all.

Luckely I used an email account I created for that project only.

And so I decided to not use it at all.

Even if most of the people I know is using it, I won't go back to use it...

## Amazon

For another project, colleagues build an Alexa skill, my part was to build the backend that Alexa is using, so I can just mock the requests Alexa is sending my backend and respond it with the npm package that Alexa provides. So I don't need to create an account for that. It was just the first part...

So I builded the features and tested it using the mock data I created. But when I was asked to test it on the system itself, they asked me if I had an Amazon account.

Amazon has still the most populated website in my view, but you can easily create an account as well, and don't provide your real info. Of course, if you are going to buy something from them, at least your delivery address needs to be correct, but that's not the point of this post.

Then I wanted to change it to a developer account and browse to this site [developer.amazon.com/](https://developer.amazon.com/). It asked me to enter a whole form, asking for my real name, address, phone, credit card, ..., I asked my colleague, if there is another way.

Luckely there is, he sends me an invitation for the skill, so I don't need to fill the form, so I can just go to the admin page of that skill. I was happy, but not for long...

When I went to the page, Amazon asked to connect to a device or companion app. When I wanted to install the companion app, it asked me lot of permissions. I was like "Hell no", I'm not giving you those permissions.

Again, Luckely, my colleague logged out and logged in with my Amazon account on his smartphone and I have connected an Echo device with my account, then he logged of from his smartphone, but now I was able to skip the "connect device page", and proceed on the admin page of the skill. I was able to change the endpoints, and pointed to my dev machine and developed for a while and tested directly on Amazon Echo.

Then they have resetted the Echo device for a demo with their account, the day after I wanted to change the endpoints back to my dev machine, but again I was blocked by the "connect a device" page... Then I also found a test device in the material room at my work, and this is how I connected back the Echo device.

I wanted to create another skill, but without success. To create a new application, first you need to finish the form, filling all information...

## Google

The client also wanted to add Google Assistant as a channel next to Alexa, so I created a gmail account. One thing I like with Google is, if you create an account, you can use it on every service, and you don't need to update or upgrade your account for some services.

I just went to [console.actions.google.com](https://console.actions.google.com) and I was able to create a skill/application. I created a skill, modified my backend so it also accepts Google Assistant calls, refactored it, so both skills use the same logic.

And it never asked me for credit card or phone number or any other privacy information. So why are the other not be able to do it...

Google has a nice feature on the console too, you can directly use the simulator to test your skill, and it also replies like it should on a real device.

## Other services

Those were the only third parties I tried to integrate. When I try some new things I'll try to make a post on that as well.

Most of those services ask you for your personal data, so they can create a profile on your behave and advertise based on your data and even sell it. That's the reason why I stopped using most of the services and try to create my own.

The only social media I'm using next to my blog is Twitter. My point of view is, I only post or tweet something that I wanted to be public. If I want to share something personal with my family or friends, I don't use any of those services at all, I send it through encrypted channels.

Thanks and take care

---
{
  "title": "Git Backup",
  "tags": ["backup", "git", "sparkleshare"],
  "publishdate": "2018-08-27"
}
---

Some days ago, I updated my kernel. Then I worked on it, and shut it down. After a while, I restarted the laptop, but it freezed and I didn't know why...

I was able to use tty screens, so I plugged an usb flashdrive to copy all my documents. But then suddenly the usb drive was corrupt. So I needed to fix that first, which I did, by formatting it then I copied a lot of documents, projects, ... to a tiny usb flashdrive.

Then after searching the internet, I found a solution, which was to recompile some kde stuff.

So my files are backed up temporarily.
But how am I going to know which files are updated and which aren't for the next time, so I will overwrite each time my backed up files. This will consume lot of time... I know that I need a good backup system.

So why not use fit for that. It is incremental, and all files are versioned.

So first open a directory where you want to store your backup, then init git with bare options.
> git init --bare

Then go to your folder you want to back up. Clone the folder, and add ".gitignore" file to ignore some files if you want.

At last run the following and your files will be backed up.
> git add . && git commit -m "updates" && git push

If need to reverse a file, just use git command to achieve this.

But wait, there is [sparkeshare](https://www.sparkleshare.org/) who just do that, and as a plus, it also offers encrypted projects. I didn't use it, but I came it acros when I was looking for an alternative for dropbox or googledrive.

You can also achieve the encrypted part, by running some command from a githook ;)

Thanks and take care

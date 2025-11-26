---
{
  "title": "Compressing scanned pdf's",
  "tags": ["en", "bash", "pdf", "tool", "snippet"],
  "publishdate": "2018-07-18"
}
---

In my previous post, I told that I switched to Parabola GNU/Linux, it is one of the few libre os that exists. But using a libre os comes with a price, you have lesser options when it comes to nice tools, programs, devices. Of course, you have alternatives, but if you're not use to it, or don't find the one feature you want, there is just one option left, assemble some tools yourself and write things yourself. If you're not a developer or interested in writing stuff yourself, then it can give you headache, a lot.

On my previous used os's I was able to scan easily some documents, and save it as pdf, and the scan application, was doing the compression of it by default, but in Parabola GNU/Linux, you need to do it yourself.

Parabola is a stripped version of Arch linux(with stripped, I mean, all non-free stuff is removed), and you can't use AUR(next to the default repository, it contains most of the cool stuff). So I tried some scanning applications from the default repository. The one I use is xsane, you just install it with `sudo pacman -S xsane`, then the installation starts and you can start using it, the default GUI is easy to use, but old fashion design, but that's not a problem, as long as it works.

But when I scan 1 paper, the saved pdf is about 1.2MB, even if the file is just text without any color, or picture on it. And I scan a lot of documents.

So I start searching some compression tool for pdf, I found some online tools, but I don't want to upload my document. So I searched further for application, who runs locally, and if it's on terminal, I'm the happiest :)

I found `gs`. It was beautiful. You can just compress a pdf file using this command

```sh
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="<new file name>" "<file to compress>"
```

I just compressed a file of 1.2MB to 78.9KB, which is awesome. But I need to write the whole command each time, so I first wanted to create an alias, but I created a script file instead.

```sh
#!/bin/bash

if [ -z "${1}" ]; then
  echo "please use it as 'compress-pdf <filename>'"
else
  FILE=$1
  NEW_FILE=${FILE}.new.pdf
  echo compressing $FILE
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="${NEW_FILE}" "${FILE}"
fi
```
You can run this script: `compress-pdf file.pdf`
Then it will create __file.pdf.new.pdf__, then you can compare the size of both, keep the small file, remove the original and rename the new or just remove the new created file.
But doing this for a bunch of files... the script can also handle this part for us.

You can get the size of the file by executing `ls "<file name>" -s | cut -d " " -f 1`, this will get the size of the file.

so I added this also inside the script to compare the size of both files.

```sh
#!/bin/bash

if [ -z "${1}" ]; then
  echo "please use it as 'compress-pdf <filename>'"
else
  FILE=$1
  NEW_FILE=${FILE}.new.pdf
  echo compressing $FILE
  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -dNOPAUSE -dQUIET -dBATCH -sOutputFile="${NEW_FILE}" "${FILE}"
  ORIG_SIZE=$(ls "$FILE" -s | cut -d " " -f 1)
  NEW_SIZE=$(ls "${NEW_FILE}" -s | cut -d " " -f 1)
  if [ $ORIG_SIZE -lt $NEW_SIZE ]; then
    rm "${NEW_FILE}"
  else
    mv "${FILE}" "${FILE}.original"
    mv "${NEW_FILE}" "${FILE}"
  fi
fi
```

Now it will try to compress file, if the new file is bigger than the original, it will remove it, if not it will rename the original file(add ".orignal" at the end of the name), so you can control if the new file is readable enough, before deleting the old one.

As a bonus, you can move this file to `/usr/local/bin`, so it will be accessible from any where :). You can move your script with this command `sudo mv <relative path to your file> /usr/local/bin/compress-pdf`.

You can find the latest version of the file [here](https://gist.github.com/aytacworld/849a3b74009b641e9ad35fc0da2d3ddb "Gist").

Thanks and take care

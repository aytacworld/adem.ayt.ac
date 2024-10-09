---
{
  "title": "DisplayLink kernel update on Manjaro",
  "tags": ["troubleshouting", "reminder", "manjaro", "displaylink"],
  "publishdate": "2024-10-09 11:00:00"
}
---

It's been a while that I use Manjaro, my laptop has two usb-c ports, one usb-a and one jack port.
When I'm on my desk I'm connecting to a docking station, to handle all the display, usb stuff.
(Message to myself: In a separate post, I write down my hardware, software and desktop setup, if I find the courage and 
don't forget to don't)

Recently I updated my system, during the update linux kernel also got updated, but the problem is that
the linux-header packages aren't included in this update. 

Normally this wouldn't be an issue, but since my docking station is DisplayLink device, so I need 
to install 2 packages from aur "evdi" and "display-link". (In the past I had some issues, so I installed "evdi-git")

`systemctl status displaylink.service` showed that there was an error, so the service
couldn't start.

`journalctl -xeu displaylink.service` showed this specific issue `modprobe: FATAL: Module evdi not found in directory /lib/modules/6.10.11-2-MANJARO`

I tried to search on internet for a solution, some people using Arch were also having 
this issue, so they downgraded evdi to version 1.14.6 and it got fixed.

I removed evdi-git and displaylink(because evdi is a breaking dependency of displaylink package)

```
pamac remove evdi-git displaylink
pamac install evdi displaylink
```

During the installation of the packages, I noticed that the install process is calling

```
dkms install --no-depmod evdi/1.14.6 -k 5.15.167-1-MANJARO
dkms install --no-depmod evdi/1.14.6 -k 6.6.52-1-MANJARO
```
As you can see the evdi module didn't get installed for the last kernel.

I run the code myself using my latest kernel, I received this error message
```
dkms install --no-depmod evdi/1.14.6 -k 6.6.52-1-MANJARO
```
But got another error instead.

```
Error! Your kernel headers for kernel 6.10.11-2-MANJARO cannot be found at /usr/lib/modules/6.10.11-2-MANJARO/build or /usr/lib/modules/6.10.11-2-MANJARO/source
```
And the error also suggested that I install the linux-headers for that kernel version if I want to use it.

To get the installed versions package name I did `pacman -Q | grep -e "linux6"`, this command returned all 
the packages installed that contained linux6
```
linux610 6.10.11-2
linux66 6.6.52-1
linux66-headers 6.6.52-1
```
So I run `pacman -S linux610-headers`, which executed dkms command with latest kernel version as well.

Then I run `xrandr --listproviders`, which didn't showed the monitors connected to docking station

Then I tried `systemctl start displaylink.service`, which started the service and I just saw that my laptop monitor flashed for a moment and my
main monitor opened(but didn't showed anything yet).

Then I re-run `xrandr --listproviders`, now it showed my main monitor. So I finally got it working again.

This issue solved my displaylink problem on my Manjaro system. (Another message to myself:
"write another blogpost about what I feel using displaylink")

Most of the commands are run with `sudo`.

Kind regards

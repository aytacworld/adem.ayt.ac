---
{
  "title": "DisplayLink strikes again",
  "tags": ["en", "troubleshouting", "reminder", "manjaro", "displaylink"],
  "publishdate": "2025-12-29 22:00:00"
}
---

A year ago, I had (nearly) the same issue, so I 
[looked](https://adem.ayt.ac/p/2024-10-09_displaylink) that up. I updated 
my laptop, and also the kernel packages to v6.18.2. This time I didn't 
forget to update the "-headers" package, but after rebooting, the external
monitor didn't worked. Followed the same troubleshooting as the previous time.
And it was the same, evdi didn't get compiled/build/maked for the new kernel.

Well... Actually, the package didn't existed anymore in the repository... So
I couldn't just update them to the latest and hope that it will work... it 
got renamed to "evdi-dkms". While trying to update evdi to evdi-dkms,
displaylink package was blocking it... for some reason...(probably, it 
depends on evdi, so pacman tried to remove evdi before installing evdi-dkms,
so it got confused...)

The fix was to remove evdi AND displaylink completely. And reinstall the 
new packages.

```
sudo pacman -R evdi displaylink
sudo pacman -S evdi displaylink
```

The removed packages are `displaylink-6.2-1` and `evdi-1.14.10-1`.
The installed packages are `displaylink-6.2-1` and `evdi-dkms-1.14.11-2`.

Also I entered exactly the command above, so it's not a typo, I entered 
`evdi` and pacman installed `evdi-dkms`, I guess it is also aliased to the
correct package, which is great :)

Removing and reinstaling (the same version of) displaylink was the easiest
way, instead of updating evdi (renamed) package and trying to fix the
conflicts.

After installing is done, just stop and restart the displaylink service and 
the monitor will work again.

```
sudo systemctl stop displaylink.service
sudo systemctl start displaylink.service
```

In my previous post about this issue, I refered to myseld to write down how I
feel towards displaylink. So here it is:

I hate to install additional packages to just use a hub, to extend and use
another monitor... The previous hub I used, didn't required that I install 
extra drivers to just be able to use external monitors. It just worked, the 
reason I changed to this one was, that it didn't supported multiple screens 
with different resolutions, but it never consumed too much cpu power, I didn't
needed aur/yay to install a driver.
The most frustrating part is that an update can just make you lose a couple
hours extra after the "actual" update process... because the package is not
available anymore, or they renamed it to make it "more consistent"...
Ok, ok, I do admit, I liked it the evdi and displaylink packages are moved
to main repository instead of aur, which kind of increases the feeling of
trust, and also that it works with the latest kernel(I didn't payed attention,
but, apparently, I was using an old kernel, which I also noticed during this
fix, so I updated that also).


Kind regards

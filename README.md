Bookmarklets <sub>by Korri</sub>
=====================

I love bookmarklets, they are handy and powerful, so I decided to make (or improve) a few ones to help me in my everyday browser usage (mostly for web developpment).

This repository contains the following :
* `.js` files wich contains the bookmarklet uncompressed code.
* `.bookmarklet.js` files that contains the compressed version of the bookmarklet.
* A `to_bookmarklet.php` file that converts the first into the second.
    * Usage: `php to_bookmarklet.php my_javascript_source.js`

Right now there is only One bookmarklet here :

ReCss <sub>(with [-prefix-free](http://leaverou.github.io/prefixfree/) support)</sub>
-------------------------------

I have allways used ReCss in order to reload only css when integrating a web page, but it is broken by [-prefix-free](http://leaverou.github.io/prefixfree/) (wich I use a lot now), so I made a version that takes care of this conflict.

Based on work by David Schontzler and Calvin Conaway : http://calvinconaway.com/2006/02/13/re-recss/

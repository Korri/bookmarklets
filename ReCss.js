var i, a, s, l, h;
a = document.getElementsByTagName('link');
for (i = 0; i < a.length; i++) {
    s = a[i];
    if (s.rel.toLowerCase().indexOf('stylesheet') >= 0 && s.href) {
        var h = s.href.replace(/(&|\?)forceReload=\d+/, '');
        s.href = h + (h.indexOf('?') >= 0 ? '&' : '?') + 'forceReload=' + (new Date().valueOf());
    }
}
//Let's see if prefixfree is running on this page
if(typeof StyleFix !== 'undefined') {
    a = document.getElementsByTagName('style');
    for (i = 0; i < a.length;/* We don't increment i as replacing a <style> tag by a <link> tag will remove it from "a" */) {
        s = a[i];
        h = s.getAttribute('data-href');
        if(h) {
            var l = document.createElement('link');
            l.rel = 'stylesheet';
            l.media = s.media;
            l.disabled = s.disabled;
            h = h.replace(/(&|\?)forceReload=\d+/, '');
            l.href  = h + (h.indexOf('?') >= 0 ? '&' : '?') + 'forceReload=' + (new Date().valueOf());

            s.parentNode.insertBefore(l, s);
            s.parentNode.removeChild(s);
        }else {
            //<style> won't be removed, so this time we need to increment i
            i++;
        }
    }
    StyleFix.process();
}
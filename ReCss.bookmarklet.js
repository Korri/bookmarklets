javascript:void(function(){var i,a,s,l,h;a=document.getElementsByTagName('link');for(i=0;i<a.length;i++){s=a[i];if(s.rel.toLowerCase().indexOf('stylesheet')>=0&&s.href){var h=s.href.replace(/(&|\?)forceReload=\d+/,'');s.href=h+(h.indexOf('?')>=0?'&':'?')+'forceReload='+(new Date().valueOf());}}if(typeof StyleFix!=='undefined'){a=document.getElementsByTagName('style');for(i=0;i<a.length;){console.log(i,'++',a.length);s=a[i];h=s.getAttribute('data-href');if(h){var l=document.createElement('link');l.rel='stylesheet';l.media=s.media;l.disabled=s.disabled;h=h.replace(/(&|\?)forceReload=\d+/,'');l.href=h+(h.indexOf('?')>=0?'&':'?')+'forceReload='+(new Date().valueOf());s.parentNode.insertBefore(l,s);s.parentNode.removeChild(s);}else{i++;}}StyleFix.process();}})();
(function(g){var window=this;'use strict';var PNa=function(a,b){a.Na("onAutonavCoundownStarted",b)},y5=function(a,b,c){var d=b.fb();
g.N(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Ke(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.rH&&(b.lengthText?(f=b.lengthText||null,h=b.Yw||null):b.lengthSeconds&&(f=g.tM(b.lengthSeconds),h=g.tM(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.sN(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.rH?b.isLivePlayback:null,n=b instanceof g.rH?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.us||g.eJ("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.Im(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.ys};b instanceof g.tN&&(d.playlist_length=b.length);a.update(d)},z5=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",L:"ytp-autonav-suggestion-card",V:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],V:{style:"{{background}}"},S:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",
Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"},{D:"div",L:"ytp-autonav-list-overlay",S:[{D:"div",L:"ytp-autonav-mix-text",oa:"Mix"},{D:"div",L:"ytp-autonav-mix-icon"}]}]},{D:"div",Ca:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],oa:"{{title}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],oa:"{{author}}"},{D:"div",Ca:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],oa:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.i=c;this.Ra("click",this.onClick);this.Ra("keypress",this.l)},B5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",L:"ytp-autonav-endscreen-upnext-container",V:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",L:"ytp-autonav-endscreen-upnext-header"},{D:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",oa:"{{autoplayAlternativeHeader}}"},
{D:"a",L:"ytp-autonav-endscreen-link-container",V:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",V:{style:"{{background}}"},S:[{D:"div",V:{"aria-label":"{{timestamp}}"},Ca:["ytp-autonav-timestamp"],oa:"{{duration}}"},{D:"div",Ca:["ytp-autonav-live-stamp"],oa:"Live"},{D:"div",Ca:["ytp-autonav-upcoming-stamp"],oa:"Upcoming"}]},{D:"div",L:"ytp-autonav-endscreen-video-info",S:[{D:"div",L:"ytp-autonav-endscreen-premium-badge"},{D:"div",L:"ytp-autonav-endscreen-upnext-title",
oa:"{{title}}"},{D:"div",L:"ytp-autonav-endscreen-upnext-author",oa:"{{author}}"},{D:"div",L:"ytp-autonav-view-and-date",oa:"{{views_and_publish_time}}"},{D:"div",L:"ytp-autonav-author-and-view",oa:"{{author_and_views}}"}]}]}]});g.F(this,this.i);this.i.ya(this.element);d||this.N(this.i.Ba("ytp-autonav-endscreen-link-container"),"click",this.OE);this.I.Xb(this.element,this,115127);this.I.Xb(this.i.Ba("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({D:"div",L:"ytp-autonav-overlay"});
g.F(this,this.overlay);this.overlay.ya(this.element);this.u=new g.V({D:"div",L:"ytp-autonav-endscreen-button-container"});g.F(this,this.u);this.u.ya(this.element);this.cancelButton=new g.V({D:"button",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],V:{"aria-label":"Cancel autoplay"},oa:"Cancel"});g.F(this,this.cancelButton);this.cancelButton.ya(this.u.element);this.cancelButton.Ra("click",this.TM,this);this.I.Xb(this.cancelButton.element,this,115129);this.playButton=
new g.V({D:"a",Ca:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],V:{href:"{{url}}",role:"button","aria-label":"Play next video"},oa:"Play Now"});g.F(this,this.playButton);this.playButton.ya(this.u.element);this.playButton.Ra("click",this.OE,this);this.I.Xb(this.playButton.element,this,115130);this.B=new g.J(function(){A5(c)},500);
g.F(this,this.B);this.NE();this.N(a,"autonavvisibility",this.NE)},A5=function(a){var b=C5(a),c=Math,d=c.min;
var e=a.l?Date.now()-a.l:0;c=d.call(c,e,b);D5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.qh()?a.select(!0):a.qh()&&a.B.start()},C5=function(a){var b=a.I.Eo();
return 0<=b?b:g.T(a.I.T().experiments,"autoplay_time")||1E4},D5=function(a,b){b=void 0===b?-1:b;
a=a.i.Ba("ytp-autonav-endscreen-upnext-header");g.pg(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(/\$SECONDS/gi)[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.og("Up next in $SECONDS".slice(0,d)));var e=g.ng("span");g.Lq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.ug(e,b);a.appendChild(e);a.appendChild(g.og("Up next in $SECONDS".slice(d+c.length)));return}}g.ug(a,"Up next")},E5=function(a,b){g.V.call(this,{D:"div",
Ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},G5=function(a){g.V.call(this,{D:"div",
Ca:["ytp-upnext","ytp-player-content"],V:{"aria-label":"{{aria_label}}"},S:[{D:"div",L:"ytp-cued-thumbnail-overlay-image",V:{style:"{{background}}"}},{D:"span",L:"ytp-upnext-top",S:[{D:"span",L:"ytp-upnext-header",oa:"Up Next"},{D:"span",L:"ytp-upnext-title",oa:"{{title}}"},{D:"span",L:"ytp-upnext-author",oa:"{{author}}"}]},{D:"a",L:"ytp-upnext-autoplay-icon",V:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",V:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",L:"ytp-svg-autoplay-circle",V:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",L:"ytp-svg-autoplay-ring",V:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",L:"ytp-svg-fill",V:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",L:"ytp-upnext-bottom",S:[{D:"span",L:"ytp-upnext-cancel"},{D:"span",L:"ytp-upnext-paused",
oa:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Ba("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.J(this.Rv,5E3,this);this.l=0;var b=this.Ba("ytp-upnext-cancel");this.cancelButton=new g.V({D:"button",Ca:["ytp-upnext-cancel-button","ytp-button"],V:{tabindex:"0","aria-label":"Cancel autoplay"},oa:"Cancel"});g.F(this,this.cancelButton);this.cancelButton.Ra("click",this.UM,this);this.cancelButton.ya(b);this.cancelButton&&this.api.Xb(this.cancelButton.element,
this,115129);g.F(this,this.B);this.api.Xb(this.element,this,18788);b=this.Ba("ytp-upnext-autoplay-icon");this.N(b,"click",this.VM);this.api.Xb(b,this,115130);this.PE();this.N(a,"autonavvisibility",this.PE);this.N(a,"mdxnowautoplaying",this.OR);this.N(a,"mdxautoplaycanceled",this.PR);this.N(a,"mdxautoplayupnext",this.VK);F5(this)&&(a=(a=g.kN(this.api.rb()))?a.UO():null)&&this.VK(a);g.N(this.element,"ytp-upnext-mobile",this.api.T().i)},F5=function(a){return 3===a.api.getPresentingPlayerType()},QNa=
function(a,b){return b?b:0<=a.api.Eo()?a.api.Eo():g.T(a.api.T().experiments,"autoplay_time")||1E4},H5=function(a,b){b=QNa(a,b);
var c=Math,d=c.min;var e=(0,g.P)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.qh()&&!F5(a)?a.select(!0):a.qh()&&a.i.start()},I5=function(a){E5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",L:"ytp-suggestion-panel",S:[{D:"div",Ca:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],oa:"More videos"}]});this.J=new g.V({D:"div",L:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new B5(this.player);g.F(this,this.l);this.l.ya(this.element);a.getVideoData().Nb?this.i=this.l:(this.i=new G5(a),g.oN(this.player,this.i.element,4),g.F(this,this.i));this.overlay=
new g.V({D:"div",L:"ytp-autonav-overlay-cancelled-state"});g.F(this,this.overlay);this.overlay.ya(this.element);this.B=new g.qN(this);g.F(this,this.B);g.F(this,this.table);this.table.ya(this.element);this.table.show();g.F(this,this.J);this.J.ya(this.table.element);this.hide()},RNa=function(a,b){return g.Oe(b.suggestions,function(c){c=g.UP(a.player.T(),c);
g.F(a,c);return c})},J5=function(a){var b=a.Ld();
b!==a.C&&(a.C=b,a.player.W("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},K5=function(a){E5.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",L:"ytp-subscribe-card",S:[{D:"img",L:"ytp-author-image",V:{src:"{{profilePicture}}"}},{D:"div",L:"ytp-subscribe-card-right",S:[{D:"div",L:"ytp-author-name",oa:"{{author}}"},{D:"div",L:"html5-subscribe-button-container"}]}]});g.F(this,this.i);this.i.ya(this.element);var b=a.getVideoData();this.subscribeButton=new g.GO("Subscribe",null,"Unsubscribe",null,!0,!1,b.Fh,b.subscribed,"trailer-endscreen",null,null,a);g.F(this,this.subscribeButton);this.subscribeButton.ya(this.i.Ba("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Ma);this.Ma();this.hide()},L5=function(a){var b=a.T(),c=g.aj||g.Uk?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Ca:e,V:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",L:"ytp-videowall-still-image",V:{style:"{{background}}"}},{D:"span",L:"ytp-videowall-still-info",S:[{D:"span",L:"ytp-videowall-still-info-bg",S:[{D:"span",L:"ytp-videowall-still-info-content",V:c,S:[{D:"span",L:"ytp-videowall-still-info-title",oa:"{{title}}"},{D:"span",L:"ytp-videowall-still-info-author",
oa:"{{author_and_views}}"},{D:"span",L:"ytp-videowall-still-info-live",oa:"Live"},{D:"span",L:"ytp-videowall-still-info-duration",oa:"{{duration}}"}]}]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",L:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",oa:"{{playlist_length}}"},")"]}]},{D:"span",Ca:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",L:"ytp-videowall-still-listlabel-length",oa:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.qN(this);g.F(this,this.i);this.Ra("click",this.onClick);this.Ra("keypress",this.u);this.i.N(a,"videodatachange",this.kb);a.Ig(this.element,this);this.kb()},M5=function(a){E5.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.K=null;this.l=new g.qN(this);g.F(this,this.l);this.G=new g.J(function(){g.K(b.element,"ytp-show-tiles")},0);
g.F(this,this.G);var c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-previous"],V:{"aria-label":"Previous"},S:[g.BL()]});g.F(this,c);c.ya(this.element);c.Ra("click",this.ZM,this);this.table=new g.tL({D:"div",L:"ytp-endscreen-content"});g.F(this,this.table);this.table.ya(this.element);c=new g.V({D:"button",Ca:["ytp-button","ytp-endscreen-next"],V:{"aria-label":"Next"},S:[g.CL()]});g.F(this,c);c.ya(this.element);c.Ra("click",this.YM,this);a.getVideoData().Nb?this.i=new B5(a,!0):this.i=new G5(a);
g.F(this,this.i);g.oN(this.player,this.i.element,4);this.hide()},N5=function(a){return g.pN(a.player)&&a.xs()&&!a.B},SNa=function(a,b){return g.Oe(b.suggestions,function(c){c=g.UP(a.I.T(),c);
g.F(a,c);return c})},O5=function(a){var b=a.Ld();
b!==a.J&&(a.J=b,a.player.W("autonavvisibility"))},P5=function(a){g.zN.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.qN(this);g.F(this,this.listeners);this.env=a.T();TNa(a)?(this.u=!0,UNa(this),this.i?this.endScreen=new I5(a):this.endScreen=new M5(this.player)):this.env.wc?this.endScreen=new K5(this.player):this.endScreen=new E5(this.player);g.F(this,this.endScreen);g.oN(this.player,this.endScreen.element,4);VNa(this);this.listeners.N(a,"videodatachange",this.kb,this);this.listeners.N(a,g.Iz("endscreen"),function(c){b.yd(c)});
this.listeners.N(a,g.Jz("endscreen"),function(c){b.bf(c)})},UNa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.rh&&a.l===b.Nb)return!1;a.i=b.rh;a.l=b.Nb;return!0},TNa=function(a){a=a.T();
return a.qb&&!a.wc},VNa=function(a){a.player.df("endscreen");
var b=a.player.getVideoData();b=new g.Fz(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.Fz(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Dd([b,c])};
g.hN.prototype.Eo=g.ca(2,function(){return this.app.Eo()});
g.gY.prototype.Eo=g.ca(1,function(){return this.getVideoData().NF});
g.v(z5,g.V);z5.prototype.select=function(){(this.I.tj(this.suggestion.fb().videoId,this.suggestion.Qd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.PA||void 0)||this.I.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Fb(this.element)};
z5.prototype.onClick=function(a){g.YN(a,this.I,this.i,this.suggestion.Qd||void 0)&&this.select()};
z5.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.Vt(a)||(this.select(),g.Ut(a))}};
z5.prototype.je=function(a){g.N(this.element,"ytp-suggestion-card-with-margin",a)};g.v(B5,g.V);g.k=B5.prototype;g.k.Yr=function(a){this.suggestion!==a&&(this.suggestion=a,y5(this.i,a),this.playButton.Sa("url",this.suggestion.Im()),this.je())};
g.k.je=function(){var a=this.I.Ri(!0,this.I.isFullscreen());g.N(this.element,"ytp-autonav-endscreen-small-mode",this.Ye(a));g.N(this.element,"ytp-autonav-endscreen-is-premium",!!this.suggestion&&!!this.suggestion.oy);g.N(this.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!this.I.Ld());g.N(this.I.getRootNode(),"countdown-running",this.qh());g.N(this.element,"ytp-player-content",this.I.Ld());g.zl(this.overlay.element,{width:a.width+"px"});if(!this.qh()){this.I.Ld()?D5(this,Math.round(C5(this)/
1E3)):D5(this);a=!!this.suggestion&&!!this.suggestion.ys;var b=this.I.Ld()||!a;g.N(this.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!b&&a);g.N(this.element,"ytp-autonav-endscreen-upnext-no-alternative-header",b&&!a);g.wL(this.u,this.I.Ld())}};
g.k.qh=function(){return 0<this.l};
g.k.vr=function(){this.qh()||(this.l=Date.now(),A5(this),PNa(this.I,C5(this)),g.N(this.I.getRootNode(),"countdown-running",this.qh()))};
g.k.jp=function(){this.Pl();A5(this);var a=this.i.Ba("ytp-autonav-endscreen-upnext-header");a&&g.ug(a,"Up next")};
g.k.Pl=function(){this.qh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.Pl()};
g.k.OE=function(a){g.YN(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Fb(this.playButton.element):a.currentTarget===this.i.Ba("ytp-autonav-endscreen-link-container")&&(a=this.i.Ba("ytp-autonav-endscreen-link-container"),this.I.ib(a,!0),this.I.Fb(a)),this.select())};
g.k.TM=function(){this.I.Fb(this.cancelButton.element);g.jN(this.I,!0)};
g.k.NE=function(){var a=this.I.Ld();this.C&&this.vb!==a&&g.wL(this,a);this.je();this.I.ib(this.element,a);this.I.ib(this.cancelButton.element,a);this.I.ib(this.i.Ba("ytp-autonav-endscreen-link-container"),a);this.I.ib(this.playButton.element,a)};
g.k.Ye=function(a){return 400>a.width||459>a.height};g.v(E5,g.V);g.k=E5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.xs=function(){return!1};
g.k.Ld=function(){return!1};
g.k.VH=function(){return!1};g.v(G5,g.V);g.k=G5.prototype;g.k.Rv=function(){this.notification&&(this.B.stop(),this.fc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.Yr=function(a){this.suggestion=a;y5(this,a,"hqdefault.jpg")};
g.k.PE=function(){g.wL(this,this.api.Ld());this.api.ib(this.element,this.api.Ld());this.api.ib(this.Ba("ytp-upnext-autoplay-icon"),this.api.Ld());this.cancelButton&&this.api.ib(this.cancelButton.element,this.api.Ld())};
g.k.ZR=function(){window.focus();this.Rv()};
g.k.vr=function(a){var b=this;this.qh()||(g.yu("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.P)(),this.i=new g.J(function(){H5(b,a)},25),H5(this,a),PNa(this.api,QNa(this,a)));
g.Oq(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.qh=function(){return!!this.i};
g.k.jp=function(){this.Pl();this.l=(0,g.P)();H5(this);g.K(this.element,"ytp-upnext-autoplay-paused")};
g.k.Pl=function(){this.qh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.S(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.fb(),this.Rv(),this.notification=new Notification("Up Next",{body:b.title,icon:b.Ke()}),this.u=this.N(this.notification,"click",this.ZR),this.B.start())}this.Pl();this.api.nextVideo(!1,a)};
g.k.VM=function(a){!g.tg(this.cancelButton.element,g.Qt(a))&&g.YN(a,this.api)&&(this.api.Ld()&&this.api.Fb(this.Ba("ytp-upnext-autoplay-icon")),this.select())};
g.k.UM=function(){this.api.Ld()&&this.cancelButton&&this.api.Fb(this.cancelButton.element);g.jN(this.api,!0)};
g.k.OR=function(a){F5(this);this.show();this.vr(a)};
g.k.VK=function(a){F5(this);this.suggestion&&this.suggestion.fb().videoId===a.fb().videoId||this.Yr(a)};
g.k.PR=function(){F5(this);this.Pl();this.hide()};
g.k.ra=function(){this.Pl();this.Rv();g.V.prototype.ra.call(this)};g.v(I5,E5);g.k=I5.prototype;g.k.create=function(){E5.prototype.create.call(this);this.B.N(this.player,"appresize",this.je);this.B.N(this.player,"onVideoAreaChange",this.je);this.B.N(this.player,"videodatachange",this.kb);this.B.N(this.player,"autonavchange",this.QE);this.B.N(this.player,"autonavcancel",this.WM);this.kb()};
g.k.show=function(){E5.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.jN(this.player,!1);g.pN(this.player)&&this.xs()&&!this.u?(J5(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.vr():3===this.videoData.autonavState&&this.i.jp()):(g.jN(this.player,!0),J5(this));this.je()};
g.k.hide=function(){E5.prototype.hide.call(this);this.i.jp();J5(this)};
g.k.je=function(){var a=this.player.Ri(!0,this.player.isFullscreen());J5(this);this.l.je();g.N(this.element,"ytp-autonav-cancelled-small-mode",this.Ye(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.Sw(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.zl(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){b=g.q(b.value);var c=b.next().value;b.next().value.je(1===c%2)}}};
g.k.kb=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=RNa(this,a))&&this.suggestions.length)for(this.i.Yr(this.suggestions[0]),this.i!==this.l&&this.l.Yr(this.suggestions[0]),a=0;a<WNa.length;++a){var b=WNa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new z5(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,y5(c,b));g.F(this,this.videos[a]);this.videos[a].ya(this.J.element)}}this.je()}};
g.k.QE=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.Pl(),this.vb&&this.je()):(this.G=!0,this.Ld()&&(2===a?this.i.vr():3===a&&this.i.jp()))};
g.k.WM=function(a){a?this.QE(1):(this.u=null,this.G=!1)};
g.k.xs=function(){return 1!==this.videoData.autonavState};
g.k.Ye=function(a){return(910>a.width||459>a.height)&&!this.Sw(a)&&!(400>=a.width||360>=a.height)};
g.k.Sw=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Ld=function(){return this.vb&&g.pN(this.player)&&this.xs()&&!this.u};
var WNa=[1,3,2,4];g.v(K5,E5);K5.prototype.Ma=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.rg,author:a.author});this.subscribeButton.channelId=a.Fh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.v(L5,g.V);L5.prototype.select=function(){(this.api.tj(this.suggestion.fb().videoId,this.suggestion.Qd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.PA||void 0)||this.api.Z("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Fb(this.element)};
L5.prototype.onClick=function(a){g.YN(a,this.api,this.l,this.suggestion.Qd||void 0)&&this.select()};
L5.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.Vt(a)||(this.select(),g.Ut(a))}};
L5.prototype.kb=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.v(M5,E5);g.k=M5.prototype;g.k.create=function(){E5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=SNa(this,a),this.videoData=a);this.je();this.l.N(this.player,"appresize",this.je);this.l.N(this.player,"onVideoAreaChange",this.je);this.l.N(this.player,"videodatachange",this.kb);this.l.N(this.player,"autonavchange",this.Az);this.l.N(this.player,"autonavcancel",this.XM);a=this.videoData.autonavState;a!==this.K&&this.Az(a);this.l.N(this.element,"transitionend",this.rT)};
g.k.destroy=function(){g.ox(this.l);g.ff(this.stills);this.stills=[];this.suggestions=null;E5.prototype.destroy.call(this);g.Oq(this.element,"ytp-show-tiles");this.G.stop();this.K=this.videoData.autonavState};
g.k.xs=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){E5.prototype.show.call(this);g.Oq(this.element,"ytp-show-tiles");this.player.T().i?g.Fq(this.G):this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.jN(this.player,!1);N5(this)?(O5(this),2===this.videoData.autonavState?this.player.T().Z("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.vr():3===this.videoData.autonavState&&this.i.jp()):(g.jN(this.player,!0),O5(this))};
g.k.hide=function(){E5.prototype.hide.call(this);this.i.jp();O5(this)};
g.k.rT=function(a){g.Qt(a)===this.element&&this.je()};
g.k.je=function(){if(this.suggestions&&this.suggestions.length){g.K(this.element,"ytp-endscreen-paginate");var a=this.I.Ri(!0,this.I.isFullscreen()),b=g.eN(this.I);b&&(b=b.Ae()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Nl(a,m,n);g.zl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.Yr(this.suggestions[0]);this.i instanceof B5&&this.i.je();g.N(this.element,"ytp-endscreen-takeover",N5(this));O5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?
r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.Nf(p+this.u,l),0!==r){t=this.stills[c];t||(t=new L5(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,B=Math.floor(m*(f+r)/b)-x-4;g.Gl(t.element,x,u);g.Nl(t.element,B,y);g.zl(t.element,"transitionDelay",(h+f)/20+"s");g.N(t.element,"ytp-videowall-still-mini",1===r);g.N(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.Mq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",y5(r,p,u),g.MF(t)&&(t=p.Im(),t=g.ti(t,g.CO("emb_rel_end")),r.Sa("url",t)),(p=(p=p.Qd)&&p.itct)&&r.api.Nl(r.element,p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.rg(e.element),g.ef(e);this.stills.length=c}};
g.k.kb=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=SNa(this,a),this.videoData=a,this.je())};
g.k.YM=function(){this.u+=this.stills.length;this.je()};
g.k.ZM=function(){this.u-=this.stills.length;this.je()};
g.k.VH=function(){return this.i.qh()};
g.k.Az=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.Pl(),this.vb&&this.je()):(this.C=!0,this.vb&&N5(this)&&(2===a?this.i.vr():3===a&&this.i.jp()))};
g.k.XM=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.ib(this.stills[a].element,!0);this.Az(1)}else this.B=null,this.C=!1;this.je()};
g.k.Ld=function(){return this.vb&&N5(this)};g.v(P5,g.zN);g.k=P5.prototype;g.k.Ap=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!TNa(this.player)||b;var c=a.dd||g.XF(a.B),d=this.player.Us();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Ld=function(){return this.endScreen.Ld()};
g.k.GP=function(){return this.Ld()?this.endScreen.VH():!1};
g.k.ra=function(){this.player.df("endscreen");g.zN.prototype.ra.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.KF;if(b&&b.videoId){var c=this.player.rb().od.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.lE?a=!1:(this.player.tj(b.videoId,void 0,void 0,!0,!0,b),c&&c.dx("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.zN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.zN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.yd=function(a){this.Ap()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.bf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.kb=function(){VNa(this);this.u&&UNa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new I5(this.player):this.endScreen=new M5(this.player),g.F(this,this.endScreen),g.oN(this.player,this.endScreen.element,4))};g.KN.endscreen=P5;})(_yt_player);

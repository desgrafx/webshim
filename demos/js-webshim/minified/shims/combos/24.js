(function(a){if(!Modernizr.genericDOM){var c=document,j,l,r=/<([\w:]+)/,p={option:1,optgroup:1,legend:1,thead:1,tr:1,td:1,col:1,area:1};a.webshims.fixHTML5=function(a){if("string"!=typeof a||p[(r.exec(a)||["",""])[1].toLowerCase()])return a;if(!l){j=c.body;if(!j)return a;l=c.createElement("div");l.style.display="none"}var u=l.cloneNode(!1);j.appendChild(u);u.innerHTML=a;j.removeChild(u);return u.childNodes}}})(jQuery);
jQuery.webshims.register("dom-extend",function(a,c,j,l,r){var p=c.modules,s=/\s*,\s*/,u={},v={},t={},q={},w={},x=a.fn.val,b=function(d,e,f,h,g){return g?x.call(a(d)):x.call(a(d),f)};a.fn.val=function(d){var e=this[0];arguments.length&&null==d&&(d="");if(!arguments.length)return!e||1!==e.nodeType?x.call(this):a.prop(e,"value",d,"val",!0);if(a.isArray(d))return x.apply(this,arguments);var f=a.isFunction(d);return this.each(function(h){e=this;1===e.nodeType&&(f?(h=d.call(e,h,a.prop(e,"value",r,"val",
!0)),null==h&&(h=""),a.prop(e,"value",h,"val")):a.prop(e,"value",d,"val"))})};var n="_webshimsLib"+Math.round(1E3*Math.random()),o=function(d,e,f){d=d.jquery?d[0]:d;if(!d)return f||{};var h=a.data(d,n);f!==r&&(h||(h=a.data(d,n,{})),e&&(h[e]=f));return e?h&&h[e]:h};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(d){a.fn[d.name]=function(){return this.map(function(){var a=o(this,
"shadowData");return a&&a[d.prop]||this})}});["removeAttr","prop","attr"].forEach(function(d){u[d]=a[d];a[d]=function(e,f,h,g,m){var n="val"==g,o=!n?u[d]:b;if(!e||!v[f]||1!==e.nodeType||!n&&g&&"attr"==d&&a.attrFn[f])return o(e,f,h,g,m);var y=(e.nodeName||"").toLowerCase(),k=t[y],c="attr"==d&&(!1===h||null===h)?"removeAttr":d,i,p,s;k||(k=t["*"]);k&&(k=k[f]);k&&(i=k[c]);if(i){if("value"==f)p=i.isVal,i.isVal=n;if("removeAttr"===c)return i.value.call(e);if(h===r)return i.get?i.get.call(e):i.value;i.set&&
("attr"==d&&!0===h&&(h=f),s=i.set.call(e,h));if("value"==f)i.isVal=p}else s=o(e,f,h,g,m);if((h!==r||"removeAttr"===c)&&w[y]&&w[y][f]){var l;l="removeAttr"==c?!1:"prop"==c?!!h:!0;w[y][f].forEach(function(a){if(!a.only||(a.only="prop"==d)||"attr"==a.only&&"prop"!=d)a.call(e,h,l,n?"val":c,d)})}return s};q[d]=function(e,f,h){t[e]||(t[e]={});t[e][f]||(t[e][f]={});var g=t[e][f][d],m=function(a,e,g){return e&&e[a]?e[a]:g&&g[a]?g[a]:"prop"==d&&"value"==f?function(a){return h.isVal?b(this,f,a,!1,0===arguments.length):
u[d](this,f,a)}:"prop"==d&&"value"==a&&h.value.apply?function(a){var e=u[d](this,f);e&&e.apply&&(e=e.apply(this,arguments));return e}:function(a){return u[d](this,f,a)}};t[e][f][d]=h;if(h.value===r){if(!h.set)h.set=h.writeable?m("set",h,g):c.cfg.useStrict&&"prop"==f?function(){throw f+" is readonly on "+e;}:a.noop;if(!h.get)h.get=m("get",h,g)}["value","get","set"].forEach(function(a){h[a]&&(h["_sup"+a]=m(a,g))})}});var i=!a.browser.msie||8<parseInt(a.browser.version,10),g=function(){var a=c.getPrototypeOf(l.createElement("foobar")),
e=Object.prototype.hasOwnProperty;return function(f,h,g){var b=l.createElement(f),n=c.getPrototypeOf(b);if(i&&n&&a!==n&&(!b[h]||!e.call(b,h))){var k=b[h];g._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k};n[h]=g.value}else g._supvalue=function(){var a=o(this,"propValue");return a&&a[h]&&a[h].apply?a[h].apply(this,arguments):a&&a[h]},m.extendValue(f,h,g.value);g.value._supvalue=g._supvalue}}(),m=function(){var d={};c.addReady(function(e,f){var h={},g=function(d){h[d]||(h[d]=a(e.getElementsByTagName(d)),
f[0]&&a.nodeName(f[0],d)&&(h[d]=h[d].add(f)))};a.each(d,function(a,d){g(a);!d||!d.forEach?c.warn("Error: with "+a+"-property. methods: "+d):d.forEach(function(d){h[a].each(d)})});h=null});var e,f=a([]),h=function(f,h){d[f]?d[f].push(h):d[f]=[h];a.isDOMReady&&(e||a(l.getElementsByTagName(f))).each(h)};return{createTmpCache:function(d){a.isDOMReady&&(e=e||a(l.getElementsByTagName(d)));return e||f},flushTmpCache:function(){e=null},content:function(d,e){h(d,function(){var d=a.attr(this,e);null!=d&&a.attr(this,
e,d)})},createElement:function(a,d){h(a,d)},extendValue:function(d,e,f){h(d,function(){a(this).each(function(){o(this,"propValue",{})[e]=this[e];this[e]=f})})}}}(),k=function(a,e){if(a.defaultValue===r)a.defaultValue="";if(!a.removeAttr)a.removeAttr={value:function(){a[e||"prop"].set.call(this,a.defaultValue);a.removeAttr._supvalue.call(this)}}};a.extend(c,{getID:function(){var d=(new Date).getTime();return function(e){var e=a(e),f=e.attr("id");f||(d++,f="ID-"+d,e.attr("id",f));return f}}(),extendUNDEFProp:function(d,
e){a.each(e,function(a,e){a in d||(d[a]=e)})},createPropDefault:k,data:o,moveToFirstEvent:function(){var d=a._data?"_data":"data";return function(e,f,h){if((e=(a[d](e,"events")||{})[f])&&1<e.length)f=e.pop(),h||(h="bind"),"bind"==h&&e.delegateCount?e.splice(e.delegateCount,0,f):e.unshift(f)}}(),addShadowDom:function(d,e,f){f=f||{};d.jquery&&(d=d[0]);e.jquery&&(e=e[0]);if(!f.shadowFocusElement)f.shadowFocusElement=e;var h=a.data(d,n)||a.data(d,n,{}),g=a.data(e,n)||a.data(e,n,{});h.hasShadow=e;g.nativeElement=
d;g.shadowData=h.shadowData={nativeElement:d,shadowElement:e,shadowFocusElement:f.shadowFocusElement};f.shadowChilds&&f.shadowChilds.each(function(){o(this,"shadowData",g.shadowData)});if(f.data)h.shadowData.data=f.data,g.shadowData.data=f.data;f=null},propTypes:{standard:function(a){k(a);if(!a.prop)a.prop={set:function(e){a.attr.set.call(this,""+e)},get:function(){return a.attr.get.call(this)||a.defaultValue}}},"boolean":function(a){k(a);if(!a.prop)a.prop={set:function(e){e?a.attr.set.call(this,
""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}}}},reflectProperties:function(d,e){"string"==typeof e&&(e=e.split(s));e.forEach(function(e){c.defineNodeNamesProperty(d,e,{prop:{set:function(d){a.attr(this,e,d)},get:function(){return a.attr(this,e)||""}}})})},defineNodeNameProperty:function(d,e,f){v[e]=!0;if(f.reflect)c.propTypes[f.propType||"standard"](f);["prop","attr","removeAttr"].forEach(function(h){var b=f[h];b&&(b="prop"===h?a.extend({writeable:!0},b):a.extend({},
b,{writeable:!0}),q[h](d,e,b),"*"!=d&&c.cfg.extendNative&&"prop"==h&&b.value&&a.isFunction(b.value)&&g(d,e,b),f[h]=b)});f.initAttr&&m.content(d,e);return f},defineNodeNameProperties:function(a,e,f,h){for(var g in e)!h&&e[g].initAttr&&m.createTmpCache(a),f&&(e[g][f]?c.log("override: "+a+"["+g+"] for "+f):(e[g][f]={},["value","set","get"].forEach(function(a){a in e[g]&&(e[g][f][a]=e[g][a],delete e[g][a])}))),e[g]=c.defineNodeNameProperty(a,g,e[g]);h||m.flushTmpCache();return e},createElement:function(d,
e,f){var g;a.isFunction(e)&&(e={after:e});m.createTmpCache(d);e.before&&m.createElement(d,e.before);f&&(g=c.defineNodeNameProperties(d,f,!1,!0));e.after&&m.createElement(d,e.after);m.flushTmpCache();return g},onNodeNamesPropertyModify:function(d,e,f,g){"string"==typeof d&&(d=d.split(s));a.isFunction(f)&&(f={set:f});d.forEach(function(a){w[a]||(w[a]={});"string"==typeof e&&(e=e.split(s));f.initAttr&&m.createTmpCache(a);e.forEach(function(d){w[a][d]||(w[a][d]=[],v[d]=!0);if(f.set){if(g)f.set.only=g;
w[a][d].push(f.set)}f.initAttr&&m.content(a,d)});m.flushTmpCache()})},defineNodeNamesBooleanProperty:function(d,e,f){f||(f={});if(a.isFunction(f))f.set=f;c.defineNodeNamesProperty(d,e,{attr:{set:function(a){this.setAttribute(e,a);f.set&&f.set.call(this,!0)},get:function(){return null==this.getAttribute(e)?r:e}},removeAttr:{value:function(){this.removeAttribute(e);f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,e,f){if(a.nodeName){if(f===
r)return f=(a.attributes[e]||{}).value,null==f?r:f;"boolean"==typeof f?f?a.setAttribute(e,e):a.removeAttribute(e):a.setAttribute(e,f)}},activeLang:function(){var d=[],e={},f,g,b=/:\/\/|^\.*\//,m=function(d,e,f){return e&&f&&-1!==a.inArray(e,f.availabeLangs||[])?(d.loading=!0,f=f.langSrc,b.test(f)||(f=c.cfg.basePath+f),c.loader.loadScript(f+e+".js",function(){d.langObj[e]?(d.loading=!1,k(d,!0)):a(function(){d.langObj[e]&&k(d,!0);d.loading=!1})}),!0):!1},n=function(a){e[a]&&e[a].forEach(function(a){a.callback()})},
k=function(a,d){if(a.activeLang!=f&&a.activeLang!==g){var e=p[a.module].options;if(a.langObj[f]||g&&a.langObj[g])a.activeLang=f,a.callback(a.langObj[f]||a.langObj[g],f),n(a.module);else if(!d&&!m(a,f,e)&&!m(a,g,e)&&a.langObj[""]&&""!==a.activeLang)a.activeLang="",a.callback(a.langObj[""],f),n(a.module)}};return function(b){if("string"==typeof b&&b!==f)f=b,g=f.split("-")[0],f==g&&(g=!1),a.each(d,function(a,d){k(d)});else if("object"==typeof b)if(b.register)e[b.register]||(e[b.register]=[]),e[b.register].push(b),
b.callback();else{if(!b.activeLang)b.activeLang="";d.push(b);k(b)}return f}}()});a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,e){c[a]=function(a,d,g,b){"string"==typeof a&&(a=a.split(s));var m={};a.forEach(function(a){m[a]=c[e](a,d,g,b)});return m}});c.isReady("webshimLocalization",!0)});
(function(a,c){var j=a.webshims.browserVersion;if(!(a.browser.mozilla&&5<j)&&(!a.browser.msie||12>j&&7<j)){var l={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(a,c){a.getAttribute("role")||a.setAttribute("role",c)};a.webshims.addReady(function(p,s){a.each(l,function(c,l){for(var j=a(c,p).add(s.filter(c)),b=0,n=j.length;b<n;b++)r(j[b],l)});if(p===c){var j=c.getElementsByTagName("header")[0],v=c.getElementsByTagName("footer"),t=v.length;
j&&!a(j).closest("section, article")[0]&&r(j,"banner");t&&(j=v[t-1],a(j).closest("section, article")[0]||r(j,"contentinfo"))}})}})(jQuery,document);
jQuery.webshims.register("form-datalist",function(a,c,j,l,r){c.propTypes.element=function(p){c.createPropDefault(p,"attr");if(!p.prop)p.prop={get:function(){var c=p.attr.get.call(this);c&&(c=a("#"+c)[0])&&p.propNodeName&&!a.nodeName(c,p.propNodeName)&&(c=null);return c||null},writeable:!1}};(function(){var p=a.webshims.cfg.forms,s=Modernizr.input.list;if(!s||p.customDatalist){var u=0,v={submit:1,button:1,reset:1,hidden:1,range:1,date:1},t=a.browser.msie&&7>parseInt(a.browser.version,10),q={},w=function(a){if(!a)return[];
if(q[a])return q[a];var n;try{n=JSON.parse(localStorage.getItem("storedDatalistOptions"+a))}catch(c){}q[a]=n||[];return n||[]},x={_create:function(b){if(!v[a.prop(b.input,"type")]){var n=b.datalist,c=a.data(b.input,"datalistWidget");if(n&&c&&c.datalist!==n)c.datalist=n,c.id=b.id,a(c.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(c,"_resetListCached")),c._resetListCached();else if(n){if(!(c&&c.datalist===n)){u++;var i=this;this.hideList=a.proxy(i,"hideList");
this.timedHide=function(){clearTimeout(i.hideTimer);i.hideTimer=setTimeout(i.hideList,9)};this.datalist=n;this.id=b.id;this.hasViewableData=!0;this._autocomplete=a.attr(b.input,"autocomplete");a.data(b.input,"datalistWidget",this);this.shadowList=a('<div class="datalist-polyfill '+(this.datalist.className||"")+" "+this.datalist.id+'-shadowdom" />');p.positionDatalist?this.shadowList.insertAfter(b.input):this.shadowList.appendTo("body");this.index=-1;this.input=b.input;this.arrayOptions=[];this.shadowList.delegate("li",
"mouseenter.datalistWidget mousedown.datalistWidget click.datalistWidget",function(g){var m=a("li:not(.hidden-item)",i.shadowList),c="mousedown"==g.type||"click"==g.type;i.markItem(m.index(g.currentTarget),c,m);"click"==g.type&&(i.hideList(),a(b.input).trigger("datalistselect"));return"mousedown"!=g.type}).bind("focusout",this.timedHide);b.input.setAttribute("autocomplete","off");a(b.input).attr({"aria-haspopup":"true"}).bind("input.datalistWidget",function(){if(!i.triggeredByDatalist)i.changedValue=
!1,i.showHideOptions()}).bind("keydown.datalistWidget",function(g){var m=g.keyCode,c;if(40==m&&!i.showList())return i.markItem(i.index+1,!0),!1;if(i.isListVisible){if(38==m)return i.markItem(i.index-1,!0),!1;if(!g.shiftKey&&(33==m||36==m))return i.markItem(0,!0),!1;if(!g.shiftKey&&(34==m||35==m))return g=a("li:not(.hidden-item)",i.shadowList),i.markItem(g.length-1,!0,g),!1;if(13==m||27==m)return 13==m&&(c=a("li.active-item:not(.hidden-item)",i.shadowList),i.changeValue(a("li.active-item:not(.hidden-item)",
i.shadowList))),i.hideList(),c&&c[0]&&a(b.input).trigger("datalistselect"),!1}}).bind("focus.datalistWidget",function(){a(this).hasClass("list-focus")&&i.showList()}).bind("mousedown.datalistWidget",function(){(this==l.activeElement||a(this).is(":focus"))&&i.showList()}).bind("blur.datalistWidget",this.timedHide);a(this.datalist).unbind("updateDatalist.datalistWidget").bind("updateDatalist.datalistWidget",a.proxy(this,"_resetListCached"));this._resetListCached();b.input.form&&b.input.id&&a(b.input.form).bind("submit.datalistWidget"+
b.input.id,function(){var g=a.prop(b.input,"value"),c=(b.input.name||b.input.id)+a.prop(b.input,"type");if(!i.storedOptions)i.storedOptions=w(c);if(g&&-1==i.storedOptions.indexOf(g)&&(i.storedOptions.push(g),g=i.storedOptions,c)){g=g||[];try{localStorage.setItem("storedDatalistOptions"+c,JSON.stringify(g))}catch(n){}}});a(j).bind("unload.datalist"+this.id+" beforeunload.datalist"+this.id,function(){i.destroy()})}}else c&&c.destroy()}},destroy:function(){var b=a.attr(this.input,"autocomplete");a(this.input).unbind(".datalistWidget").removeData("datalistWidget");
this.shadowList.remove();a(l).unbind(".datalist"+this.id);a(j).unbind(".datalist"+this.id);this.input.form&&this.input.id&&a(this.input.form).unbind("submit.datalistWidget"+this.input.id);this.input.removeAttribute("aria-haspopup");b===r?this.input.removeAttribute("autocomplete"):a(this.input).attr("autocomplete",b)},_resetListCached:function(a){var n=this,o;this.needsUpdate=!0;this.lastUpdatedValue=!1;this.lastUnfoundValue="";this.updateTimer||(j.QUnit||(o=a&&l.activeElement==n.input)?n.updateListOptions(o):
c.ready("WINDOWLOAD",function(){n.updateTimer=setTimeout(function(){n.updateListOptions();n=null;u=1},200+100*u)}))},updateListOptions:function(b){this.needsUpdate=!1;clearTimeout(this.updateTimer);this.updateTimer=!1;this.shadowList.css({fontSize:a.curCSS(this.input,"fontSize"),fontFamily:a.curCSS(this.input,"fontFamily")});this.searchStart=a(this.input).hasClass("search-start");var c=[],o=[],i=[],g,m,k,d;for(m=a.prop(this.datalist,"options"),k=0,d=m.length;k<d;k++){g=m[k];if(g.disabled)return;g=
{value:a(g).val()||"",text:a.trim(a.attr(g,"label")||g.textContent||g.innerText||a.text([g])||""),className:g.className||"",style:a.attr(g,"style")||""};g.text?g.text!=g.value&&(g.className+=" different-label-value"):g.text=g.value;o[k]=g.value;i[k]=g}if(!this.storedOptions)this.storedOptions=w((this.input.name||this.input.id)+a.prop(this.input,"type"));this.storedOptions.forEach(function(a){-1==o.indexOf(a)&&i.push({value:a,text:a,className:"stored-suggest",style:""})});for(k=0,d=i.length;k<d;k++)m=
i[k],c[k]='<li class="'+m.className+'" style="'+m.style+'" tabindex="-1" role="listitem"><span class="option-label">'+m.text+'</span> <span class="option-value">'+m.value+"</span></li>";this.arrayOptions=i;this.shadowList.html('<div class="datalist-outer-box"><div class="datalist-box"><ul role="list">'+c.join("\n")+"</ul></div></div>");a.fn.bgIframe&&t&&this.shadowList.bgIframe();(b||this.isListVisible)&&this.showHideOptions()},showHideOptions:function(b){var c=a.prop(this.input,"value").toLowerCase();
if(!(c===this.lastUpdatedValue||this.lastUnfoundValue&&0===c.indexOf(this.lastUnfoundValue))){this.lastUpdatedValue=c;var o=!1,i=this.searchStart,g=a("li",this.shadowList);c?this.arrayOptions.forEach(function(b,k){var d;if(!("lowerText"in b))b.lowerText=b.text!=b.value?b.text.toLowerCase()+b.value.toLowerCase():b.text.toLowerCase();d=b.lowerText.indexOf(c);(d=i?!d:-1!==d)?(a(g[k]).removeClass("hidden-item"),o=!0):a(g[k]).addClass("hidden-item")}):g.length&&(g.removeClass("hidden-item"),o=!0);this.hasViewableData=
o;!b&&o&&this.showList();if(!o)this.lastUnfoundValue=c,this.hideList()}},setPos:function(){this.shadowList.css({marginTop:0,marginLeft:0,marginRight:0,marginBottom:0});var b=p.positionDatalist?a(this.input).position():c.getRelOffset(this.shadowList,this.input);b.top+=a(this.input).outerHeight();b.width=a(this.input).outerWidth()-(parseInt(this.shadowList.css("borderLeftWidth"),10)||0)-(parseInt(this.shadowList.css("borderRightWidth"),10)||0);this.shadowList.css({marginTop:"",marginLeft:"",marginRight:"",
marginBottom:""}).css(b);return b},showList:function(){if(this.isListVisible)return!1;this.needsUpdate&&this.updateListOptions();this.showHideOptions(!0);if(!this.hasViewableData)return!1;this.isListVisible=!0;var b=this,c;b.setPos();b.shadowList.addClass("datalist-visible").find("li.active-item").removeClass("active-item");a(l).unbind(".datalist"+b.id).bind("mousedown.datalist"+b.id+" focusin.datalist"+b.id,function(c){c.target===b.input||b.shadowList[0]===c.target||a.contains(b.shadowList[0],c.target)?
(clearTimeout(b.hideTimer),setTimeout(function(){clearTimeout(b.hideTimer)},9)):b.timedHide()});a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){clearTimeout(c);c=setTimeout(function(){b.setPos()},9)});clearTimeout(c);return!0},hideList:function(){if(!this.isListVisible)return!1;var b=this,n=function(){b.changedValue&&a(b.input).trigger("change");b.changedValue=!1};b.shadowList.removeClass("datalist-visible list-item-active");
b.index=-1;b.isListVisible=!1;if(b.changedValue){b.triggeredByDatalist=!0;c.triggerInlineForm&&c.triggerInlineForm(b.input,"input");if(b.input==l.activeElement||a(b.input).is(":focus"))a(b.input).one("blur",n);else n();b.triggeredByDatalist=!1}a(l).unbind(".datalist"+b.id);a(j).unbind(".datalist"+b.id).bind("resize.datalist"+b.id+" orientationchange.datalist "+b.id+" emchange.datalist"+b.id,function(){b.shadowList.css({top:0,left:0});a(j).unbind(".datalist"+b.id)});return!0},scrollIntoView:function(b){var c=
a("ul",this.shadowList),o=a("div.datalist-box",this.shadowList),i=b.position();i.top-=(parseInt(c.css("paddingTop"),10)||0)+(parseInt(c.css("marginTop"),10)||0)+(parseInt(c.css("borderTopWidth"),10)||0);0>i.top?o.scrollTop(o.scrollTop()+i.top-2):(i.top+=b.outerHeight(),b=o.height(),i.top>b&&o.scrollTop(o.scrollTop()+(i.top-b)+2))},changeValue:function(b){if(b[0]){var b=a("span.option-value",b).text(),c=a.prop(this.input,"value");if(b!=c)a(this.input).prop("value",b).triggerHandler("updateInput"),
this.changedValue=!0}},markItem:function(b,c,o){o=o||a("li:not(.hidden-item)",this.shadowList);if(o.length)0>b?b=o.length-1:b>=o.length&&(b=0),o.removeClass("active-item"),this.shadowList.addClass("list-item-active"),o=o.filter(":eq("+b+")").addClass("active-item"),c&&(this.changeValue(o),this.scrollIntoView(o)),this.index=b}};(function(){s||c.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=a("select",this);b[0]?b=b[0].options:(b=a("option",this).get(),b.length&&
c.warn("you should wrap you option-elements for a datalist in a select element to support IE and other old browsers."));return b}}});var b={autocomplete:{attr:{get:function(){var b=a.data(this,"datalistWidget");return b?b._autocomplete:"autocomplete"in this?this.autocomplete:this.getAttribute("autocomplete")},set:function(b){var c=a.data(this,"datalistWidget");c?(c._autocomplete=b,"off"==b&&c.hideList()):"autocomplete"in this?this.autocomplete=b:this.setAttribute("autocomplete",b)}}}};if(!s||!1 in
a("<input />")[0])b.selectedOption={prop:{writeable:!1,get:function(){var b=a.prop(this,"list"),c=null,i;if(!b)return c;i=a.attr(this,"value");if(!i)return c;b=a.prop(b,"options");if(!b.length)return c;a.each(b,function(g,b){if(i==a.prop(b,"value"))return c=b,!1});return c}}};b.list=s?{attr:{get:function(){var b=c.contentAttr(this,"list");null!=b?this.removeAttribute("list"):b=a.data(this,"datalistListAttr");return null==b?r:b},set:function(b){a.data(this,"datalistListAttr",b);c.objectCreate(x,r,
{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}:{attr:{get:function(){var a=c.contentAttr(this,"list");return null==a?r:a},set:function(b){c.contentAttr(this,"list",b);c.objectCreate(x,r,{input:this,id:b,datalist:a.prop(this,"list")})}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"};c.defineNodeNameProperties("input",b);if(a.event.customEvent)a.event.customEvent.updateDatalist=!0,a.event.customEvent.updateInput=
!0,a.event.customEvent.datalistselect=!0;c.addReady(function(a,b){b.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").triggerHandler("updateDatalist")})})()}})()});
(function(a){var c=window.Modernizr,j=a.webshims,l=j.bugs,r=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required /><input type="date" required name="a" /><input type="submit" /></form>'),p=function(){if(r[0].querySelector)try{l.findRequired=!r[0].querySelector("select:required")}catch(a){l.findRequired=!1}};l.findRequired=!1;l.validationMessage=!1;l.valueAsNumberSet=!1;j.capturingEventPrevented=function(c){if(!c._isPolyfilled){var p=c.isDefaultPrevented,
b=c.preventDefault;c.preventDefault=function(){clearTimeout(a.data(c.target,c.type+"DefaultPrevented"));a.data(c.target,c.type+"DefaultPrevented",setTimeout(function(){a.removeData(c.target,c.type+"DefaultPrevented")},30));return b.apply(this,arguments)};c.isDefaultPrevented=function(){return!(!p.apply(this,arguments)&&!a.data(c.target,c.type+"DefaultPrevented"))};c._isPolyfilled=!0}};if(!c.formvalidation||l.bustedValidity)p();else if(j.capturingEvents(["input"]),j.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var s=a("input",r).eq(0),u,v=function(a){j.loader.loadList(["dom-extend"]);j.ready("dom-extend",a)},t=function(p){var l=["form-extend","form-message","form-native-fix"];p&&(p.preventDefault(),p.stopImmediatePropagation());clearTimeout(u);setTimeout(function(){r&&(r.remove(),r=s=null)},9);if(!c.bugfreeformvalidation)j.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),j.modules["form-extend"].test=a.noop;j.isReady("form-number-date-api")&&
l.push("form-number-date-api");j.reTest(l);if(s)try{s.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&v(function(){j.onNodeNamesPropertyModify(["input","textarea","select"],["disabled","readonly"],{set:function(){this.disabled||a(this).val(a(this).val())}})})}catch(b){}(a.browser.opera||window.testGoodWithFix)&&v(function(){var b=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var i=j.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){j.fromSubmit||
a(this).bind("invalid.checkvalidity",b);j.fromCheckValidity=!0;var g=i.prop._supvalue.apply(this,arguments);j.fromSubmit||a(this).unbind("invalid.checkvalidity",b);j.fromCheckValidity=!1;return g}}})});c.input.list&&!(a("<datalist><select><option></option></select></datalist>").prop("options")||[]).length&&j.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var b=this.options||[];if(!b.length){var c=a("select",this);if(c[0]&&c[0].options&&c[0].options.length)b=c[0].options}return b}}})})};
r.appendTo("head");if(window.opera||window.testGoodWithFix){p();l.validationMessage=!s.prop("validationMessage");if((c.inputtypes||{}).date){try{s.prop("valueAsNumber",0)}catch(q){}l.valueAsNumberSet="1970-01-01"!=s.prop("value")}s.prop("value","")}r.bind("submit",function(a){c.bugfreeformvalidation=!1;t(a)});u=setTimeout(function(){r&&r.triggerHandler("submit")},9);a("input, select",r).bind("invalid",t).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click")}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,j,l,r,p){var s={radio:1},u={checkbox:1,radio:1},v=a([]),t=c.bugs,q=function(g){var g=a(g),b,c;b=v;if(s[g[0].type])c=g.prop("form"),b=(b=g[0].name)?c?a(c[b]):a(l.getElementsByName(b)).filter(function(){return!a.prop(this,"form")}):g,b=b.filter('[type="radio"]');return b},w=c.getContentValidationMessage=function(b,m,k){var d=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";k&&d[k]&&(d=d[k]);"object"==typeof d&&(m=m||a.prop(b,"validity")||
{valid:1},m.valid||a.each(m,function(a,b){if(b&&"valid"!=a&&d[a])return d=d[a],!1}));c.data(b,"contentErrorMessage",d);if("object"==typeof d)d=d.defaultMessage;return d||""},x={number:1,range:1,date:1};a.extend(a.expr.filters,{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||
!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!x[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr.filters[b]=
a.expr.filters[b+"-element"]});var b=a.event.customEvent||{};(t.bustedValidity||t.findRequired)&&function(){var b=a.find,c=a.find.matchesSelector,k=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,d=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,f=function(f){var c=arguments,c=a.call(c,1,c.length);c.unshift(f.replace(k,d));return b.apply(this,c)},c;for(c in b)b.hasOwnProperty(c)&&(f[c]=b[c]);return f}();if(!Modernizr.prefixed||
Modernizr.prefixed("matchesSelector",l.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(k,d);return c.call(this,a,b)}}();var n=a.prop,o={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,c,k){var d=n.apply(this,arguments);if(b&&"form"in b&&o[c]&&k!==r&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),"checked"==c&&k&&q(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");
return d};var i=function(b,c){var k;a.each(b,function(d,b){if(b)return k="customError"==d?a.prop(c,"validationMessage"):d,!1});return k};a(l).bind("focusout change refreshvalidityui",function(b){if(b.target&&"submit"!=b.target.type&&a.prop(b.target,"willValidate")){var c=a.data(b.target,"webshimsswitchvalidityclass");c&&clearTimeout(c);a.data(b.target,"webshimsswitchvalidityclass",setTimeout(function(){var c=a(b.target).getNativeElement()[0],d=a.prop(c,"validity"),e=a(c).getShadowElement(),f,h,m,
p;d.valid?e.hasClass("form-ui-valid")||(f="form-ui-valid",h="form-ui-invalid",p="changedvaliditystate",m="changedvalid",u[c.type]&&c.checked&&q(c).not(c).removeClass(h).addClass(f).removeAttr("aria-invalid"),a.removeData(c,"webshimsinvalidcause")):(d=i(d,c),a.data(c,"webshimsinvalidcause")!=d&&(a.data(c,"webshimsinvalidcause",d),p="changedvaliditystate"),e.hasClass("form-ui-invalid")||(f="form-ui-invalid",h="form-ui-valid",u[c.type]&&!c.checked&&q(c).not(c).removeClass(h).addClass(f),m="changedinvalid"));
f&&(e.addClass(f).removeClass(h),setTimeout(function(){a(c).trigger(m)},0));p&&setTimeout(function(){a(c).trigger(p)},0);a.removeData(b.target,"webshimsswitchvalidityclass")},9))}});b.changedvaliditystate=!0;b.changedvalid=!0;b.changedinvalid=!0;b.refreshvalidityui=!0;c.triggerInlineForm=function(b,c){a(b).trigger(c)};c.modules["form-core"].getGroupElements=q;t=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==l.compatMode?a(l.body):a(l.documentElement)};t();c.ready("DOM",t);c.getRelOffset=
function(b,c){var b=a(b),i=a(c).offset(),d;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){d=b.offset()});i.top-=d.top;i.left-=d.left;return i};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",i,p=!1,d=!1,e,f={hideDelay:5E3,showFor:function(b,c,g,l){f._create();var b=a(b),s=a(b).getShadowElement(),n=f.getOffsetFromBody(s);f.clear();l?this.hide():(this.getMessage(b,c),this.position(s,n),i.css({fontSize:b.css("fontSize"),
fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(p=setTimeout(e,this.hideDelay)),a(j).bind("resize.validityalert orientationchange.validityalert emchange.validityalert",function(){clearTimeout(d);d=setTimeout(function(){f.position(s)},9)}));g||this.setFocus(s,n)},getOffsetFromBody:function(a){return c.getRelOffset(i,a)},setFocus:function(d,f){var p=a(d).getShadowFocusElement(),k=c.scrollRoot.scrollTop(),s=(f||p.offset()).top-30,j;c.getID&&"label"==b&&i.attr("for",c.getID(p));k>s&&(c.scrollRoot.animate({scrollTop:s-
5},{queue:!1,duration:Math.max(Math.min(600,1.5*(k-s)),80)}),j=!0);try{p[0].focus()}catch(n){}j&&(c.scrollRoot.scrollTop(k),setTimeout(function(){c.scrollRoot.scrollTop(k)},0));setTimeout(function(){a(l).bind("focusout.validityalert",e)},10)},getMessage:function(b,d){a("span.va-box",i).text(d||w(b[0])||b.prop("validationMessage"))},position:function(b,d){d=d?a.extend({},d):f.getOffsetFromBody(b);d.top+=b.outerHeight();i.css(d)},show:function(){"none"===i.css("display")&&i.css({opacity:0}).show();
i.addClass("va-visible").fadeTo(400,1)},hide:function(){i.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(p);a(l).unbind(".validityalert");a(j).unbind(".validityalert");i.stop().removeAttr("for")},_create:function(){if(!i)i=f.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+b+">").css({position:"absolute",display:"none"}),
c.ready("DOM",function(){i.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&i.bgIframe()})}};e=a.proxy(f,"hide");return f}();(function(){var b,c=[],i;a(l).bind("invalid",function(d){if(!d.wrongWebkitInvalid){var e=a(d.target),f=e.getShadowElement();f.hasClass("form-ui-invalid")||(f.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(d.target).trigger("changedinvalid").trigger("changedvaliditystate")},0));if(!b)b=a.Event("firstinvalid"),
b.isInvalidUIPrevented=d.isDefaultPrevented,f=a.Event("firstinvalidsystem"),a(l).triggerHandler(f,{element:d.target,form:d.target.form,isInvalidUIPrevented:d.isDefaultPrevented}),e.trigger(b);b&&b.isDefaultPrevented()&&d.preventDefault();c.push(d.target);d.extraData="fix";clearTimeout(i);i=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(d.target).trigger(e,e)},9);f=e=null}})})();p.replaceValidationUI&&c.ready("DOM",function(){a(l).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||
(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});
(function(a,c,j){var l=c.audio&&c.video,r=!1;if(l)a=document.createElement("video"),c.videoBuffered="buffered"in a,r="loop"in a,j.capturingEvents("play,playing,waiting,paused,ended,durationchange,loadedmetadata,canplay,volumechange".split(",")),c.videoBuffered||(j.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:c.videoBuffered,d:["dom-support"]}),j.reTest("mediaelement-native-fix"));jQuery.webshims.register("mediaelement-core",function(a,c,j,v,t){var q=c.mediaelement,w=c.cfg.mediaelement,
x=function(b,c){var b=a(b),f={src:b.attr("src")||"",elem:b,srcProp:b.prop("src")};if(!f.src)return f;var h=b.attr("type");if(h)f.type=h,f.container=a.trim(h.split(";")[0]);else if(c||(c=b[0].nodeName.toLowerCase(),"source"==c&&(c=(b.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),h=q.getTypeForSrc(f.src,c))f.type=h,f.container=h;if(h=b.attr("media"))f.media=h;return f},b=swfobject.hasFlashPlayerVersion("9.0.115"),n=function(){c.ready("mediaelement-swf",function(){if(!q.createSWF)c.modules["mediaelement-swf"].test=
a.noop,c.reTest(["mediaelement-swf"],l)})};q.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],"audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":"mp4,mpg4,m4r,m4a,m4p,m4b,aac".split(","),"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf",
"asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}};q.mimeTypes.source=a.extend({},q.mimeTypes.audio,q.mimeTypes.video);q.getTypeForSrc=function(b,c){if(-1!=b.indexOf("youtube.com/watch?")||-1!=b.indexOf("youtube.com/v/"))return"video/youtube";var b=b.split("?")[0].split("."),b=b[b.length-1],f;a.each(q.mimeTypes[c],function(a,c){if(-1!==c.indexOf(b))return f=a,!1});return f};q.srces=function(b,c){b=a(b);if(c)b.removeAttr("src").removeAttr("type").find("source").remove(),
a.isArray(c)||(c=[c]),c.forEach(function(a){var c=v.createElement("source");"string"==typeof a&&(a={src:a});c.setAttribute("src",a.src);a.type&&c.setAttribute("type",a.type);a.media&&c.setAttribute("media",a.media);b.append(c)});else{var c=[],f=b[0].nodeName.toLowerCase(),h=x(b,f);h.src?c.push(h):a("source",b).each(function(){h=x(this,f);h.src&&c.push(h)});return c}};a.fn.loadMediaSrc=function(b,c){return this.each(function(){c!==t&&(a(this).removeAttr("poster"),c&&a.attr(this,"poster",c));q.srces(this,
b);a(this).mediaLoad()})};q.swfMimeTypes="video/3gpp,video/x-msvideo,video/quicktime,video/x-m4v,video/mp4,video/m4p,video/x-flv,video/flv,audio/mpeg,audio/aac,audio/mp4,audio/x-m4a,audio/m4a,audio/mp3,audio/x-fla,audio/fla,youtube/flv,jwplayer/jwplayer,video/youtube".split(",");q.canSwfPlaySrces=function(c,e){var f="";b&&(c=a(c),e=e||q.srces(c),a.each(e,function(a,b){if(b.container&&b.src&&-1!=q.swfMimeTypes.indexOf(b.container))return f=b,!1}));return f};var o={};q.canNativePlaySrces=function(b,
c){var f="";if(l){var b=a(b),h=(b[0].nodeName||"").toLowerCase();if(!o[h])return f;c=c||q.srces(b);a.each(c,function(a,c){if(c.type&&o[h].prop._supvalue.call(b[0],c.type))return f=c,!1})}return f};q.setError=function(b,e){e||(e="can't play sources");a(b).pause().data("mediaerror",e);c.warn("mediaelementError: "+e);setTimeout(function(){a(b).data("mediaerror")&&a(b).trigger("mediaerror")},1)};var i=function(){var a;return function(b,f,h){c.ready("mediaelement-swf",function(){q.createSWF?q.createSWF(b,
f,h):a||(a=!0,n(),i(b,f,h))})}}(),g=function(a,b,c,h,j){c||!1!==c&&b&&"flash"==b.isActive?(c=q.canSwfPlaySrces(a,h))?i(a,c,b):j?q.setError(a,!1):g(a,b,!1,h,!0):(c=q.canNativePlaySrces(a,h))?b&&"flash"==b.isActive&&q.setActive(a,"html5",b):j?(q.setError(a,!1),b&&"flash"==b.isActive&&q.setActive(a,"html5",b)):g(a,b,!0,h,!0)},m=/^(?:embed|object|datalist)$/i,k=function(b,e){var f=c.data(b,"mediaelementBase")||c.data(b,"mediaelementBase",{}),h=q.srces(b),i=b.parentNode;clearTimeout(f.loadTimer);a.data(b,
"mediaerror",!1);if(h.length&&i&&!(1!=i.nodeType||m.test(i.nodeName||"")))e=e||c.data(b,"mediaelement"),g(b,e,w.preferFlash||t,h)};a(v).bind("ended",function(b){var e=c.data(b.target,"mediaelement");(!r||e&&"html5"!=e.isActive||a.prop(b.target,"loop"))&&setTimeout(function(){!a.prop(b.target,"paused")&&a.prop(b.target,"loop")&&a(b.target).prop("currentTime",0).play()},1)});r||c.defineNodeNamesBooleanProperty(["audio","video"],"loop");["audio","video"].forEach(function(d){var e=c.defineNodeNameProperty(d,
"load",{prop:{value:function(){var a=c.data(this,"mediaelement");k(this,a);l&&(!a||"html5"==a.isActive)&&e.prop._supvalue&&e.prop._supvalue.apply(this,arguments)}}});o[d]=c.defineNodeNameProperty(d,"canPlayType",{prop:{value:function(c){var e="";l&&o[d].prop._supvalue&&(e=o[d].prop._supvalue.call(this,c),"no"==e&&(e=""));!e&&b&&(c=a.trim((c||"").split(";")[0]),-1!=q.swfMimeTypes.indexOf(c)&&(e="maybe"));return e}}})});c.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=
this,b=c.data(a,"mediaelementBase")||c.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer);b.loadTimer=setTimeout(function(){k(a);a=null},9)}});j=function(){c.addReady(function(b,e){a("video, audio",b).add(e.filter("video, audio")).each(function(){a.browser.msie&&8<c.browserVersion&&a.prop(this,"paused")&&!a.prop(this,"readyState")&&a(this).is('audio[preload="none"][controls]:not([autoplay])')?a(this).prop("preload","metadata").mediaLoad():k(this);if(l){var b,d,e=this,g=function(){var b=a.prop(e,
"buffered");if(b){for(var c="",d=0,f=b.length;d<f;d++)c+=b.end(d);return c}},i=function(){var b=g();b!=d&&(d=b,a(e).triggerHandler("progress"))};a(this).bind("play loadstart progress",function(a){"progress"==a.type&&(d=g());clearTimeout(b);b=setTimeout(i,999)}).bind("emptied stalled mediaerror abort suspend",function(a){"emptied"==a.type&&(d=!1);clearTimeout(b)})}})})};l?(c.isReady("mediaelement-core",!0),j(),b&&c.ready("WINDOWLOAD mediaelement",n)):c.ready("mediaelement-swf",j)})})(jQuery,Modernizr,
jQuery.webshims);

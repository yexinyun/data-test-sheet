(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-guanbi" viewBox="0 0 1024 1024">'+""+'<path d="M551.563064 512.884137l231.774761-231.774761c10.665921-10.667967 10.665921-27.963888 0-38.629809-10.667967-10.666944-27.962865-10.666944-38.629809 0L512.933255 474.254328 281.157471 242.478544c-10.66899-10.666944-27.963888-10.666944-38.629809 0-10.667967 10.665921-10.667967 27.961842 0 38.629809L474.302423 512.884137 242.527662 744.658897c-10.667967 10.667967-10.667967 27.963888 0 38.630832 10.665921 10.665921 27.960819 10.665921 38.629809 0L512.933255 551.513946l231.775784 231.775784c10.666944 10.665921 27.961842 10.665921 38.629809 0 10.665921-10.666944 10.665921-27.962865 0-38.630832L551.563064 512.884137z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-fangda" viewBox="0 0 1024 1024">'+""+'<path d="M805.904797 894.63363 216.383212 894.63363c-48.917106 0-88.713484-39.797401-88.713484-88.713484L127.669728 216.399585c0-48.917106 39.796378-88.713484 88.713484-88.713484l589.521584 0c48.917106 0 88.713484 39.796378 88.713484 88.713484l0 589.520561C894.618281 854.836229 854.820879 894.63363 805.904797 894.63363zM216.383212 189.084473c-15.061021 0-27.315112 12.254092-27.315112 27.315112l0 589.520561c0 15.062044 12.254092 27.315112 27.315112 27.315112l589.521584 0c15.062044 0 27.315112-12.254092 27.315112-27.315112L833.219909 216.399585c0-15.061021-12.254092-27.315112-27.315112-27.315112L216.383212 189.084473z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-jian" viewBox="0 0 1024 1024">'+""+'<path d="M801.171 547.589H222.83c-17.673 0-32-14.327-32-32s14.327-32 32-32h578.341c17.673 0 32 14.327 32 32s-14.327 32-32 32z" fill="" ></path>'+""+"</symbol>"+""+'<symbol id="icon-icon-test" viewBox="0 0 1024 1024">'+""+'<path d="M97.728 249.6v677.12h677.12V249.6H97.728z m627.072 626.368H149.184V300.416h575.552l0.064 575.552z"  ></path>'+""+'<path d="M926.272 97.216V774.4H774.4v-50.816h101.76V148.032H300.544V249.6h-51.456V97.216z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
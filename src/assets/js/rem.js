/**
 * Created by shixiseng on 2016/6/30.
 * author by fff
 */
 (function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth,
                size=document.body.clientWidth/320*20;
			if (!clientWidth) return;
			/*根据页面展示宽度改变html初始fontsize*/
            size = size > 40 ? 40 : size;
            docEl.style.fontSize=size+"px";
		};
	if (!doc.addEventListener) return;
	recalc();
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

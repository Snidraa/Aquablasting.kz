const langRu = document.querySelector('.lang-ru');
const langKz = document.querySelector('.lang-kz');
const allLang = ['ru', 'kz'];
const menuIcon = document.querySelector('.icon-menu');
const menu = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
const goTopBtn = document.querySelector('.back-to-top');

window.onload = function () {
	document.body.classList.add('lock');
	setTimeout(function () {
		document.querySelector('.preloader__card').classList.add('card');
	}, 510);
	setTimeout(function () {
		document.getElementById('preloader').style.display = 'none';
		document.body.classList.remove('lock');
		document.body.classList.add('loaded');
	}, 4000);
};

function skipPreloader() {
	document.getElementById('preloader').style.display = 'none';
	document.body.classList.remove('lock');
	document.querySelector('.preloader__card').classList.remove('card');
	document.querySelector('.preloader').removeEventListener;
};

document.querySelector('.preloader').addEventListener('click', skipPreloader)

function changeUrlLanguage(event) {
	let lang = event.target.lang;
	location.href = window.location.pathname + '#' + lang;
	location.reload();
}

function changeLanguage() {
	let hash = window.location.hash;
	hash = hash.substring(1);
	if (!allLang.includes(hash)) {
		location.href = window.location.pathname + '#ru';
		location.reload();
	}
	for (let key in langList) {
		let elem = document.querySelector('.lang-' + key);
		if (langList[key][hash]) {
			if (elem) {
				elem.textContent = langList[key][hash];
			}
		}
	}
	if (hash === "ru") {
		langKz.classList.remove('active');
		langRu.classList.add('active');
		menu.classList.remove('menu-kz');
		menu.classList.add('menu-ru');
	} else {
		langRu.classList.remove('active');
		langKz.classList.add('active')
		menu.classList.remove('menu-ru');
		menu.classList.add('menu-kz');
	}
}
changeLanguage()

langRu.addEventListener('click', changeUrlLanguage)
langKz.addEventListener('click', changeUrlLanguage)

function openBurgerMenu() {
	if (menuIcon.classList.contains('active')) {
		closeBurgerMenu()
	} else {
		menuIcon.classList.add('active');
		menu.classList.add('active');
		document.body.classList.add('lock');
	}
}

function closeBurgerMenu() {
	menuIcon.classList.remove('active');
	menu.classList.remove('active');
	document.body.classList.remove('lock');
}

menuIcon.addEventListener('click', openBurgerMenu);
document.querySelector('.menu__logo').addEventListener('click', closeBurgerMenu);
menuLinks.forEach((link) => {
	link.addEventListener('click', closeBurgerMenu);
})

$('.slider').slick({
	dots: true,
	slidesToShow: 3,
	speed: 1000,
	easing: 'ease-out',
	initialSlide: 2,
	centerMode: true,
	variableWidth: true,
	waitForAnimate: false,
	autoplay: true,
	autoplaySpeed: 1500,
	pauseOnFocus: true,
	pauseOnHover: true,
	pauseOnDotsHover: true,
	responsive: [
		{
			breakpoint: 700,
			settings: {
				arrows: false
			}
		}
	]
});
$('.slider').slick('setPosition');

function trackScroll() {
	const scrolled = window.pageYOffset;
	const coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goTopBtn.classList.add('back-to-top-show');
	}
	if (scrolled < coords) {
		goTopBtn.classList.remove('back-to-top-show');
	}
}

window.addEventListener('scroll', trackScroll);

document.querySelector('.logo').onclick = () => { location.reload(); };

//?????????????? ????/??????????
!function (document, window) { var juxtapose = { sliders: [], OPTIMIZATION_ACCEPTED: 1, OPTIMIZATION_WAS_CONSTRAINED: 2 }; function Graphic(properties, slider) { var self = this; this.image = new Image, this.loaded = !1, this.image.onload = function () { self.loaded = !0, slider._onLoaded() }, this.image.src = properties.src, this.label = properties.label || !1, this.credit = properties.credit || !1 } function getNaturalDimensions(DOMelement) { if (DOMelement.naturalWidth && DOMelement.naturalHeight) return { width: DOMelement.naturalWidth, height: DOMelement.naturalHeight }; var img = new Image; return img.src = DOMelement.src, { width: img.width, height: img.height } } function getImageDimensions(img) { var dimensions; return { width: getNaturalDimensions(img).width, height: getNaturalDimensions(img).height, aspect: function () { return this.width / this.height } } } function addClass(element, c) { null !== element && (element.classList ? element.classList.add(c) : element.className += " " + c) } function removeClass(element, c) { element.className = element.className.replace(/(\S+)\s*/g, (function (w, match) { return match === c ? "" : w })).replace(/^\s+/, "") } function setText(element, text) { document.body.textContent ? element.textContent = text : element.innerText = text } function getComputedWidthAndHeight(element) { return window.getComputedStyle ? { width: parseInt(getComputedStyle(element).width, 10), height: parseInt(getComputedStyle(element).height, 10) } : (w = element.getBoundingClientRect().right - element.getBoundingClientRect().left, h = element.getBoundingClientRect().bottom - element.getBoundingClientRect().top, { width: parseInt(w, 10) || 0, height: parseInt(h, 10) || 0 }) } function getPageX(e) { var pageX; return pageX = e.pageX ? e.pageX : e.touches ? e.touches[0].pageX : e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft } function getPageY(e) { var pageY; return pageY = e.pageY ? e.pageY : e.touches ? e.touches[0].pageY : e.clientY + document.body.scrollTop + document.documentElement.scrollTop } function getLeftPercent(slider, input) { if ("string" == typeof input || "number" == typeof input) leftPercent = parseInt(input, 10); else { var sliderRect = slider.getBoundingClientRect(), offset = { top: sliderRect.top + document.body.scrollTop, left: sliderRect.left + document.body.scrollLeft }, width = slider.offsetWidth, pageX = getPageX(input), relativeX; leftPercent = (pageX - offset.left) / width * 100 } return leftPercent } function getTopPercent(slider, input) { if ("string" == typeof input || "number" == typeof input) topPercent = parseInt(input, 10); else { var sliderRect = slider.getBoundingClientRect(), offset = { top: sliderRect.top + document.body.scrollTop, left: sliderRect.left + document.body.scrollLeft }, width = slider.offsetHeight, pageY = getPageY(input), relativeY; topPercent = (pageY - offset.top) / width * 100 } return topPercent } var BOOLEAN_OPTIONS = { animate: !0, showLabels: !0, showCredits: !0, makeResponsive: !0 }; function interpret_boolean(x) { return "string" != typeof x ? Boolean(x) : !("false" === x || "" === x) } function JXSlider(selector, images, options) { var i; for (i in this.selector = selector, this.options = { animate: !0, showLabels: !0, showCredits: !0, makeResponsive: !0, startingPosition: "50%", mode: "horizontal", callback: null }, this.options) i in options && (this.options[i] = i in BOOLEAN_OPTIONS ? interpret_boolean(options[i]) : options[i]); 2 == images.length ? (this.imgBefore = new Graphic(images[0], this), this.imgAfter = new Graphic(images[1], this)) : console.warn("The images parameter takes two Image objects."), this.imgBefore.credit || this.imgAfter.credit ? this.options.showCredits = !0 : this.options.showCredits = !1 } JXSlider.prototype = { updateSlider: function (input, animate) { var leftPercent, rightPercent; leftPercent = (leftPercent = "vertical" === this.options.mode ? getTopPercent(this.slider, input) : getLeftPercent(this.slider, input)).toFixed(2) + "%", leftPercentNum = parseFloat(leftPercent), rightPercent = 100 - leftPercentNum + "%", leftPercentNum > 0 && leftPercentNum < 100 && (removeClass(this.handle, "transition"), removeClass(this.rightImage, "transition"), removeClass(this.leftImage, "transition"), this.options.animate && animate && (addClass(this.handle, "transition"), addClass(this.leftImage, "transition"), addClass(this.rightImage, "transition")), "vertical" === this.options.mode ? (this.handle.style.top = leftPercent, this.leftImage.style.height = leftPercent, this.rightImage.style.height = rightPercent) : (this.handle.style.left = leftPercent, this.leftImage.style.width = leftPercent, this.rightImage.style.width = rightPercent), this.sliderPosition = leftPercent) }, getPosition: function () { return this.sliderPosition }, displayLabel: function (element, labelText) { label = document.createElement("div"), label.className = "jx-label", label.setAttribute("tabindex", 0), setText(label, labelText), element.appendChild(label) }, displayCredits: function () { credit = document.createElement("div"), credit.className = "jx-credit", text = "<em>Photo Credits:</em>", this.imgBefore.credit && (text += " <em>Before</em> " + this.imgBefore.credit), this.imgAfter.credit && (text += " <em>After</em> " + this.imgAfter.credit), credit.innerHTML = text, this.wrapper.appendChild(credit) }, setStartingPosition: function (s) { this.options.startingPosition = s }, checkImages: function () { return getImageDimensions(this.imgBefore.image).aspect() == getImageDimensions(this.imgAfter.image).aspect() }, calculateDims: function (width, height) { var ratio = getImageDimensions(this.imgBefore.image).aspect(); return width ? height = width / ratio : height && (width = height * ratio), { width: width, height: height, ratio: ratio } }, responsivizeIframe: function (dims) { return dims.height < window.innerHeight ? dims.ratio >= 1 && (this.wrapper.style.paddingTop = parseInt((window.innerHeight - dims.height) / 2) + "px") : dims.height > window.innerHeight && (dims = this.calculateDims(0, window.innerHeight), this.wrapper.style.paddingLeft = parseInt((window.innerWidth - dims.width) / 2) + "px"), this.options.showCredits && (dims.height -= 13), dims }, setWrapperDimensions: function () { var wrapperWidth = getComputedWidthAndHeight(this.wrapper).width, wrapperHeight = getComputedWidthAndHeight(this.wrapper).height, dims = this.calculateDims(wrapperWidth, wrapperHeight); window.location === window.parent.location || this.options.makeResponsive || (dims = this.responsivizeIframe(dims)), this.wrapper.style.height = parseInt(dims.height) + "px", this.wrapper.style.width = parseInt(dims.width) + "px" }, optimizeWrapper: function (maxWidth) { var result = juxtapose.OPTIMIZATION_ACCEPTED; return this.imgBefore.image.naturalWidth >= maxWidth && this.imgAfter.image.naturalWidth >= maxWidth ? (this.wrapper.style.width = maxWidth + "px", result = juxtapose.OPTIMIZATION_WAS_CONSTRAINED) : this.imgAfter.image.naturalWidth < maxWidth ? this.wrapper.style.width = this.imgAfter.image.naturalWidth + "px" : this.wrapper.style.width = this.imgBefore.image.naturalWidth + "px", this.setWrapperDimensions(), result }, _onLoaded: function () { if (this.imgBefore && !0 === this.imgBefore.loaded && this.imgAfter && !0 === this.imgAfter.loaded) { if (this.wrapper = document.querySelector(this.selector), null === this.wrapper) return; addClass(this.wrapper, "juxtapose"), this.wrapper.style.width = getNaturalDimensions(this.imgBefore.image).width, this.setWrapperDimensions(), this.slider = document.createElement("div"), this.slider.className = "jx-slider", this.wrapper.appendChild(this.slider), "horizontal" != this.options.mode && addClass(this.slider, this.options.mode), this.handle = document.createElement("div"), this.handle.className = "jx-handle", this.rightImage = document.createElement("div"), this.rightImage.className = "jx-image jx-right", this.rightImage.appendChild(this.imgAfter.image), this.leftImage = document.createElement("div"), this.leftImage.className = "jx-image jx-left", this.leftImage.appendChild(this.imgBefore.image), this.slider.appendChild(this.handle), this.slider.appendChild(this.leftImage), this.slider.appendChild(this.rightImage), this.leftArrow = document.createElement("div"), this.rightArrow = document.createElement("div"), this.control = document.createElement("div"), this.controller = document.createElement("div"), this.leftArrow.className = "jx-arrow jx-left", this.rightArrow.className = "jx-arrow jx-right", this.control.className = "jx-control", this.controller.className = "jx-controller", this.controller.setAttribute("tabindex", 0), this.controller.setAttribute("role", "slider"), this.controller.setAttribute("aria-valuenow", 50), this.controller.setAttribute("aria-valuemin", 0), this.controller.setAttribute("aria-valuemax", 100), this.handle.appendChild(this.leftArrow), this.handle.appendChild(this.control), this.handle.appendChild(this.rightArrow), this.control.appendChild(this.controller), this._init() } }, _init: function () { !1 === this.checkImages() && console.warn(this, "Check that the two images have the same aspect ratio for the slider to work correctly."), this.updateSlider(this.options.startingPosition, !1), !0 === this.options.showLabels && (this.imgBefore.label && this.displayLabel(this.leftImage, this.imgBefore.label), this.imgAfter.label && this.displayLabel(this.rightImage, this.imgAfter.label)), !0 === this.options.showCredits && this.displayCredits(); var self = this; window.addEventListener("resize", (function () { self.setWrapperDimensions() })), this.slider.addEventListener("mousedown", (function (e) { (e = e || window.event).preventDefault(), self.updateSlider(e, !0), animate = !0, this.addEventListener("mousemove", (function (e) { (e = e || window.event).preventDefault(), animate && self.updateSlider(e, !1) })), this.addEventListener("mouseup", (function (e) { (e = e || window.event).preventDefault(), e.stopPropagation(), this.removeEventListener("mouseup", arguments.callee), animate = !1 })) })), this.slider.addEventListener("touchstart", (function (e) { (e = e || window.event).preventDefault(), e.stopPropagation(), self.updateSlider(e, !0), this.addEventListener("touchmove", (function (e) { (e = e || window.event).preventDefault(), e.stopPropagation(), self.updateSlider(event, !1) })) })), this.handle.addEventListener("keydown", (function (e) { var key = (e = e || window.event).which || e.keyCode, ariaValue = parseFloat(this.style.left); if (37 == key) { ariaValue -= 1; var leftStart = parseFloat(this.style.left) - 1; self.updateSlider(leftStart, !1), self.controller.setAttribute("aria-valuenow", ariaValue) } if (39 == key) { ariaValue += 1; var rightStart = parseFloat(this.style.left) + 1; self.updateSlider(rightStart, !1), self.controller.setAttribute("aria-valuenow", ariaValue) } })), this.leftImage.addEventListener("keydown", (function (event) { var key = event.which || event.keyCode; 13 != key && 32 != key || (self.updateSlider("90%", !0), self.controller.setAttribute("aria-valuenow", 90)) })), this.rightImage.addEventListener("keydown", (function (event) { var key = event.which || event.keyCode; 13 != key && 32 != key || (self.updateSlider("10%", !0), self.controller.setAttribute("aria-valuenow", 10)) })), juxtapose.sliders.push(this), this.options.callback && "function" == typeof this.options.callback && this.options.callback(this) } }, juxtapose.makeSlider = function (element, idx) { void 0 === idx && (idx = juxtapose.sliders.length); var w = element, images = w.querySelectorAll("img"), options = {}; w.getAttribute("data-animate") && (options.animate = w.getAttribute("data-animate")), w.getAttribute("data-showlabels") && (options.showLabels = w.getAttribute("data-showlabels")), w.getAttribute("data-showcredits") && (options.showCredits = w.getAttribute("data-showcredits")), w.getAttribute("data-startingposition") && (options.startingPosition = w.getAttribute("data-startingposition")), w.getAttribute("data-mode") && (options.mode = w.getAttribute("data-mode")), w.getAttribute("data-makeresponsive") && (options.mode = w.getAttribute("data-makeresponsive")), specificClass = "juxtapose-" + idx, addClass(element, specificClass), selector = "." + specificClass, w.innerHTML ? w.innerHTML = "" : w.innerText = "", slider = new juxtapose.JXSlider(selector, [{ src: images[0].src, label: images[0].getAttribute("data-label"), credit: images[0].getAttribute("data-credit") }, { src: images[1].src, label: images[1].getAttribute("data-label"), credit: images[1].getAttribute("data-credit") }], options) }, juxtapose.scanPage = function () { for (var elements = document.querySelectorAll(".juxtapose"), i = 0; i < elements.length; i++)juxtapose.makeSlider(elements[i], i) }, juxtapose.JXSlider = JXSlider, window.juxtapose = juxtapose, juxtapose.scanPage() }(document, window), function (win, doc) { function docHijack(p) { var old = doc[p]; doc[p] = function (v) { return addListen(old(v)) } } function addEvent(on, fn, self) { return (self = this).attachEvent("on" + on, (function (e) { var e; (e = e || win.event).preventDefault = e.preventDefault || function () { e.returnValue = !1 }, e.stopPropagation = e.stopPropagation || function () { e.cancelBubble = !0 }, fn.call(self, e) })) } function addListen(obj, i) { if (i = obj.length) for (; i--;)obj[i].addEventListener = addEvent; else obj.addEventListener = addEvent; return obj } win.addEventListener || (addListen([doc, win]), "Element" in win ? win.Element.prototype.addEventListener = addEvent : (doc.attachEvent("onreadystatechange", (function () { addListen(doc.all) })), docHijack("getElementsByTagName"), docHijack("getElementById"), docHijack("createElement"), addListen(doc.all))) }(window, document);
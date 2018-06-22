/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-手机': '&#xe900;',
		'icon-connection': '&#xe91b;',
		'icon-cart': '&#xe93a;',
		'icon-display': '&#xe956;',
		'icon-volume-high': '&#xea26;',
		'icon-volume-medium': '&#xea27;',
		'icon-volume-increase': '&#xea2b;',
		'icon-volume-decrease': '&#xea2c;',
		'icon-whatsapp': '&#xea93;',
		'icon-search': '&#xe986;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());

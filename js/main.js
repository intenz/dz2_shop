jQuery(document).ready(function($) {
	console.log('redy');
});

$('.info_wrapp').columnize();
$('.info__text').columnize({ width: 20 });
$('.info__text').columnize({ columns: 1 });
//přidání classy hidden k dostupnosti
const availability = document.querySelectorAll('.homepage-tabs-wrapper .p-in-in .availability');

for (const avail of availability) {
  avail.classList.add('hidden');
} 

//přidání nadpisu pro produkty na HP
$('div.p-in-in').append('<span></span>');

//přidání classy container pro carousel na hp
var element = document.querySelector('.wide-carousel');
element.classList.add('container');  

//přidání containeru pro obsah na titulní straně
var element = document.querySelector('.index-content-wrapper');
element.classList.add('container');

//přidání nadpisů a tlačítek
if($('body.type-index').length){
	$(".closest-action").insertBefore( "#tab-content" );
}
$('div.tab-content').append('<div class="btn btn-primary">Všechny akce<div>');

//přejmenování nadpisů ve footeru
$('div.custom-footer__categories>h4').html('Informace');
$('div.custom-footer__articles>h4').html('Užitečné informace');
$('span.copyright').html('© 2022 Knižní stezka k dětem, z.s.');
$('span.facebook>a').html('');
$('span.instagram>a').html('');

//předělání containeru ve footeru
var element = document.querySelector('.footer-rows');
element.classList.remove('container');

var element = document.querySelector('.custom-footer');
element.classList.add('container');

//přidání info pro akce
function productInfo(){
	$(".products-block .product .p").each(function () {
  	var rightPlace = $(this).find('.right-place');               
    if(!$(rightPlace).length){
    	var find = $(this).find('a.image');
      var locate = $(this).find('.p-in-in');   
      $(find).addClass('right-place');
      var storedurl = $(find).attr('href');                  
      $.get(storedurl, function(html){
      	var txt = $(html).find('.detail-parameters.second');
        $(locate).append(txt);
      });  
    }
  });   
}
if($('.products-block .product').length){
  $(document).ready(function(){
    productInfo();
	})
  document.addEventListener('ShoptetDOMPageContentLoaded', function () {
    productInfo();
  })
}

//přidání blogu na hp
if($('body.type-index').length){
$("#insert-blog").load("/blog-hp/ .news-wrapper");
}

//přidání mime digital do patičky
$('span#signature').append('<a href="https://www.mimedigital.cz/" class="mime-digital"><img src="https://551696.myshoptet.com/user/documents/upload/mime.svg"> mime digital</a>')

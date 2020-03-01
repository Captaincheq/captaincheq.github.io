$(document).ready(function() {

	
function pinintro() {
	var pinIntro = new ScrollMagic.Scene({
		triggerElement: '#intro',
 		triggerHook: 0,
 	})

 	.setPin('#intro', {pushFollowers: false})
 	.addTo(controller);

}

//----------POSICIONAR CONTENEDOR PERFIL ---------------------------------------

function perfil(){
	var IntroTl = new TimelineMax();
	IntroTl

	new ScrollMagic.Scene({
		duration: '130%'
	})
	.setTween(IntroTl)
	.triggerElement($('body')[0])
	.addTo(controller);
}

//----------ALTO Y ANCHO CONTENEDOR PERFIL-------------------------------------------------------------
function xycont(){
	var IntroTl2 = new TimelineMax();
	IntroTl2
		.to('#flechaScroll', 1, {autoAlpha:0})
		.to('#intro', 4, {xPercent: '-50%'})
		.to('#contenedorDatos', 3, {height:300, width:300})
		.to('#contenedorDatos', 2, {css:{borderRadius: '10px'}})
		.to('#contenedorDatos', 2, {height:'80%'})
		.to('#contenedorDatos', 2, {css:{marginTop:120}})

	new ScrollMagic.Scene({
		duration: '90%'
	})
	.setTween(IntroTl2)
	.triggerElement($('body')[2])
	.addTo(controller);
}

//---------------TEXTO PAJARITOS ESCENA UNO-----------------------------
function birdstext(){
var bocadillos = new TimelineMax();
  bocadillos

    .fromTo('.boc-ilus', 1, {scale: 0},{scale: 1, delay:2})
    .fromTo('.boc-anim', 1, {scale: 0},{scale: 1})
    .fromTo('.boc-prog', 1, {scale: 0},{scale: 1})

 	new ScrollMagic.Scene({
		duration: '110%'
	})
	.setTween(bocadillos)
	.triggerElement('.seccion1')
	.addTo(controller);
}
//------------------FIJAR ESCENA UNO--------------------------------

function pinuno(){
	var pinescena1 = new ScrollMagic.Scene({
		triggerElement: '.seccion1',
 		triggerHook: 0,
 		duration:'60%'
 	})
	
 	.setPin('.contenedor-central')
 	.addTo(controller);
}

//------------------FIJAR ESCENA DOS--------------------------------
function pindos(){
var ilus = new TimelineMax();
  ilus
  .to('#marikita', 3,{bezier:{ values:[{y:-220, x:8 }, {y:-459, x:-52}],autoRotate:["x","y","rotation",90,false]}})
  .to('#ilus', 1, {autoAlpha: 1, scale: 0.7, ease:Power1.easeInOut},0)

var pinescena2 = new ScrollMagic.Scene({
		triggerElement: '.seccion2',
 		triggerHook: 0,
 		duration:'50%'
 	})
	
 	.setPin('.contenedor-central')
	.setTween(ilus)
 	.addTo(controller);
}

//------------------FIJAR ESCENA TRES-----------------------------------------------------
 	function pintres(){
var anim = new TimelineMax();
  anim

    .to('#anim', 1,  {autoAlpha: 1, scale: 0.7, ease: Power4.easeOut})
    .to('#prog', 1,  {autoAlpha: 1, scale: 0.7, ease: Power4.easeOut, delay:3})

 var pinescena3 = new ScrollMagic.Scene({
		triggerElement: '.seccion3',
 		triggerHook: 0,
 		duration:'50%'
 	})
	
 	.setPin('.contenedor-central')
	.setTween(anim)
 	.addTo(controller);
}
	//---------------------------MOVIMIENTO CONTINUO-----------------------------------------------------

function ojos(){

	var tl = new TimelineMax({repeat:-1}) 
		tl .from('.ojos', 0.2, {scaleY:'0px' , repeat:4, yoyo:true})
		   .from('.ojos', 0.2, {scaleY:'0px' , repeat:2, yoyo:true, delay:4})
}

var ancho = $(window).width(); 
var controller = new ScrollMagic.Controller();


	if (ancho <= 500) {

	} else if (ancho > 500 && ancho < 1024) {

	birdstext();
	pinuno();
	pindos();
	pintres();
	ojos();


	}
	else{
	pinintro();
	perfil();
	xycont();
	birdstext();
	pinuno();
	pindos();
	pintres();
	ojos();

	}

$(window).on('resize',function(){location.reload();});


});
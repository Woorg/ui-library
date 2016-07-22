import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'bxslider';
import 'owl-carousel-2-beta';
import 'magnific-popup';
import 'jquery-ui/ui/core';
import 'jquery-ui/ui/widget';
import 'jquery-ui/ui/effect';
import 'jquery-ui/ui/widgets/mouse';
import 'jquery-ui/ui/widgets/button';
import 'jquery-ui/ui/widgets/accordion';
import 'jquery-ui/ui/widgets/slider';
import 'jquery-ui/ui/widgets/spinner';


$(() => {
	svg4everybody();

	// Responsive menu
	function menuResponsive() {
		const menuResponsiveButton = $('.menu-responsive__button');
		const menuResponsiveButtonActive = 'menu-responsive__button_active';
		const menuResponsiveList = $('.menu-responsive__list');
		const menuResponsiveListActive = 'menu-responsive__list_active';
		menuResponsiveButton.click(function () {
			menuResponsiveButton.toggleClass(menuResponsiveButtonActive);
			menuResponsiveList.toggleClass(menuResponsiveListActive);
		});

		console.log('responsive menu loaded');
	}


	// Responsive menu
	function menuOffcanvas() {
		const menuOffcanvasButton = $('.menu-offcanvas__button');
		const menuOffcanvasButtonActive = 'menu-offcanvas__button_active';
		const menuOffcanvasList = $('.menu-offcanvas__list');
		const menuOffcanvasListActive = 'menu-offcanvas__list_active';
		menuOffcanvasButton.click(function () {
			menuOffcanvasButton.toggleClass(menuOffcanvasButtonActive);
			menuOffcanvasList.toggleClass(menuOffcanvasListActive);
		});

		console.log('offcanvas menu loaded');
	}

	// Tabs
	function tabs() {
		const tabsNavLink = $('.tabs__link');
		const tabsNavLinkActive = 'tabs__link_active';
		const tab = $('.tabs__tab');
		const tabActive = 'tabs__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			const tabCurrent = $(this).attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();

			// carouselSecond.reloadSlider();

			console.log(tabCurrent);

		});
	}

	// owlCarousel
	function carouselOwl() {
		const owlcarousel = $('.carousel-owl__list');
		owlcarousel.owlCarousel({
			margin: 10,
			autoWidth: false,
			items: 3,
			loop: true,
			center: false,
			stagePadding: 0,
			dots: true,
			responsive: {
				320: {
					items: 2
				},
				768: {
					items: 2
				},
				1000:{
					items: 4
				}
			}

		});
		console.log('owlCarouselLoaded');
	}

	// bxSlider
	function bxslider() {
		const sliderBx = $('.slider-bx__list');
		sliderBx.bxSlider({
			mode: 'horizontal',
			slideMargin: 0,
			infiniteLoop: true,
			useCSS: true
			// minSlides: 3,
			// maxSlides: 3
		});

		console.log('bxsliderLoaded');

	}

	// Spinner
	function spinner() {
		const amountSpinner = $('.spinner__input');
		const amountSpinnerUp = $('.spinner__button_up');
		const amountSpinnerDown = $('.spinner__button_down');

		amountSpinner.spinner({
			max: 50,
			min: 0,
			step: 1
		});

		amountSpinnerUp.click(function () {
			amountSpinner.spinner('stepUp');
		});

		amountSpinnerDown.click(function () {
			amountSpinner.spinner('stepDown');
		});

	}


	function priceRange() {
		const rangeSlider = $('.range-slider__slider');
		const priceTextFrom = $('.range-slider__input#price-from');
		const priceTextTo = $('.range-slider__input#price-to');
		const priceInputFrom = $('.range-slider__price-from span');
		const priceInputTo = $('.range-slider__price-to span');

		// Range slider
		rangeSlider.slider({
			min: 100,
			max: 99999,
			values: [ 0, 99999 ],
			range: true,
			step: 1,
			slide: function (event, ui) {
				priceTextFrom.val( ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');
				priceTextTo.val( ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1 ') + '');

				priceInputFrom.text(ui.values[0]);
				priceInputTo.text(ui.values[1]);

				// $('.filter__price-input#price-from').val(ui.values[0]);
				// $('.filter__price-input#price-to').val(ui.values[1]);
			}
			// change: function(event, ui) {
			// 	$('.filter__price-input#price-from').val(ui.values[0]);
			// 	$('.filter__price-input#price-to').val(ui.values[1]);
			// }
		});

		// $('.filter__price-input#price-from').val($('.filter__range-slider').slider('values', 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");
		// $('.filter__price-input#price-to').val($('.filter__range-slider').slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + "");


		// $('.range-slider__input#price-from').keyup(function () {
		// 	$('.range-slider__slider').slider('values', 0, this.value);
		// });
		// $('.range-slider__input#price-to').keyup(function () {
		// 	$('.range-slider__slider').slider('values', 0, this.value);
		// });

		console.log('rangeSlider loaded');
	}




	menuResponsive();
	menuOffcanvas();
	tabs();
	carouselOwl();
	bxslider();
	spinner();
	priceRange();


});

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


	function carouselOwl() {
		const owlcarousel = $('.carousel-owl__list');
		owlcarousel.owlCarousel({
			margin: 30,
			items: 3,
			loop: true,
			center: true,
			stagePadding: 10,
			dots: true,
			responsive: {
				768: {
					items: 2
				}
			}

		});
		console.log('owlCarouselLoaded');
	}


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


	menuResponsive();
	menuOffcanvas();
	tabs();
	carouselOwl();
	bxslider();
	spinner();



});

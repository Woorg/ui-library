import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'owl-carousel-2-beta';

$(() => {
	svg4everybody();

	menuResponsive();
	menuOffcanvas();
	tabs();
	carouselOwl()
	// Responsive menu

	function menuResponsive() {
		let menuResponsiveButton = $('.menu-responsive__button');
		let menuResponsiveButtonActive = 'menu-responsive__button_active';
		let menuResponsiveList = $('.menu-responsive__list');
		let menuResponsiveListActive = 'menu-responsive__list_active';
		menuResponsiveButton.click(function() {
			menuResponsiveButton.toggleClass(menuResponsiveButtonActive);
			menuResponsiveList.toggleClass(menuResponsiveListActive);
		});

		console.log('responsive menu loaded');
	}


	// Responsive menu

	function menuOffcanvas() {
		let menuOffcanvasButton = $('.menu-offcanvas__button');
		let menuOffcanvasButtonActive = 'menu-offcanvas__button_active';
		let menuOffcanvasList = $('.menu-offcanvas__list');
		let menuOffcanvasListActive = 'menu-offcanvas__list_active';
		menuOffcanvasButton.click(function() {
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
		const owlcarousel = $('.carousel-owl__list').owlCarousel({
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



});

// Слайдер
$(document).ready(function () {
	$('.slider').slick({
		variableWidth: true,
		arrows: true,
		slidesToShow: 2,
		swipe: false,
		slidesToScroll: 3,
		initialSlide: 1,
		infinite: true,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1270,
				settings: {
					touchThreshold: 10,
					swipe: true,
					slidesToScroll: 3,
					arrows: true,
				}
			},
			{
				breakpoint: 768,
				settings: {
					touchThreshold: 10,
					swipe: true,
					slidesToScroll: 3,
					arrows: false
				}
			}
		],
	});
	$('.slider-small').slick({
		variableWidth: true,
		arrows: true,
		slidesToShow: 1,
		dots: true,
		swipe: false,
		initialSlide: 1,
		infinite: true,
	});
});
// Раскрытие меню
$('.burger-menu').click(() => {
	$('.header__nav-mobile').slideToggle()
})
function myFunction(x) {
	x.classList.toggle("change");
}
$('.header__nav-mobile').click(function(e) {
	var container = $(".header__nav-mobile");
		container.hide();
		$('.burger-menu').removeClass("change")
});
//Карта
$(document).ready(function ($) {
	$('.give-money__info-link ').click(function () {
		$('.map__wrapper').fadeIn();
		return false;
	});
	$('.map__close').click(function () {
		$(this).parents('.map__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.map__wrapper').fadeOut();
		}
	});
	$('.map__wrapper').click(function (e) {
		if ($(e.target).closest('.map').length === 0) {
			$(this).fadeOut();
		}
	});
});
//Форма "Кому и куда передать"
$(document).ready(function ($) {
	$('.bring__bring-link').click(function () {
		$('.bring-form__wrapper').fadeIn();
		return false;
	});
	$('.bring-form__close').click(function () {
		$(this).parents('.bring-form__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.bring-form__wrapper').fadeOut();
		}
	});
	$('.bring-form__wrapper').click(function (e) {
		if ($(e.target).closest('.bring-form').length === 0) {
			$(this).fadeOut();
		}
	});
});
//Форма "Автопомощь"
$(document).ready(function ($) {
	$('.car-help__btn-car-help').click(function () {
		$('.car-help-form__wrapper').fadeIn();
		return false;
	});
	$('.car-help-form__close').click(function () {
		$(this).parents('.car-help-form__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.car-help-form__wrapper').fadeOut();
		}
	});
	$('.car-help-form__wrapper').click(function (e) {
		if ($(e.target).closest('.car-help-form').length === 0) {
			$(this).fadeOut();
		}
	});
});
// Форма Забрать домой
$(document).ready(function ($) {
	$('.slider__btn-take-home').click(function () {
		$('.take-home-form__wrapper').fadeIn();
		return false;
	});
	$('.take-home-form__close').click(function () {
		$(this).parents('.take-home-form__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.take-home-form__wrapper').fadeOut();
		}
	});
	$('.take-home-form__wrapper').click(function (e) {
		if ($(e.target).closest('.take-home-form').length === 0) {
			$(this).fadeOut();
		}
	});
});
// Форма Забрать на передержку
$(document).ready(function ($) {
	$('.slider__btn-take').click(function () {
		$('.take-form__wrapper').fadeIn();
		return false;
	});
	$('.take-form__close').click(function () {
		$(this).parents('.take-form__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.take-form__wrapper').fadeOut();
		}
	});
	$('.take-form__wrapper').click(function (e) {
		if ($(e.target).closest('.take-form').length === 0) {
			$(this).fadeOut();
		}
	});
});
// Карточка питомца
$(document).ready(function ($) {
	$('.slider__link').click(function () {
		$('.pet-card__wrapper').fadeIn();
		return false;
	});
	$('.pet-card__close').click(function () {
		$(this).parents('.pet-card__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.pet-card__wrapper').fadeOut();
		}
	});
	$('.pet-card__wrapper').click(function (e) {
		if ($(e.target).closest('.pet-card').length === 0) {
			$(this).fadeOut();
		}
	});
});
// Маска для поля номер телефона
$(function () {
	$("#phone").mask("375 (99) 99 999 99");
});
$(function () {
	$("#phone-volunteering").mask("375 (99) 99 999 99");
});
$(function () {
	$("#phone-take-home").mask("375 (99) 99 999 99");
});
$(function () {
	$("#phone-take").mask("375 (99) 99 999 99");
});
var labelName = document.getElementById("label-name")
$(document).on('input', 'input[id="name"]', function () {
	var $this = $(this),
		val = $this.val();
	if (val.length >= 1) {
		labelName.style.visibility = "visible"
		//и не в фокусе
		labelName.style.color = "#6B6B6B"
	}
	else {
		labelName.style.visibility = "hidden"
		labelName.style.color = "#E5A900"
	}
});

// Смена текста в заисимости от заполнения полей формы
function changeColor(ev) {
	var text = document.getElementById("form-input-info")
	$('.form-button-fake').on('click', () => {
		if ($('.btn-send').is(':disabled') == true) {
			text.style.color = "#B40000";
			text.innerText = "Вы не ввели номер телефона. Это поле обязательное.";
		}
		else {
			text.style.color = "#B3B3B3";
			text.innerText = "Обязательное поле для заполнения";
		}
	});
}
changeColor()
//Форма "Волонтерство"
$(document).ready(function ($) {
	$('.volunteer__btn').click(function () {
		$('.volunteering-form__wrapper').fadeIn();
		return false;
	});
	$('.volunteering-form__close').click(function () {
		$(this).parents('.volunteering-form__wrapper').fadeOut();
		return false;
	});
	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.volunteering-form__wrapper').fadeOut();
		}
	});
	$('.volunteering-form__wrapper').click(function (e) {
		if ($(e.target).closest('.volunteering-form').length === 0) {
			$(this).fadeOut();
		}
	});
});
// Валидация формы
var btnSend = document.getElementById("phone")
$('#phone').on('keyup', function () {
	var $this = $(this),
		val = $this.val();
	console.log(btnSend.val)
	if (val.length >= 1) {
		$(".btn-send").removeAttr("disabled")
		// document.getElementsById('form-button-wrapper').style.display = "none"
	} else {
		$(".btn-send").attr("disabled", "disabled")
	}
});
function displayTextareaTooltip() {
	var label = document.getElementById("remarks")
	$(".textarea-remarks").hover(function () {
		$(".textarea-tooltip__inner").css('display', 'none');
	});
	$(".textarea-remarks").mouseover(function () {
		$(".textarea-tooltip__inner").css('display', 'block');
	});
}
displayTextareaTooltip()
// Раскрытие блока новостей
function displayComments() {
	let comments = document.getElementsByClassName("news__item")
	comments = [].slice.call(comments)
	const button = document.getElementById("show_more")
	comments.map((comment, i) => {
		if (comment) {
			button.onclick = () => {

				$('.news__item').removeAttr('hidden')
				button.innerText = "Скрыть новости"
			}
		}
		comment.hidden = true
		if (i <= 1) {
			comment.hidden = false
		}
		if (i >= 1) {
		}
	})
}
displayComments()
// Код для анимации
const animItems = document.querySelectorAll('._anim-items');
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}
			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}
			else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}
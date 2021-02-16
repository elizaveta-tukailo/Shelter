// Блок select для фильтрации карточек питомцев
jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open'); 
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
        // document.getElementsById(".select__item").style.color = "red"
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

let selectAnimals = () => {
    let animals = document.getElementsByClassName('pets__wrap'),
        buttons = document.getElementsByClassName('select__animal')
    animals = [].slice.call(animals)
    buttons = [].slice.call(buttons)
    animals.map(animal => {
        buttons.map(button => {
            if(animal.dataset.animal == button.dataset.animal) {
                animal.hidden = false
            }
            $(button).click(function() {
              if( button.dataset.animal == animal.dataset.animal) {
                    animal.hidden = false
                    
                } else if(button.dataset.animal == 'all') {
                    animal.hidden = false
                } 
                else {
                    animal.hidden = true
                }
            })
        })
    })
}
selectAnimals()
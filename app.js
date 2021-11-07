var search_bar = document.getElementById('searchbar');
var search_field = document.getElementById('search_field');

console.log(search_field);
console.log(search_bar);

search_field.addEventListener('focus', () => {
    console.log("this");
    search_bar.style.backgroundColor = 'white';
    search_bar.style.border = '1px rgb(240, 240, 240) solid';

});

search_field.addEventListener('focusout', () => {
    console.log("this");
    search_bar.style.cssText = 'background-color = rgb(248, 248, 248);';
    search_bar.style.border = 'none';

});


var slides = document.getElementsByClassName('carousel_slide');
var buttons = document.getElementsByClassName('slide_button');

buttons = Array.from(buttons);

var find_element = (e) => {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] == e.target) {
            console.log(i);
            console.log("this");
            slides[i].classList.add('visible_slide');
            slides[i].classList.remove('hidden_slide');
            buttons[i].classList.add('selected');
            buttons[i].classList.remove('unselected');
        } else {
            console.log("not this");
            buttons[i].classList.add('unselected');
            buttons[i].classList.remove('selected');
            slides[i].classList.add('hidden_slide');
            slides[i].classList.remove('visible_slide');
        }
    }
}

buttons.forEach(element => {

    element.addEventListener('click', (e) => find_element(e))
});
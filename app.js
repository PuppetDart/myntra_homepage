var search_bar = document.getElementById('searchbar');
var search_field = document.getElementById('search_field');

console.log(search_field);
console.log(search_bar);

var change_searchbar_color = () => {
    search_bar.style.backgroundColor = 'white';
    search_bar.style.border = '2px red solid';
}
search_field.addEventListener('focus', () => change_searchbar_color);


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
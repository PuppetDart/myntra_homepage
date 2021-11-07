var slides = document.getElementsByClassName('carousel_slide');
var buttons = document.getElementsByClassName('slide_button');

console.log(buttons[0]);

buttons = Array.from(buttons);

var find_element= (e)=>{
    for(var i=0;i<buttons.length;i++){
        if(buttons[i]==e.target){
            console.log(i);
            console.log("this");
            slides[i].classList.add('visible_slide');
            slides[i].classList.remove('hidden_slide');
            buttons[i].classList.add('selected');
            buttons[i].classList.remove('unselected');
        }
        else{
            console.log("not this");
            buttons[i].classList.add('unselected');
            buttons[i].classList.remove('selected');
            slides[i].classList.add('hidden_slide');
            slides[i].classList.remove('visible_slide');
        }
    }
}

buttons.forEach(element => {

    element.addEventListener('click', (e)=>find_element(e) )
});


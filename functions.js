"use strict";

const buttonclick = document.getElementById('button');
const list = document.getElementById('lists');
const a = "<span><button class = 'rbutton'> &#10005</button></span>";   //list-item button


const clickhandler = () => {
    const text = document.getElementById('input');

    //creating a list element
    if(text.value != '') {
        let Newdiv = document.createElement('div');
        Newdiv.classList.add('list-item')

        // appending elements
        Newdiv.innerHTML = text.value + a;
        list.appendChild(Newdiv);

        //reseting the input
        text.value = ''

        //adding event handlers
        let b = document.getElementsByClassName('rbutton');
        for(let i = 0; i < b.length; i++) {
            b[i].addEventListener('click', function() {
                this.parentElement.parentElement.remove();
            });
        }
        
}
}

/// Handler for Reset button
document.getElementById('reset').addEventListener('click', function(){
    list.innerText = ''
})



buttonclick.addEventListener('click', clickhandler);


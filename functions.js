"use strict";

const buttonclick = document.getElementById('button');
const list = document.getElementById('lists');
const OK = "<button class = 'OK'>Save</button>";
const listItem_EditBtn = "<button class = 'listItemEditBtn'>Edit</button>";

const clickhandler = () => {
    const text = document.getElementById('input');

    //creating a list element
    if(text.value != '') {

        // Creating list elements
        let itemDiv = document.createElement('div');
        let itemInput = document.createElement('input');
        let listItem_DeleteBtn = document.createElement('button')

        //Adding Classlists
        itemInput.classList.add('item_input');
        listItem_DeleteBtn.classList.add('rbutton');
        

        // Giving the input value to our 2d0
        itemInput.defaultValue = text.value;
        itemInput.disabled = true;

        //Adding items/strings in elements created
        listItem_DeleteBtn.innerText = 'X';
        itemDiv.innerHTML = listItem_EditBtn + OK;
        itemDiv.appendChild(itemInput);
        itemDiv.appendChild(listItem_DeleteBtn);
        list.appendChild(itemDiv)

        //reseting the input
        text.value = ''

        //adding event handler to delete button
        let deleteButtonHandler = document.getElementsByClassName('rbutton');
        for(let i of deleteButtonHandler){
            i.addEventListener('click', function(){
                this.parentElement.remove() // single parent cause i removed span
            })
        }

        //adding eventhandler to edit button
        let editBtnHandler = document.getElementsByClassName('listItemEditBtn');
        for(let button of editBtnHandler){
            button.addEventListener('click', function(){
                this.nextElementSibling.nextElementSibling.disabled = false;
                this.style.display = 'none';
                this.nextElementSibling.style.display = 'inline-block'
            })
        }

        // adding eventhandler to OK button
        let saveBtnHandler = document.getElementsByClassName('OK');
        for(let l of saveBtnHandler){
            l.addEventListener('click', function(){
                this.nextElementSibling.defaultValue = this.nextElementSibling.value;
                this.style.display = 'none';
                this.previousSibling.style.display = 'inline-block';
                this.nextElementSibling.disabled = true;
            })
            }
        }
        }  


// Handler for Reset button
document.getElementById('reset').addEventListener('click', function(){
    list.innerText = ''
})

buttonclick.addEventListener('click', clickhandler);


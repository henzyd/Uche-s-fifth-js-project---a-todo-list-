'use strict';

const textInput = document.querySelector('#text_input');
const submitBtn = document.querySelector('.submit_btn');
const body = document.querySelector('body');
const output = document.querySelector('.output');
const clear = document.querySelector('.trash');



submitBtn.addEventListener('click', () => {
    // console.log('Active');
    // console.log(textInput.value); // this shoes the text in the input
    // console.log(output.childElementCount); // this gives you the number of number of child in the element

    const span = document.createElement('span'); // this creates an element for you
    // console.log(span);
    
    const valFromInput = document.createTextNode(textInput.value); // this creates the textContent of an element
    // console.log(valFromInput);
    
    span.appendChild(valFromInput); // right here i am giving the element that i created in (col 16) the value that i created in (col 19)
    // console.log(span);  
    
    
    /////////  Delete
    const btnDelete = document.createElement('button'); // this creates an element for you
    const btnDeleteTextContent = document.createTextNode('Delete'); // this creates the textContent of an element
    btnDelete.appendChild(btnDeleteTextContent);
    span.appendChild(btnDelete); // right here i am giving the element that i created in (col 16) the value that i created in (col 19)
    btnDelete.addEventListener('click', () => {
        output.removeChild(span);
    })
    

    output.appendChild(span); // right here i am appending the span with it's value in (col 19) to the one in (Col 4)
    // console.log(output.childElementCount);
    
    
    if (textInput.value === '') {
        output.removeChild(span); //this removes the child of the element if the child is empty
    } // this is to check when nothing is inputed
    
    textInput.value = '';

})



textInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        console.log(e.preventDefault());

        ////////////// Uche i just copied what was writen in the submitBtn and pasted it here they both do the same thing
        const span = document.createElement('span'); // this creates an element for you
        // console.log(span);
        
        const valFromInput = document.createTextNode(textInput.value); // this creates the textContent of an element
        // console.log(valFromInput);
        
        span.appendChild(valFromInput); // right here i am giving the element that i created in (col 16) the value that i created in (col 19)
        // console.log(span);  
        
        
        /////////  Delete
        const btnDelete = document.createElement('button'); // this creates an element for you
        const btnDeleteTextContent = document.createTextNode('Delete'); // this creates the textContent of an element
        btnDelete.appendChild(btnDeleteTextContent);
        span.appendChild(btnDelete); // right here i am giving the element that i created in (col 16) the value that i created in (col 19)
        btnDelete.addEventListener('click', () => {
            output.removeChild(span);
        })
        

        output.appendChild(span); // right here i am appending the span with it's value in (col 19) to the one in (Col 4)
        // console.log(output.childElementCount);
        
        
        if (textInput.value === '') {
            output.removeChild(span); //this removes the child of the element if the child is empty
        } // this is to check when nothing is inputed
        
        textInput.value = '';
    }


})



/// this is to remove all the span created under output
clear.addEventListener('click', () => {
    output.innerHTML = '';
})

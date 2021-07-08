
//toggle elements
//variables so I can access the elements with the show, info and hide id's
let show = document.getElementById('show')
let info = document.getElementById('info') 
let hide = document. getElementById('hide')

//function to display the info and hide elements and hide the show element when the show element is clicked
show.addEventListener('click', () => {
    show.style.display = 'none';
    info.style.display = 'block';
    hide.style.display = 'block';
});

//This hides the info and hide elements and displays the show element when hide is clicked
hide.addEventListener('click', () => {
    show.style.display = 'block';
    info.style.display = 'none';
    hide.style.display = 'none';
})

//Show description
let description = document.getElementById('')

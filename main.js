const select = document.querySelector('select');
const divContener = document.querySelector('.contener__img')
const img = document.querySelector('img')

function show() {
    if (select.value === 'one')  {
        img.src='first.png';
    } else if (select.value === 'two') {
        img.src='second.png';
    } else if (select.value === 'three') {
        img.src='threed.png';
    } else if (select.value === 'four') {
        console.log('Hello')
        img.src='fourd.png';
    } else if (select.value === 'five') {
        img.src='photo-output.PNG';
    }
}
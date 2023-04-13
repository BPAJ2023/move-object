const div = document.querySelector('.item');
let divUp = false;



div.addEventListener('mousedown', (e)=>{
    console.log('złapełem!');
    div.style.backgroundColor = 'grey';
    divUp = true;
    x = e.offsetX;
    y = e.offsetY;
})

div.addEventListener('mousemove', (e)=>{
    const pageX = e.clientX;
    const pageY = e.clientY;
        
    if(divUp) {
    div.style.left = pageX-x+'px';
    div.style.top = pageY-y+'px';
    console.log(div.style.left,pageX,x);
    } else
    
    console.log('nie złapałeś!')
})

div.addEventListener('mouseup', ()=>{
    console.log('puściłem!');
    div.style.backgroundColor = 'black';
    divUp = false;
})

// const addDiv = ()=>{
//     document.createElement('div');
//     console.log('stworzono diva');
//     div.style.backgroundColor = 'red';
//     div.style.height = '100px';
//     div.style.width = '100px';
//     div.style.border = 'doshted 2px black';
//     div.style.borderRadius = '50%';
//     document.body.appendChild(div);
//     console.log('dodałem diva');
// }

// document.body.addEventListener('dblclick', addDiv);
const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',checkbox)
checkbox()
function checkbox(){
    const scroll_height=window.innerHeight / 5 *4
    boxes.forEach(box => {
        const box_top=box.getBoundingClientRect().top

        if(box_top < scroll_height)
        {
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
       
        
    });
}
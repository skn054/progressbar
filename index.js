const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')


let curr_active = 1;
prev.addEventListener('click',()=>{
    curr_active--;
    if(curr_active < 1){
        curr_active = 1
    }

    update();
})

function update(){
    circles.forEach((circle,index) => {
        if(index < curr_active){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    if(curr_active == circles.length){
        next.disabled = true;
    }
    else if(curr_active === 1)
        prev.disabled = true;
    else{
        prev.disabled = false;
        next.disabled = false;

    }

    progress.style.width = ((curr_active -1 )/ (circles.length -1)  * 100) + '%';
}


next.addEventListener('click',()=>{
    curr_active++;
    if(curr_active > circles.length ){
        curr_active = circles.length;
        
    }

    update();

    // progress.style.width = ((curr_active / circles.length) * 100) + '%'; 
})  
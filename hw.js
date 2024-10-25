
const p = document.getElementById('count')
const span = document.getElementById('step')
const incBtn =document.getElementById('inc')
const decrBtn =document.getElementById('decr')
const addStep = document.getElementById('addStep')
const decrStep = document.getElementById('dercStep')

let count = 0;
let step = 1;

p.innerText =count
span.innerText= step

const changeStep =(option) =>{
    if(step == 1 && option !== 'addStep') return alert('number shoul be positive')
    step = option === 'addStep' ? step+=1 : step-=1;
    span.innerText = step;
}

addStep.addEventListener('click', () =>{
    changeStep('addStep')
})

decrStep.addEventListener('click',changeStep)

const changeCount = (option) => {
    count = option === 'inc' ? count + step : count - step;
    p.innerText =count
};

incBtn.addEventListener('click',() => {
    changeCount('inc'); 
});

decrBtn.addEventListener('click',() => {
    changeCount('decr')
});


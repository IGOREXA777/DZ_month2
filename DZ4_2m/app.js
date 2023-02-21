//1
const h2 = document.querySelector('.text')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')

let i = 0;

plus.onclick = () => {
    i++
    if (i>0){
        h2.innerText = i
        h2.style.color = 'blue'
    }
}

minus.onclick = () =>{
    i--
    if(i>=0){
        h2.innerText = i
        h2.style.color = 'red'
    }
}

//2
const x = document.querySelector('.x')
const y = document.querySelector('.y')
const block = document.querySelector('.block')
block.onmousemove = (e) => {
    x.innerText = 'X '+e.screenX
    y.innerText = 'Y '+e.screenY
}

//3
const green = document.querySelector('.green')
const gr = document.querySelector('.gr')
const red = document.querySelector('.red')
const rd = document.querySelector('.rd')
const yellow = document.querySelector('.yellow')
const yl = document.querySelector('.yl')

const prom = prompt('введите цвет светофора').trim()

switch (prom) {
    case 'red':
        red.style.background = 'red'
        rd.innerText = 'stop'
        break
    case 'yellow':
        yellow.style.background = 'yellow'
        yl.innerText = 'wait'
        break
    case 'green':
        green.style.background = 'green'
        gr.innerText = 'go'
        break
    default: alert('error')
}




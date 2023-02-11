let igor = Number(prompt('первое число '))
let igor2 = Number(prompt('первое число '))

function func(a, b) {
    if (a > b){
        alert('минимальное число '+ b)
    } else if (a < b){
        alert('минимальное число '+ a)
    } else if (a === b){
        alert(a, b)
    } else {
        alert('error')
    }
}

func(igor, igor2)

//2
let p = prompt('введите что нибудь')
function war(g) {
    console.log(g.length)
}
war(p)

//3
let daf = Number(prompt('введите первое число'))
let daf3 = (prompt("введите +, -, /, *"))
let daf2= Number(prompt('введит второе число '))
let result;
function colc(daf, daf3, daf2, result) {
    switch (daf3) {
        case '+':
            alert(result = daf + daf2)
            break
        case '-':
            alert(result = daf - daf2)
            break
        case'*':
            alert(result =daf * daf2)
            break
        case'/':
            if (daf === 0 || daf2 === 0){
                alert('делить на ноль нельзя')
                break
            }
            alert(result = daf / daf2)
            break
        default:
            alert('error')
    }
}

colc(daf,daf3, daf2, result)
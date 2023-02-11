var arr = [10, 20, 30, 50, 235, 3000]
var arr2 = []

for ( var i=0;i< arr.length; i++){
    var num =arr[i].toString()
    if(num[0] === '1' || num[0] === '2' || num[0] === '5'){
        arr2.push(arr[i])
    }
}
console.log(arr2)

//2
for (var a = 20; a >= 0; a--){
    console.log(a)
}

//3
var obj = {
    red: "stop",
    yellow: 'wait',
    green: 'go',
    error: 'ERROR'
}


var color = prompt('Введите цвет светофора')
var prom = obj[color]

if (prom){
    alert(prom)
}else {
    alert(obj.error)
}
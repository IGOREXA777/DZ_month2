const inp = document.querySelector('#inp')
const btn = document.querySelector('.btn')


function main(){
    if (inp.value.trim() === ''){
        return false
    }else {
        let arr = []
        arr.push(inp.value)
        arr.forEach(i => {
            const d = document.createElement('p')
            d.innerText = i.split('').reverse().join('')
            document.body.append(d)
        })
        inp.value = ''
    }
}


btn.onclick = () => main()
var num = Number(prompt('оценки сервиса от 1 до 10'))

if (num >= 5 ){
    alert('Спасибо за высокую оценку!')
} else if (num < 5) {
    alert( 'Мы работаем над улучшением сервиса!')
} else {
    alert('error')
}

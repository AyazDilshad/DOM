const colors = ["#00FF00", "#0000FF", "#355E3B", "#FFFF00", "#00A36C", "#800080"]

var colorName = document.querySelector('span')

function colorHandler() {
    const randomGeneratedNum = Math.floor(Math.random() * 6)
    colorName.textContent = colors[randomGeneratedNum]
    document.body.style.backgroundColor = colors[randomGeneratedNum]
}
function decHandler() {
    var num = document.querySelector(".start")
    var test = num.innerHTML;
    --test;
    document.querySelector(".start").innerHTML = test;
}
decHandler();



function incHandler() {
    var num = document.querySelector(".start")
    var test = num.innerHTML;
    ++test;
    document.querySelector(".start").innerHTML = test;
}
incHandler()


function resHandler() {
    var num = document.querySelector(".start")
    var test = num.innerHTML;
    ++test;
    document.querySelector(".start").innerHTML = 0;
}
resHandler()
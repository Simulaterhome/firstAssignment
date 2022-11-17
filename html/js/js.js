function changeText(){
    document.getElementById("id00001").innerHTML="IS OPEN!"
}
function nextPage(){
if (document.getElementById("id00001").innerHTML==="IS OPEN!") {
    setTimeout(() => {
        window.location="./CloseStore.html"
    }, 1000);
    
}
}
function buttonHandler(x) {
    x.classList.toggle("fa-square")
    x.classList.toggle("fa-square-check")
}
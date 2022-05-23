const questions = document.querySelectorAll('.questions')
const button = document.querySelectorAll("ion-icon")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const question = e.currentTarget.parentElement.parentElement;
    function toggle(){
        question.classList.toggle("active")
    }
        question.addEventListener("click", toggle())
    })
})





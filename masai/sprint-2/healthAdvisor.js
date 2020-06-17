
var globalData = [
    globalFoodData = {},
    globalExerciseData = {}
]

window.onload = function(){
    var btn = document.querySelector('form')
    btn.addEventListener('submit',getUserDetails)
}

function getUserDetails(){
    event.preventDefault()
    var userInput = document.getElementsByClassName('input')
    globalFoodData[userInput[0].value] = userInput[1].value
    globalExerciseData[userInput[2].value] = userInput[3].value
    console.log(globalData)
}

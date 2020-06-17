
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

    // these lines of codes checks, if a particular food or exercise is already present, if yes add the calories else make a new entry
    if( globalFoodData[userInput[0].value]){
        globalFoodData[userInput[0].value] = Number(globalData[0][userInput[0].value]) + Number(userInput[1].value)
    }
    else{
        globalFoodData[userInput[0].value] = Number(userInput[1].value)
    }

    if(globalExerciseData[userInput[2].value]){
        globalExerciseData[userInput[2].value] = Number(globalData[1][userInput[2].value]) + Number(userInput[3].value)
    }
    else{
        globalExerciseData[userInput[2].value] = Number(userInput[3].value)
    }
    console.log(globalData)

    emptyInputElements()
}

// it removes the input values after submiting the values
function emptyInputElements(){
    var userInput = document.getElementsByClassName('input')
    for(var i = 0; i < userInput.length; i++){
        if(i == 0 || i == 2){
            userInput[i].value = ''
        }
        else{
            userInput[i].value = 0
        }
    }
}
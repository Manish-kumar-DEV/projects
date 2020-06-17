
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

    renderTable()

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



function renderTable(){

    var table = document.getElementById('userResult')

    var userInput = document.getElementsByClassName('input')
    var foodItem = userInput[0].value
    var foodCalorie = Number(userInput[1].value)
    var exerciseItem = userInput[2].value
    var exerciseCalorie = Number(userInput[3].value)

    var row = document.createElement('tr')

    var calConsumed = document.createElement('td')
    calConsumed.textContent = foodItem + " : " + foodCalorie

    var calSpent = document.createElement('td')
    calSpent.textContent = exerciseItem + " : " + exerciseCalorie


    var netCalorie = getNetCalorie()
    var netCal = document.createElement('td')
    netCal.textContent = netCalorie



    row.append(calConsumed, calSpent, netCal)
    table.append(row)

}


function getNetCalorie(){
    var calConsumed = Object.values(globalData[0])
    var calSpent = Object.values(globalData[1])
    var countFoodCalorie = calConsumed.reduce(function(a,b){
        return Number(a)+Number(b)
    })
    var countExerciseCalorie = calSpent.reduce(function(a,b){
        return Number(a)+Number(b)
    })

    if(countFoodCalorie > countExerciseCalorie){
        return ("+" + (countFoodCalorie - countExerciseCalorie) )
    }
    if(countFoodCalorie < countExerciseCalorie){
        return ("-" + (countExerciseCalorie - countExerciseCalorie))
    }
    else{
        return countFoodCalorie
    }
    
}
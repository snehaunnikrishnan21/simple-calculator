// display in calculator screen
function displayContent(content){
    result.value += content
}

// clear data
function clearCalScreen(){
    result.value =""
}

// backspace
function removeCalc(){
    result.value = result.value.slice(0,-1)
}

// Evaluation
function calcout(){
    result.value = eval(result.value)
}
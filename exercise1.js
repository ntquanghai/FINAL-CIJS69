function adjacentElementsProduct(inputArray) {
    let tempArr = [];
    let currVal;
    for(let i = 1; i < inputArray.length; i++) {
        currVal = inputArray[i]*inputArray[i-1];
        tempArr.push(currVal);
    }
    tempArr.sort(function(firstNum,secondNum) {
        return secondNum - firstNum;
    })

    return tempArr[0];
}

let inputArray = [2,3,-5,-2,4]
console.log(adjacentElementsProduct(inputArray));
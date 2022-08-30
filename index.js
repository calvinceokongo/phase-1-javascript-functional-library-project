function myEach(testArr, alert) {
    const objValue = Object.values(testArr)
    objValue.forEach(test => {
        alert(test)
    });
    return testArr
}

function myMap(testArr, callback) {
  const objValues = Object.values(testArr);
  callback = objValues.map(multiply => multiply * 3)
  return callback
}

// const myReduce = function (testArr, callback, acc) {
//     let objValues = Object.values(testArr);
  
//     if (!acc) {
//       acc = objValues[0];
//       objValues = objValues.slice(1);
//     }
  
//     const newArr = objValues.length;
  
//     for (let i = 0; i < newArr; i++) {
//       acc = callback(acc, objValues[i], objValues);
//     }
//     return acc;
//   };
// function myReduce(testArr, callback, red ) {
//     const objValue = Object.values(testArr)
//     callback = objValue.reduce(test => test + val)
// }

function myReduce(collection, callback, acc) {
    const objValues = Object.values(collection)
    if (acc){
        let total = objValues.reduce(function(previous, current) {
            return previous + (current * 3)
        },acc)
    return total;
    }else {
        let total = objValues.reduce(function(previous, current) {
            return previous + (current * 3)
    })
    return total;
}
}


  function myFind(testArr, target) {
    testArr = Object.values(testArr)
    for(let i = 0; i < testArr.length; i++)
    if (target(testArr[i]))
    return testArr[i]
    return undefined
    
  }

function myFilter(testArr, excluder) {
    let objValues = Object.values(testArr)
    return objValues.filter(number => number > 10)
}

function mySize(testArr) {
    let objValues = Object.values(testArr)
    const newTestArr = new Set(objValues)
    return newTestArr.size;
}

// function myFirst(testArr, number) {
//     let objValues = Object.values(testArr)
//     return objValues.fir
// }
function myFirst(testArr, num) {
    let objValues = Object.values(testArr)
    if (num) {
        return objValues.slice(0, 3)
    }
    return objValues[0]
}

function myLast(testArr, num) {
    let objValues = Object.values(testArr)
    if (num) {
        return objValues.slice(-num)
    }
    return objValues[3]
}

function myKeys(testArr) {
return Object.keys(testArr)
    
}

function myValues(testArr) {
    return Object.values(testArr)
        
    }
    

    // js functional library
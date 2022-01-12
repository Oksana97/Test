let arrayNumbers = [
  [3, 7, 12, 13, , 0 ,17, 21, ];

];

    function selectMainDiagonal(items) {
    let length = items.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (i == j){
                 arrayNumbers.push(arr[i][j]);
            }
        }
        }
    }
    
    selectMainDiagonal(arr);
    console.log(arrayNumbers);
    let arr = []


  
    
  
  
  newFunction();


function newFunction() {
    let items = [3, -1, -3, 15, 35, 8, 16];
    items.sort((a, b) => b - a);
    console.log(items);

    // [35, 16, 15, 8, 3, -1, -3] 
}

    newFunction_1();

function newFunction_1() {
    Math.max(3, -1, -3, 15, 35, 8, 16);
    Math.min(3, -1, -3, 15, 35, 8, 16);

    // 35
    // -3
}





x = findMax(3, -1, -3, 15, 35, 8, 16);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}


















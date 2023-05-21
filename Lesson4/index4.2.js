let arrayNumbers = [
  [3, -7, 12, 13, 0 ,17, 21],
  [-7, -1, 5, -2, 9, 11, 2],
  [12, 5, -3, 12, 22, 15, 30],
  [6, -2, 12, 15, 13, 4, 4],
  [0, 9, 22, 13, 35, 1, 24],
  [17, 11, 15, 4, 1, 8, -5],
  [21, 2, 30, -4, 24, -5, 16]

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


















let arrayNumbers = [3, 7, 12, 13, , 0 ,17, 21, ];

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
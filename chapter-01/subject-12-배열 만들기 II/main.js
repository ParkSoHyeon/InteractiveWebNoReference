var arr1 = [[2, 1], [4, 3]];
var arr2 = [[3, 2, 1], [5, 4], [6]];
var arr3 = [[3], [4, 5], [6], [7], [8, 9, 10]];

function restoreArray(arr) {
    let arrResult = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            arrResult.push(arr[i][j]);
        }
    }

    return arrResult;
}

// 결과 예시
console.log(restoreArray(arr1));
console.log(restoreArray(arr2));
console.log(restoreArray(arr3));
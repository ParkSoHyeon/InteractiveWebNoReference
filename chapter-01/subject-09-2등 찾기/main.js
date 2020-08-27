function getSecondBiggestNumber(arr) {
    // 코드를 작성하세요.
    let arrSort = [];

    // 정렬 후 2등 반환
    // while (arr.length > 1) {

    // 2등 찾으면 반환
    while (arrSort.length < 3) {
        let maxNum = 0
        let maxIndex = 0

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > maxNum) {
                maxNum = arr[j];
                maxIndex = j;
            }
        }
        arrSort.push(maxNum);
        arr.splice(maxIndex, 1);
    }

    return arrSort[1];
}

// 테스트 코드
console.log(getSecondBiggestNumber([4, 7, 2, 1, 9, 3, 6, 5]));
console.log(getSecondBiggestNumber([80, 2, 44, 21, 92, 3, 51]));
console.log(getSecondBiggestNumber([4, 7, 6, 5]));
function range(start, end, step) {
    let result = [];

    if (step > 0) {
        // 양수
        for (let i = start; i < end; i+=step) {
            result.push(i);
        }
    }
    else {
        // 음수
        for (let i = start; i > end; i+=step) {
            result.push(i);
        }
    }

    return result;
}

// 결과 예시
console.log(range(1, 6, 1));
console.log(range(3, 10, 2));
console.log(range(10, -10, -4));
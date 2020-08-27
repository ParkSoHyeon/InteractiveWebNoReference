function factorial(n) {
    var result = 1;
    // 코드를 작성하세요.

    if (n <= 1) {
        return 1;
    }
    else {
        for (let i = n; i > 0; i--) {
            result *= i;
        }
    }

    return result;
}

// 테스트 코드
console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));
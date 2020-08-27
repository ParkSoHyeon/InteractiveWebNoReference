function printTriangle(height) {
    console.log(`높이: ${ height }`)
    for (let i = 1; i <= height; i++) {
        let result = '';

        for (let j = 0; j < i; j++) {
            result += '*';
        }

        console.log(result);
    }
}

printTriangle(5);
printTriangle(3);
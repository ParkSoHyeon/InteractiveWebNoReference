function countCharacter(word, ch) {
    let count = 0;

    word = word.toLowerCase();
    ch = ch.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            count++;
        }
    }

    return count;
}

function countA(word) {
    return countCharacter(word, 'A');
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
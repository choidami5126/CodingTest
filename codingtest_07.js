// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    let answer = 0;
    
    for (let i = 0; i < 10; i++) {
        if (numbers.includes(i)) {
            continue;
        }
        answer += i;
    }
    console.log(answer)
    return answer;
}
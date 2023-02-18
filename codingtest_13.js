// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(arr, divisor) {
    var answer = [];

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer.push(arr[i])
        }
    }
    answer.sort((a, b) => a - b)
    return answer.length === 0 ? [-1] : answer;
}
console.log(solution([3, 2, 6], 10))

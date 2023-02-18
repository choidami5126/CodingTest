// https://school.programmers.co.kr/learn/courses/30/lessons/12937

// num으로 들어오는 숫자가 홀수일경우 Odd를 짝수일 경우 Even을 반환한다.
function solution(num) {
    if (num % 2 === 0) { 
    // 2로 num을 나눈 나머지가 0일 경우 짝수이므로
        return "Even";
    // Even을 반환
    } else { 
        return "Odd";
    // 나머지가 있을 경우 홀수이므로 Odd를 반환한다.
    }
}
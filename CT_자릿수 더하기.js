// https://school.programmers.co.kr/learn/courses/30/lessons/12931

console.log(solution(45664))

function solution(n) {
    let answer = 0;
    for(let i of n.toString()) {
    // 자연수 n을 문자열로 변환한 문자의 i(한자리)를
        answer += parseInt(i)
        // answer 변수에 전부 더해준다.
    }
    return answer
}

// for..of의 사용법을 어느정도 이해한 문제
// 이 간단한 문제를 배열로 만들었다, 다시 합쳤다가, 문자열로 만들었다가...
// 이해하고 있는 메서드가 많을 수록 풀이가 간단해진다....
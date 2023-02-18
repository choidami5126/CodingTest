// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// a, b 배열 안에 있는 같은 인덱스의 수를 곱해 그 값들을 더한 값을 반환하는 문제이다.
function solution(a, b) {
    var answer = 0;
    for(i = 0; i < a.length; i++) {
        answer += a[i] * b[i]
        // 초기화한 변수 answer에 a[i]*b[i] 값을 모두 더 해준다.
    }
    return answer;
}




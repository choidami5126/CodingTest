// https://school.programmers.co.kr/learn/courses/30/lessons/12954


function solution(x, n) {
    var answer = [];
    
    for(i = 0; i < n; i++) {
        answer.push(x * (i + 1))
    }
    return answer;
}


function solution(x, n) {
    return Array.from({length: n}, (_, i) => x * (i + 1));
    // array.from 메서드는 유사 배열 객체 또는 이터러블 객체를 배열로 변환한다.
    // 
  }
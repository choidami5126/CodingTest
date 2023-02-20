// https://school.programmers.co.kr/learn/courses/30/lessons/12932

console.log(solution(12345))

function solution(n) {
    let num = []
    
    for(let i of n.toString()) {
    // n을 문자열로 바꾼 단어 중 i(한자리)
        num.push(parseInt(i))
    }   // 선언해 놓은 배열에 숫자 타입으로 변환한 값을 넣어준다.
    answer = num.reverse()
    // 생성된 배열을 역순으로 정렬한다.
    return answer;
}

// for..of를 활용하니 너무나 간단한 문제였다.
// 입출예를 봤을 때는 오름차순 정렬을 요구하는 듯 했으나 답안 제출 시 많은 오답이 나오는 것을 보고
// 그냥 역순을 요구하는 것으로 판단해 .reverse() 메서드를 사용해 문제를 완성할 수 있었다.

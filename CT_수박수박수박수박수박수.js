// https://school.programmers.co.kr/learn/courses/30/lessons/12922 

// 해당 문제는 매개변수 n의 값에 맞는 '수박'이라는 문자열을 반환하는 문제이다
// 'n'의 값이 3이라면 '수박수', 6이라면 '수박수박수박' 을 반환한다.
function solution(n) {
    const SuBak = '수박'
    // 변수를 지정하고 값을 '수박' 이라는 문자열로 지정한다.
    let Ost = SuBak.repeat(n)
    // repeat 메서드로 n번 만큼 '수박' 문자열을 반복한다. 이때 반환 해야할 값보다 '수박' 문자열이 길어지게 된다.
    let Tst = Ost.split('')
    // split 메서드로 문자열을 한 글자씩 분리해 배열로 반환한다.
    Tst.length = n;
    // 배열의 길이를 n으로 조정한다. 이때 뒤에서부터 자르게 된다.
    
    answer = Tst.join('')
    // join 메서드를 사용해 배열 안의 모든 요소를 하나의 문자열로 병합한다.
    return answer
}
console.log(solution(5))

// 메서드를 아는 만큼 구상할 수 있는 폭이 넓어진다는 것을 체감한 문제이다.
// 또한 내가 생각할 수 있는 거의 모든 기능은 JS 안에 있다는 것 또한 체감했다.
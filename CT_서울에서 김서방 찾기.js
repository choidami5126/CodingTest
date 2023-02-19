// https://school.programmers.co.kr/learn/courses/30/lessons/12919

// 해당 문제는 배열 seoul의 요소 중 'Kim'의 인덱스 값을 찾고,
// 제시된 반환 값과 동일한 형태로 'Kim'의 인덱스 값을 넣어 반환 해주면 된다. 
function solution(seoul) {
    let kimsubang = seoul.indexOf('Kim')
    // indexOf 를 사용해서 'Kim'의 인덱스 값을 찾고, 해당 값을 변수로 선언한다.
    let answer = `김서방은 ${kimsubang}에 있다`
    // 중간에 kimsubang의 값을 넣어줘야 하므로 ``안에 내용을 넣어준다.
    return answer;
}

// 계속 반환 값으로 '김서방은 ${kimsubang}에 있다' 가 나와 고심하던 중
// ${kimsubang} 해당 부분이 변수의 값을 나타내는 것이 아닌 일반 문자열로 취급되고 있는 것을 확인하고,
// 1주차에서 ``(백틱)안에 작성할 때 ${kimsubang} 부분이 활성화 되는 것을 기억하고 수정 하니 바로
// 정상 출력 되었다.

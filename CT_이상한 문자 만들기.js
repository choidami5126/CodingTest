// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    const list = s.split(' ')
    // 문자열을 공백(' ')을 기준으로 나눠 배열로 변환한다.
    let list_up = ''
    let blank = []
    
    list.forEach(item => {
        for(let i = 0; i < item.length; i++) {
        // 단어의 길이만큼 반복하는데
            if(i % 2 == 0) {
                list_up += item[i].toUpperCase()
                // 단어의 인덱스가 짝수이면(0 포함) 대문자로 변환해 list_up에 추가한다.
            } else {
                list_up += item[i]
                // 단어의 인덱스가 홀수이면 그대로 list_up에 추가한다.
            }
        }
        blank.push(list_up)
        // 변환된 문자열을 배열에 넣어준다.
        list_up = ''
        // 다음 원소(단어) 처리를 위해 list_up을 초기화 한다.
    });
    console.log(blank)
    answer = blank.join([' '])
    // 각 단어의 사이에 공백을 추가한다.
    return answer
}

// forEach 사용 방법을 약간은 알게 해준 문제 보통은 index 값을 가지고 풀이를 했다면,
// forEach는 요소(원소)에 변환을 줄 수 있는 메서드인 것을 알았다.

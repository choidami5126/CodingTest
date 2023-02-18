// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {

    let Res = s.toLowerCase()
    // 변수 Res 매개변수 s에 들어오는 인수를 toLowerCase 메서드를 사용해 모두 소문자로 변환하고 Res에 
    let RRes = Res.split('');
    // 변수 RRes에 Res의 문자열을 한자씩 모두 잘라 저장한다.
    let Pbox = [];
    let Ybox = [];

    for (let i = 0; i < RRes.length; i++) {
        if (RRes[i] == 'p') {
            Pbox.push(RRes[i])
            // RRes[i] 값이 소문자 p와 같을 경우 RRes[i] 값을 Pbox에 넣어준다.
        } else if (RRes[i] == 'y') {
            Ybox.push(RRes[i])
            // RRes[i] 값이 소문자 y와 같을 경우 RRes[i] 값을 Pbox에 넣어준다.
        }
    }
    return Pbox.length == Ybox.length ? true : false
    // Pbox와 Ybox의 배열의 길이가 같을 경우 true, 다를 경우 false를 반환한다.
}

// 해당 문제의 경우 전체적인 코드 틀은 잡았으나, 디테일한 부분이 부족했다.
// Pbox.push(RRes[i]) 이 부분을 Pbox.push[i] 이렇게만 작성하여, 계속 값이 담기지 않고 있었다.
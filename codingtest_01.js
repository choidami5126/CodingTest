// https://school.programmers.co.kr/learn/courses/30/lessons/86491
function solution(sizes) {
    var biggerSideMax = [];   // [[a, b], ...] 중 큰 값을 담을 변수를 만든다.
    var smallerSideMax = [];   // [[a, b], ...] 중 작은 값을 담을 변수를 만든다.

    for(i = 0; i < sizes.length; i++) {   // 입력 받은 값을 for문으로 돌려준다.
        
        if(sizes[i][0] > sizes[i][1]){
        // if 첫번째 수가, 두번째 수 보다 크다면
            biggerSideMax.push(sizes[i][0])
            // 앞 숫자를 지정 변수에 넣고,
            smallerSideMax.push(sizes[i][1])
            // 뒷 숫자를 지정 변수에 넣는다.
            
        } else {   //else 두번째 수가, 첫번째 수 보다 크다면
            biggerSideMax.push(sizes[i][1])
            // 뒷 숫자를 지정 변수에 넣고,
            smallerSideMax.push(sizes[i][0])
            // 앞 숫자를 지정 변수에 넣는다.
            //biggerSideMax = [ 60, 70, 60, 80 ], smallerSideMax = [ 50, 30, 30, 40 ]
            // 각각 큰 값과, 작은 값이 예쁘게 담긴다.
        } 
    }
    return Math.max(...biggerSideMax) * Math.max(...smallerSideMax);
    // 이제 각 변수에서 가장 큰 값을 뽑아 곱해주면 답이 된다!
    // 이때 Math.max 함수는 배열이 아닌 숫자 목록을 인수로 받기 때문에, 
    // spread 문법을 통해 배열을 인수로 바꿔줘야 정상적으로 값을 받을 수 있다.
    // 처음 해보는 코딩 테스트로 상당한 난이도로 체감했다.
}
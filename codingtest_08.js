// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    let answer = 0;
    
    for(let i = 0; i < absolutes.length; i++) {
        if(signs[i]) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
         console.log(answer)
    }
    return answer;
}
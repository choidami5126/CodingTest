// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    var answer = '';
    if (s.length % 2 ==0) {
       answer = s.substring(s.length/2 -1,s.length/2 +1);
    } else {
        answer = s.substring(Math.floor(s.length/2) , Math.floor(s.length/2) + 1);
    }
    return answer;
}

function solution(s) {

    if (s.length % 2 ==0) {
       return s.substring(s.length/2 -1,s.length/2 +1);
    } else {
        return s[Math.floor(s.length/2)];
    }
}



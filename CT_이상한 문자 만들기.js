// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    const list = s.split(' ')
    let list_up = ''

    for(let i = 0; i < list.length; i++) {
        if(i % 2 == 0) {
            list_up += list[i][i].toUpperCase()
        } else {
            list_up += list[i][i].toLowerCase()
        }
    }
    return list_up
}

console.log(solution("try hello world"))
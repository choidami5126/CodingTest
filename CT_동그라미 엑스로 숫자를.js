// function solution(str){
// 	let answer= 0;
//     let list = str.replace(/X/g, ' ')
//     let list_up = list.split(' ')
//     let score = 0;
//     let Clean_list = list_up.filter(item => {
//         if(item !== '')
//         return true;
//     })
//     console.log(Clean_list)
//     for(let list of Clean_list) {
//         for(let i = 0; i < list.length; i++) {
//             if(list[i] === 'O') {
//                 score++;
//                 answer += score
//             } else {
//                 score = 0;
//             }
//         }
//     }
//     return answer
// }
// let str="OOOOXXXOXOOXOOOOOXO";
// console.log(solution(str))

function solution(str){
	let answer = 0;
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === 'O') {
            count++;
            answer += count;
        // 문자열의 [i]번째 값이 'O'와 일치할 경우 coount를 하나씩 늘리고, 답에 더해주는 것을 반복한다
        } else {
            count = 0;
        }
        // 'X'문자열이 나올 경우 늘어난 count를 초기화 한다.
    }
	return answer;
}
let str="OXOOOXXXOXOOXOOOOOXO";
console.log(solution(str))

// for문 하나로 간단하게 풀 수 있던 문제를 위와 같이 너무 어렵게 구상하다
// 결국 계속 되는 오류로 리셋을 했다. 정석이라면 오류를 해결해 작성한 코드로 답을 반환해야겠지만,
// 시험이라는 압박에 새로 하는 것을 택했다.
// 리셋 후 다시 문제를 보니 굳이 배열로 만들 필요도, 'X'를 빼줄 필요도 없는 간단한 문제라는 것이 다시 보였다.
// 여러 메서드를 접하면서 for, if 문을 의식적으로 피하고 있었는데 이 또한 사고의 축소를 가져온 것 같다.
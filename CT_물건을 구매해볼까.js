// 해당 문제는 잔돈을 500, 100, 50, 10원의 동전으로 받을 때
// 가장 동전의 갯수가 적은 값을 구하는 문제이다.

function solution(num){
	let answer= 0;
    let penny = 1000 - num;
    // 소지금에서 지불할 가격을 빼준다.
    let coins = [500, 100, 50, 10]
    // 순차적으로 사용할 요소들을 배열로 만들어 둔다.

    for(let coin of coins) {
    // 반들어 놓은 배열의 원소들을 반복문으로 순회한다.
        let coin_give = Math.floor(penny / coin)
        // 잔돈을 원소로 나눈 값에서 소수점 밑으로는 내림 해주고 그 값을 변수에 할당한다.
        answer += coin_give
        // 답에 변수의 값을 더 해준다.
        penny = penny - coin * coin_give
        // 다음 원소가 순회할 때 정상적인 값을 반환할 수 있도록
        // 원소와 원소가 사용된 횟수를 곱해 잔돈에서 빼준 후 다음 원소의 순회를 시작한다.
    }
	return answer;
}

let num1 = 160;
console.log(solution(num1))

// 아직 for..of에 대해서 정확하게 이해하지는 못했다는 생각이 든다.
// 사실 왜 for..of 메서드를 골랐냐고 묻는다면 대답할 수 없다.
// 좀더 정진하자..

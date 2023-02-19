function solution(arr1, arr2){
	let answer = 0;
    const Realtime = arr2.map((time) => {
    // map 메서드를 사용해 arr2를 활용한 새로운 배열 Realtime을 만든다.
        if(time > 28) {
            return 21;
        }
        // 'time' 즉 arr2의 모든 요소를 순회 하면서 '28' 보다 큰 값에는 '21'을 반환하고
        return time
        // 아닐경우 그대로 'time'을 반환한다.
    })
    for(let i = 0; i < Realtime.length; i++) {
        answer += Realtime[i] - arr1[i]
    // 공부한 시간의 합을 구하는 문제임으로
    // 체크아웃 시간 'Realtime의 원소에서 체크인 시간 arr1의 원소들을 빼준 값을 더해 변수 answer에 할당한다.
    // map 메서드를 사용하여, 동일한 index를 가진 배열 'Realtime'을 만들었기에
    // 같은 index 값에서 빼주어도 문제가 없다.
    }
	return answer;
}
let arr1=[9, 9, 9, 9, 7, 9, 8];
let arr2=[23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2))
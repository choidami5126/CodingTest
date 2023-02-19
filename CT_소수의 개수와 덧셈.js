let s = "97 75 88 99 95 92 73";
console.log(solution(s))

function solution(s) {

    let list = s.split(' ');
    console.log(list)
    // split 메서드를 사용해 문자열을 배열로 변경합니다.
    // ['97','75','88','99','95','92','73']
    // split('') 공백 없이 사용할 경우
    // ['9', '7', ' ', '7', '5',' ', '8', '8', ' ', '9','9', ' ', '9', '5', ' ','9', '2', ' ', '7', '3']
    // 한자씩 자르고, 공백까지도 포함한 배열이 생성되기 때문에
    // (' ') 단어 구분을 해주도록 사용한다.
    let Primenum = list.filter((item) => {
        if(item < 2) return false;
        // '2'보다 작은 수는 소수가 아니다.
        if(item === 2) return true;
        // '2'는 소수가 맞다.
        for(let i = 2; i < item; i++) {
            if(item % i === 0)
            return false
            // '2'부터 'item'까지의 수로 'item'을 나눴을 때 나머지가 '0'이면 소수가 아니다.
        }
        return true;
        // 해당식을 모두 통과한 수 만이 소수 이다.
    })
    let Nomalnum = list.filter((item) => !Primenum.includes(item))
    // 차집합을 구하는 식을 사용해, 'list'의 원소중 'Primenum'의 원소를 포함하지 않는 원소만 'Nomalnum'에 담는다.
    let answer = `${Math.max(...Primenum)} ${Math.min(...Nomalnum)}`
    // Primenum에서 제일 큰 수와, Nomalnum에서 제일 작은 수를 구한다.
    // 이때, Primenum과 Nomalnum은 배열이므로 스프레드 문법을 사용해 배열을 풀어준다.
	return answer;
}




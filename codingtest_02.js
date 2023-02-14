// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {  // 'solution' 함수를 정의한다. 이 함수는 매개변수 'strings'와'n' 을 받는다.
    return strings.sort((a, b) => {  // 'strings'의 배열을 정렬하고, 정렬된 배열을 반환 한다. 
        // sort 함수는 비교함수가 return 하는 값에 따라 원소들의 순서를 결정한다. 1을 반환하면 원소의 순서를 바꾸고, -1을 반환하면 홀드, 0을 반환 시 사전순 정렬을 한다.
        if(a[n] > b[n]) return 1;  // 원소의 'n'번째 값을 기준으로 'a[n]'이 'b[n]보다 크다면 1을 반환한다.
        // a = 'sun', b = 'bed'일 경우 a[n]에 해당하는 'u'가 b[n]에 해당하는 'e' 보다 크기 때문에 1을 반환하고, 두 원소는 순서를 바꾼다.
        else if(a[n] < b[n]) return -1; // 원소의 'n'번째 값을 기준으로 'b[n]'이 'a[n]'보다 크다면 -1을 반환한다.
        // a = 'car', b = 'sun' 일 경우 a[n]에 해당하는 'a'가 b[n]에 해당하는 'u' 보다 작기 때문에 -1을 반환하고, 두 원소는 순서를 바꾸지 않는다.
        else return a > b ? 1 : -1; //  남은 경우의 수가 a[n] == b[n] 뿐이기에 전체 코드를 사전순으로 정렬한다.
        // a = 'abce' b = 'abcd' 일 경우 a의 마지막자 'e'가 b의 마지막자 'd' 보다 크기 때문에 1을 반환하여 두 원소는 순서를 바꾼다. 
    })
 }
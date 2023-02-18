// https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    var answer = 0;
    let Maxmoney = 0;
    
    for(i = 0; i < count; i++) {
        Maxmoney += (i + 1) * price;
    }
        if(Maxmoney > money) { 
            answer = Maxmoney - money;
        } else {
            return 0;
        }
    return answer;
}

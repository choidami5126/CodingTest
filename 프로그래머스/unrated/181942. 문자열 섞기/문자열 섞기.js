function solution(str1, str2) {
    var answer = '';
    var len = str1.length;
    
    for (var i = 0; i < len; i++) {
        answer += str1[i] + str2[i];
    }
    
    return answer;
}

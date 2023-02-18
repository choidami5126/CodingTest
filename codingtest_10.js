https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(arr1, arr2) {
    const answer = [];
    
    arr1.forEach((row, i) => {
      const newRow = [];
      
      row.forEach((value, j) => {
        newRow.push(value + arr2[i][j]);
          console.log(arr2[i][j])
      });
      
      answer.push(newRow);
    });
    
    return answer;
  }
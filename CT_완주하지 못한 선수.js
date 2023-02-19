https://school.programmers.co.kr/learn/courses/30/lessons/42576

// function solution(participant, completion) {
//     let fail_list = participant.reduce((other_name, name) => {
//         if(!completion.includes(name)) {
//             other_name.push(name);
//             console.log(other_name)
//         }
//         return other_name;
//     },[]);
//     answer = fail_list[0];
// }
// console.log( solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))

function solution(participant, completion) {
    const fail_list = participant.reduce((acc, name) => {
      if (!completion.includes(name)) {
        acc.push(name);
      }
      return acc;
    }, []);
  
    return fail_list;
  }
  
  console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "leo"


  // function solution(participant, completion) {
//     let success_list = participant.sort();
//     let fail_list = completion.sort();

//     for(let i = 0; i < success_list.length; i++) {
//         for(let j = 0; j < fail_list.length; j++) {
            
//         }
//     }
    
// }
// console.log( solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))
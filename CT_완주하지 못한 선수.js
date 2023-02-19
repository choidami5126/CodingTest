https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    const participant_list = participant.sort()
    // participant 배열을 사전순으로 정렬한다.
    const completion_list = completion.sort()
    // completion 배열을 사전순으로 정렬한다.
    for(let i = 0; i < participant_list.length; i++) {
      if(participant_list[i] !== completion_list[i])
      return participant_list[i]
      // 정렬한 participant 배열을 반복하면서 정렬한 completion_list 배열중
      // 같은 index의 이름이 일치하지 않는 사람을 반환한다.
    }
  }

// 해당 문제에를 처음 보고 filter 와 includes 를 사용해 첫 배열에서 두번째 배열에 없는 이름을 반환하려 했지만
// 동명이인이 존재하는 지점에서 막혀 중복 삭제를 위한 Set 등 여러 시도를 하며 고전하였는데,
// 본인은 sort로 풀었다는 팀원의 말을 듣고 sort로 식을 짜보니 너무나 간단하게 풀리는 것이 아닌가...
// 새로 배운 메서드를 활용하고자 하는 마음에 너무 꼬아서 생각한 문제인 것 같다.



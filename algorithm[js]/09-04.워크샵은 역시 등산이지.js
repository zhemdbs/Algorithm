function solution(arr){
  // 1. 배열을 객체형태로 변경 {팀번호 :  인원수}
  const team = {};
  arr.map((팀번호) => {
    // 팀 번호를 key, 등장하는 횟수를 value로 한 객체
    // - team.key = value ->  '팀번호'가 변수명이기 때문에 사용 불가
    // - team[key] = value
    if(team[팀번호] === undefined) {
      // 키를 가진 속성이 존재하지 않으면 일단 처음에는 1을 넣어라
      team[팀번호] = 1;
    } else {
      team[팀번호] = team[팀번호] + 1; //여기서 값은 기존에 있던 값에 하나씩 추가하는 것
    }
  })
  console.log(team)
  // 2. 홀수인 인원
  const 인원수배열 = Object.values(team);
  // console.log(인원수배열)
  const 홀수 = 인원수배열.filter(x => x % 2 === 1)[0];
  // console.log(홀수)
  
  // 3. 팀번호
  const 팀번호배열 = Object.keys(team);
  // console.log(팀번호배열);
  const 홀수팀번호 = 팀번호배열.filter((팀번호) => team[팀번호] === 홀수)
  // console.log(홀수팀번호)
  
  return Number(홀수팀번호[0])
  
}

solution([1, 2, 2, 1, 1]); // 1
solution([5, 1, 2, 2, 5, 3, 3, 1, 5]); // 5
solution([2, 4, 3, 3, 2, 4, 1]); // 1

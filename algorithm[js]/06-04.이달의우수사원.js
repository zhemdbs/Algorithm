function solution(vote){
  // 투표 결과가 담긴 vote 배열에 사원 번호가 1번인 직원의 득표수가 담겨 있음
  // 가장 많은 표를 받은 직원의 사원 번호는?
  
  // 최다 득표자는 단 한 명
  // 직원의 사원 번호는 1부터 순서대로 공백없이 부여
  
  return vote.indexOf((Math.max(...vote))) + 1;

}

solution([5, 2, 0, 1, 0]); // 1
solution([0, 0, 1, 7, 0, 4, 2]); // 4
function solution(prev, join) {
  // 지난 발표에서 첫 발표한 사람은 마지막 순서로 발표
  // 새로 참여하는 사람은 첫번째 발표
  
  // 지난번 발표한 사람들의 닉네임 순서 배열 prev
  // 새로 참여한 사람의 닉네임 join

  const firstPresentation = prev.shift();
  prev.push(firstPresentation);
  
  prev.unshift(join);
  
  return prev;
}

solution(["sudo", "임금"], "라떼");
// ["라떼", "임금", "sudo"];
solution(["아버", "광어", "안드로이드", "siri"], "피카츄");
// ["피카츄", "광어", "안드로이드", "siri", "아버"];
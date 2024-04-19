function solution(stacks) {
  // 프로젝트에서 사용된 기술 스택 이름 배열 stacks
  // 내림차순으로 정렬하라
  
  stacks.sort();
  stacks.reverse();
  
  return stacks;

}

solution(["typescript", "express", "node", "react"]);
// ["typescript", "react", "node", "express"]
solution(["docker", "graphql", "javascript"]);
// ["javascript", "graphql", "docker"]
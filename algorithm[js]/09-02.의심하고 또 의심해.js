function solution(team) {

  return team.dev !== undefined ? team.dev : -1;
  
  
}

solution({ dev: ["카페", "라떼", "원두"] });
// ["카페", "라떼", "원두"]
solution({ mento: ["은정", "세준", "아라"] });
// -1
solution({ dev: [], operation: ["시윤"] });
// []
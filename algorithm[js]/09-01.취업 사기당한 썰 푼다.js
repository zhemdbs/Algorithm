function solution(team) {
  team.dev.push('원두');

  return team;
}

solution({ dev: ["카페", "라떼"] }); 
// {dev: ["카페", "라떼", "원두"]}
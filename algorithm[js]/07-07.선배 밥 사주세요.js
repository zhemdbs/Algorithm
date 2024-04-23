function solution(map){
  
  for(let i = 0; i < map.length; i++) {
    // console.log(map[i])
    let 방;
    for(let j = 0; j < map[i].length; j++) {
      // console.log(map[i][j])
      if(map[i][j]) {
        // console.log(i, j);
        return `선배님은 ${i + 1}번째 방, ${j + 1}번 자리에 있습니다.`
      }
    }
  }
  return `선배님을 찾을 수가 없습니다.`
  
  
}

solution([[0, 0], [0], [0, 1, 0], [0, 0]]);
// “선배님은 3번째 방, 2번 자리에 있습니다.”
solution([[0], [0, 0], [0], [0, 0], [0, 0]]);
// “선배님을 찾을 수가 없습니다.”

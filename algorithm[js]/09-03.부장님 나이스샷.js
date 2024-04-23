function solution(winners) {
  let result = [];
  for(prop in winners) {
    // console.log(prop, winners[prop]);
    for(let i = 0; i < winners[prop]; i++) {
      result.push(Number(prop));
    }
  }
  return result;
}

solution({
  1: 1,
  2: 2,
  3: 4,
});
// [1, 2, 2, 3, 3, 3, 3];

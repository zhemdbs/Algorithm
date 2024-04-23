function solution(bill) {
  let result = [];
  for(let i = 0; i < bill.length; i++) {
    let total = 0;
    for(let j = 0; j < bill[i].length; j++) {
      // console.log(bill[i][j])
      total = total + bill[i][j]
    }
    // console.log(total)
    result.push(total);
  }
  
  return result;
  
}

solution([
  [1000, 500, 800],
  [600, 200, 200],
]); 
// [2300, 1000]
solution([
  [1, 2],
  [3, 3, 4, 5, 6],
]); 
// [3, 21]
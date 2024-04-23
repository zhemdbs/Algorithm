function solution(barcode){
  const zero = barcode.filter((value) => value === 0)
  // console.log(zero)
  
  const remainder = barcode.filter((x) => x)
  // console.log(remainder)
  
  return [...remainder,...zero]
  
}

solution([8, 8, 0, 1, 2, 3, 4, 5, 6, 0, 1, 0, 5]);
// [8, 8, 1, 2, 3, 4, 5, 6, 1, 5, 0, 0, 0]
solution([0, 7, 6, 0, 0, 4, 6, 9, 0, 2, 5, 0, 1]);
// [7, 6, 4, 6, 9, 2, 5, 1, 0, 0, 0, 0, 0]
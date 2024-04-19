function solution(prices) {
  // 키보드의 가격 prices
  // 가장 저렴하게 구매할 수 있는 가격이 무엇인가?
  
  return Math.min(...prices);
}

solution([20000, 113000, 67000, 40500, 99000]); // 20000
solution([19900, 54200, 43000]); // 19900
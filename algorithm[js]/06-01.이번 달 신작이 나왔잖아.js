function solution(money) {
  // 모으는 피규어의 가격은 개당 57,000
  // 받게 되는 상여금 money
  // 최대 살 수 있는 피규어의 개수는?
  
  return Math.floor(money / 57000);
}

solution(230000); // 4
solution(769000); // 13
solution(35000); // 0
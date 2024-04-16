function solution(n, members) {
  // 내가 가진 돈 : n + 6000
  //음료 값 : 4100
  //낼 돈 : members * 음료 값
  
  //남은 돈 ?
  return (n + 6000) - (4100 * members)
	
}

solution(50000, 12); // 6800
solution(35000, 9); // 4100
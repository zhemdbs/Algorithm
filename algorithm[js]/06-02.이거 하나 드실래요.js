function solution(n) {
  // 한 팩당 5개가 들어있는 호빵
  // n명의 사무실과 나눠 먹어야 하기에 최소 몇 팩 구매해야 하는가?

  // 적어도 한사람당 한 개 호빵 먹음

  return Math.ceil(n / 5);
}

solution(23); // 5
solution(76); // 16
solution(3); // 1
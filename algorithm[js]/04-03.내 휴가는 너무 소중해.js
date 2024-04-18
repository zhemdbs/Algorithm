function solution(year){
  if (year === 3) {
    return 5;
  } else if (year === 5) {
    return 12;
  } else if (year === 10) {
    return 30;
  } else {
    return 0;
  }
}

solution(3); // 5
solution(4); // 0
solution(5); // 12
solution(7); // 0
solution(10); // 30
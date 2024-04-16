function solution(a, b) {
  //종이는 1cm 정사각형으로 만들어야 하며,
  //가로 a, 세로 b
  //가위질 몇번 해야하는가?

  //내 답
  // return a * b - 1;

  
  //풀이
  //가로 가위질 횟수
  const row = a - 1;
  //세로 가위질 횟수
  const col = (b - 1) * a;
  return row + col;
}

solution(100, 100); // 9999
solution(1, 1); // 0
solution(20, 50); // 999

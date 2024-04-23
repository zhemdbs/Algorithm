function solution(list, limit, reports) {
  //현재까지 예약된 손님 리스트 list
  //수용가능한 예약자 수 limit
  //새로 예약 신청된 손님 수 reports
  
  let people = 0;
  let inx = 0;
  
  while(inx < list.length) {
    people = people + list[inx];
    inx  = inx + 1;
  }
  
  return people + reports <= limit;
}

solution([1, 5, 4, 3], 15, 3); // false
solution([1, 1, 1, 2], 7, 2); // true
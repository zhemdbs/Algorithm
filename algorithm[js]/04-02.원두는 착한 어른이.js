function solution(age){
  if(age >= 0 && age <=3) {
    return '분유 스틱'
  } else if(age >= 4 && age <= 7) {
    return '초콜릿과 사탕'
  } else {
    return '쿠키'
  }
  
}

solution(7); // “초콜릿과 사탕”
solution(2); // “분유 스틱”
solution(19); // “쿠키”
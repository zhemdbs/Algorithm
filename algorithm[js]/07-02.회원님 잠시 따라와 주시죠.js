function solution(list) {
  // 숫자1이 입력된 회원은 동의했단 의미의 'Yes'
  // 숫자0이 입력된 회원은 동의하지 않았다는 의미의 'No'

  const result = [];
  for(let i = 0; i <list.length; i++) {
    if(list[i] === 1) {
      result.push('Yes')
    } else {
      result.push('No')
    }
  }
  return result;
  
}

solution([1, 0, 0, 1]); 
// ["Yes", "No", "No", "Yes"]
solution([1, 1, 1, 1, 0, 1]); 
// ["Yes", "Yes", "Yes", "Yes", "No", "Yes"]

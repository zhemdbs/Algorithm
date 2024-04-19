function solution(menuList, today) {
  // 기존에 적어둔 메뉴 목록 menuList
  // 오늘 먹은 점심 메뉴 today

  // 1. 오늘 먹은 점심 메뉴는 기존 메뉴 목록 가장 뒤에 추가
  // 2. 메뉴가 존재한다면 추가하지 않음
  // 3. 메뉴 목록의 길이가 10을 초과하면 더이상 메뉴 추가 하지 않음
  
  if(!menuList.includes(today) && menuList.length < 10) {
    menuList.push(today);
  }
  
  return menuList;
}

solution(["돈까스", "마라샹궈"], "마라탕"); 
// [ "돈까스", "마라샹궈", "마라탕" ]
solution(["국밥", "파스타", "카레라이스"], "닭갈비"); 
// [ "국밥", "파스타", "카레라이스", "닭갈비" ]
solution(["쌀국수"], "쌀국수"); 
// [ "쌀국수" ]